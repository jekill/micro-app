<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Image;
use FOS\RestBundle\Controller\Annotations\Get;
use FOS\RestBundle\Controller\Annotations\Post;
use FOS\RestBundle\Controller\FOSRestController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class API10Controller extends FOSRestController
{
    /**
     * @Post("/images",name="post_image")
     */
    public function uploadImageAction()
    {
    }

    /**
     * @Get("/images",name="get_images")
     */
    public function fetchAllImagesAction()
    {
        return $this->handleView(
            $this->view(['images' => []])
        );
    }

    /**
     * @Get("/images/{id}",name="get_image")
     */
    public function getImageAction(Image $image)
    {
        $view = $this->view($image);

        return $this->handleView($view);
    }


}
