@extends('layouts.app')

@section('content')
<section id="register">
    <div class="container clearfix">
        <div class="register-container">
            <div class="register-label">
                <h1>Learn to be a<br>
                    better developer</h1>
                <br>
                <p>Learn wherever, and whenever<br>
                    you want on your own pace.</p>
                <br>
            </div>
            <form id="register-form" class="form-horizontal" role="form" method="POST" action="{{ url('/register') }}">
                {{ csrf_field() }}
                <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                    <div class="col-md-6 fname-container">
                        <input id="first-name" type="text" class="form-control" name="first-name" value="{{ old('name') }}" placeholder="First Name">
                        @if ($errors->has('name'))
                            <span class="help-block">
                                <strong>{{ $errors->first('name') }}</strong>
                            </span>
                        @endif
                    </div>
                    <div class="col-md-6">
                        <input id="last-name" type="text" class="form-control" name="last-name" value="{{ old('name') }}" placeholder="Last Name">
                        @if ($errors->has('name'))
                            <span class="help-block">
                                <strong>{{ $errors->first('name') }}</strong>
                            </span>
                        @endif
                    </div>
                </div>
                <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                    <div class="col-md-12">
                        <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" placeholder="Email">
                        @if ($errors->has('email'))
                            <span class="help-block">
                                <strong>{{ $errors->first('email') }}</strong>
                            </span>
                        @endif
                    </div>
                </div>
                <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                    <div class="col-md-12">
                        <input id="password" type="password" class="form-control" name="password" placeholder="Password">
                        @if ($errors->has('password'))
                            <span class="help-block">
                                <strong>{{ $errors->first('password') }}</strong>
                            </span>
                        @endif
                    </div>
                </div>
                <div class="form-group{{ $errors->has('password_confirmation') ? ' has-error' : '' }}">
                    <div class="col-md-12">
                        <input id="password-confirm" type="password" class="form-control" name="password_confirmation" placeholder="Confirm Password">
                        @if ($errors->has('password_confirmation'))
                            <span class="help-block">
                                <strong>{{ $errors->first('password_confirmation') }}</strong>
                            </span>
                        @endif
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-md-12">
                        <button id="register-btn" type="submit" class="btn btn-primary">
                            <i class="fa fa-btn fa-user"></i> Register
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</section>
<section id="benefits">
    <div class="container clearfix benefits-txt">
        <div class="col-md-6">
            <h1>Modernize the way we learn</h1>
            <br>
            <p>We believe that people have different preference on learning. Tudlui helps its students to learn remotely and on their own pace.
            The website provides different learning modules for the students to access. </p>
            <br>
            <p>Not only that students will be able to learn different topics, they can also test their knowledge by answering the quizess.
            Scores are stored in the application for evaluation.</p>
        </div>
        <div class="col-md-6 benefits-img">
            <img src="/images/benefits.jpg" width="100%">
        </div>
    </div>
</section>
<section id="how-to">
    <div class="container clearfix">
        <div class="col-md-12 text-center" id="ht-label">
                <h1>Get started now</h1>
                <br>
                <p>Just follow these steps to start using the application.</p>
        </div>
        <div class="col-md-4 ht-box">
            <div class="well text-center">
                <h3><span class="glyphicon glyphicon-user"></span> Create an Account</h3>
                <p>Enter your details in the registration form and click on the register button.
                    You can then login to your account and start exploring. </p>
            </div>
        </div>
        <div class="col-md-4 ht-box">
            <div class="well text-center">
                <h3><span class="glyphicon glyphicon-search"></span> Browse for Subjects</h3>
                <p>Using the filters in the user dashboard, search for your desired subject.
                    Click on the enroll lesson button to start the tutorial.</p>
            </div>
        </div>
        <div class="col-md-4 ht-box">
            <div class="well text-center">
                <h3><span class="glyphicon glyphicon-pencil"></span> Answer the Quiz</h3>
                <p>On the end of each learning material, answer the quizzes to test your knowledge.
                Your scores will be stored and you can view them on your profile.</p>
            </div>
        </div>
    </div>
</section>
@endsection
