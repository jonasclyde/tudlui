<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    if(Auth::guest()){
        return view('welcome');
    }else{
        return view('dashboard');
    }

});

Route::get('/dashboard', function () {
    return view('dashboard');
});



Route::auth();



Route::get('/home', 'HomeController@index');



Route::resource('course', 'CourseController');
