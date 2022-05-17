<?php

namespace App\Http\Controllers;
use App\Models\Teszt;
use Illuminate\Http\Request;

class TesztController extends Controller
{

    public function index(){
        $ingatlanok = response()->json(Teszt::all());
        return $ingatlanok;
    }
    
    public function tesztek(){
        $adatok = response()->json(Teszt::with('kategoria')->get());
        return $adatok;
    }

    
}
