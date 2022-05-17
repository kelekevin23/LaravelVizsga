<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Tesztkérdések') }}
        </h2>
    </x-slot>

    <!DOCTYPE html>
    <html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content=<?php $token = csrf_token();
                                        echo $token; ?>>
        <title>KelemenKevin_Vizsga</title>

        <!-- bootstrap -->
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">

        <!-- JavaScript Bundle with Popper -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>

        <!-- fájlok a public mappából, onnan kell kezdeni! -->
        <script src="js/jquery-3.6.0.min.js"></script>
        <script src="js/script.js"></script>
        <script src="js/ajax.js"></script>
        <script src="js/teszt.js"></script>


    </head>

    <body class="container container-fluid">
        <div class="oldal container">
            <div class="form-control">
                <select name="kateg" id="kateg"></select>
            </div>
 
            <div class="tarolo container">
            </div>
            <div class="btn btn-primary m-3 ellenorzes">Ellenőrzés</div>
            <div class="btn btn-primary m-3 ujra">Újra</div>
        </div>
        <div class="row masolat">
            <div class="col-12  d-flex justify-content-center p-3 border kerdes"></div>
            <div class="col-md-6  d-flex justify-content-center p-3 border v1"></div>
            <div class="col-md-6  d-flex justify-content-center p-3 border v2"></div>
            <div class="col-md-6  d-flex justify-content-center p-3 border v3"></div>
            <div class="col-md-6  d-flex justify-content-center p-3 border v4"></div>
        </div>

    </body>

    </html>

</x-app-layout>