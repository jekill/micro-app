<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Timestampable\Traits\TimestampableEntity;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Fresh\VichUploaderSerializationBundle\Annotation as Fresh;
use Symfony\Component\HttpFoundation\File\File;

use JMS\Serializer\Annotation as JMS;


/**
 * Image
 *
 * @ORM\Table(name="image")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\ImageRepository")
 * @Vich\Uploadable()
 * @Fresh\VichSerializableClass()
 */
class Image
{
    use TimestampableEntity;
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @var Guest
     * @ORM\ManyToOne(targetEntity="Guest")
     */
    private $guest;


    /**
     * @var string
     * @ORM\Column(type="string", length=255, nullable=false)
     * @JMS\SerializedName("source")
     * @Fresh\VichSerializableField(field="uploadedFile",includeHost=true)
     */
    private $fileName;

    /**
     * @var File
     * @Vich\UploadableField(mapping="image", fileNameProperty="fileName")
     */
    private $uploadedFile;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return Guest
     */
    public function getGuest()
    {
        return $this->guest;
    }

    /**
     * @param Guest $guest
     */
    public function setGuest($guest)
    {
        $this->guest = $guest;
    }

    /**
     * @return string
     */
    public function getFileName()
    {
        return $this->fileName;
    }

    /**
     * @param string $fileName
     */
    public function setFileName($fileName)
    {
        $this->fileName = $fileName;
    }

    /**
     * @return File
     */
    public function getUploadedFile()
    {
        return $this->uploadedFile;
    }

    /**
     * @param File $uploadedFile
     */
    public function setUploadedFile(File $uploadedFile)
    {
        $this->uploadedFile = $uploadedFile;
        if ($uploadedFile) {
            $this->setUpdatedAt(new \DateTime('now'));
        }
    }
}

