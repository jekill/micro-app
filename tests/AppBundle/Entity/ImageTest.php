<?php

namespace Tests\AppBundle\Entity;

use AppBundle\Entity\Image;
use Symfony\Component\HttpFoundation\File\File;

class ImageTest extends \PHPUnit_Framework_TestCase
{


    public function testSetUploadedFile()
    {
        $image   = new Image();
        $nowTime = new \DateTime('now');

        $this->assertNull($image->getUpdatedAt());

        $image->setUploadedFile(new File(__DIR__ . '/../data/text.txt'));
        $this->assertEquals($nowTime, $image->getUpdatedAt());
    }
}