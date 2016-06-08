<?php

namespace AppBundle\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class API10ControllerTest extends WebTestCase
{
    public function testUploadimage()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', 'image');
    }

}
