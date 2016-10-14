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
            $this->get('session')->getFlashBag()->add('message', 'The phone is uploaded #id:');

            return $this->redirectToRoute('homepage');
        }

        return $this->render(
            'default/index.html.twig',
            [
                'form' => $imageForm->createView(),
            ]
        );
    }

    /**
     * @param Request $request
     * @Route("/gallery",name="gallery")
     */
    public function galleryAction(Request $request)
    {
        return $this->render('default/gallery.html.twig');
    }


    /**
     * @Route("/about", name="about")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function aboutAction()
    {

        $readmeContent = '';

        $readmeFile = $this->getParameter('kernel.root_dir') . DIRECTORY_SEPARATOR.'..'. DIRECTORY_SEPARATOR . 'README.md';
        if (file_exists($readmeFile)) {
            $readmeContent = file_get_contents($readmeFile);
        }

        return $this->render(
            ':default:about.html.twig',
            [
                'readme_content' => $readmeContent
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
        } else {
            $em->persist($guest);
        }

        $image->setGuest($guest);
        $em->persist($image);

        $em->flush();
    }
}
