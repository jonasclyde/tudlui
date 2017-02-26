@extends('layouts.app')

@section('content')
    <section id="dashboard">
        <div class="container">
            <div class="col-md-12 text-center mb30" id="search-label">
                <h1 class="mb20">Search for a Subject</h1>
                <p>What courses are you looking for?</p>
            </div>
            <div class="col-md-10">
                <input type="text" id="search" class="form-control" placeholder="E.g. Big O">
            </div>
            <div class="col-md-2">
                <button id="search-btn" class="btn btn-primary"><span class="glyphicon glyphicon-search"></span> Search</button>
            </div>
        </div>
        <div class="container" id="categories-container">
            <h3>All Courses</h3>
        </div>
        <div class="container" id="subjects-container">
            <div class="col-md-4 text-center">
                <a href="{{url('/course/1')}}">
                    <h2 class="mb20">Complexity of an Algorithm: Big O Notation</h2>
                    <img class="mb20" src="/images/dashboard/bigo.png">
                </a>
                <p>Learn know how to calculate the running time of
                algorithms to evaluate how fast it can run!</p>
            </div>
        </div>
    </section>
@endsection