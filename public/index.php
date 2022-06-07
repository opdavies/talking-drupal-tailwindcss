<?php

require_once __DIR__.'/../vendor/autoload.php';

use Symfony\Component\Yaml\Yaml;
use Twig\Environment;
use Twig\Loader\FilesystemLoader;

$loader = new FilesystemLoader('../templates');

$twig = new Environment($loader, ['debug' => true]);

echo $twig->render('layouts/home.html.twig', Yaml::parseFile('../resources/data.yaml'));
