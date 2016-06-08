<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Image;
use AppBundle\Form\ImageType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Form\Form;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\VarDumper\VarDumper;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     * @param Request $request
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function indexAction(Request $request)
    {
        $imageForm = $this->createForm(ImageType::class);

        $imageForm->handleRequest($request);
        if ($imageForm->isSubmitted() && $imageForm->isValid()) {
            $this->processImageForm($imageForm);
        }

        return $this->render(
            'default/index.html.twig',
            [
                'form' => $imageForm->createView(),
            ]
        );
    }


    private function processImageForm(Form $imageForm)
    {
        /** @var Image $image */
        $image = $imageForm->getData();

        $guest           = $image->getGuest();
        $guestRepository = $this->get('app.repository.guest');

        $em = $this->get('doctrine.orm.entity_manager');
        $em->persist($image);

        if (($existed = $guestRepository->findByEmail($guest->getEmail())) !== null) {
            $guest = $existed;
        }else{
            $em->persist($guest);
        }

        $image->setGuest($guest);
        $em->persist($image);

        $em->flush();

    }
}
