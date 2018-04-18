<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Perfil extends Eloquent
{
    protected $connection = 'mongodb';
    protected $collection = 'perfil';
    protected $fillable = ['nome'];
}