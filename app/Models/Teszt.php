<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Kategoria;

class Teszt extends Model
{
    use HasFactory;

    public function kategoria() {
        return $this->hasOne(Kategoria::class, 'id', 'kategoriaId');
    }
}
