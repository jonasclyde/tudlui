/**
 * Created by JONAS on 3/21/2017.
 */
var quizStart = function(game){
};

var helpquiz, quizStarting, quizStartImage, helper_quiz, nice, oops, clapp, picture4, picture6, picture7, picture8, picture10;
var quiz_json, question, option_a, option_b, option_c, option_d, rand_number, score, score_text, ending, teacher2, clap, score_bg, teacher3;
var option_button_a, option_button_b,  option_button_c,  option_button_d;
var a, b, c, d;
var quiz_counter = 1, quiz_score = 0;


quizStart.prototype = {

    init: function(code, name, bg, bool_music) {

    },

    preload: function(){


        game.load.json('quiz', '../json/quiz.json');
        game.load.spritesheet('teacher','../images/phaser/teacher_sprite.png', 200, 345, 4);
        game.load.spritesheet('teacher2','../images/phaser/clap_sprite.png', 125, 271, 2);
        game.load.audio('quizs', '../music/start_quiz.mp3');
        game.load.audio('nice', '../music/nice.mp3');
        game.load.audio('oops', '../music/oops.mp3');
        game.load.audio('clapp', '../music/clapp.mp3');
        game.load.audio('ending', '../music/ending.mp3');
        this.load.image('name_bg','../images/phaser/name_bg.png');
        this.load.image('score_bg','../images/phaser/score_bg.png');
        this.load.spritesheet('quiz_start','../images/phaser/start_quiz.png', 200, 100, 2);
        this.load.image('helper_quiz','../images/phaser/quiz_help.png');
        game.load.spritesheet('button','../images/quiz/buttons_prototype.png', 180, 100 );
        this.load.image('quiz4', '../images/quiz/quiz_4.jpg');
        this.load.image('quiz4', '../images/quiz/quiz_5.jpg');
        this.load.image('quiz6', '../images/quiz/quiz_6.jpg');
        this.load.image('quiz7', '../images/quiz/quiz_7.jpg');
        this.load.image('quiz8', '../images/quiz/quiz_8.jpg');
        this.load.image('quiz10', '../images/quiz/quiz_10.jpg');
    },
    create: function(){
        game.background = this.game.add.sprite(0,0, bg);
        music.volume = 0.15;
        if(bool_music){
            sound = game.add.sprite(790, 10, 'sounds');
        }else{
            sound = game.add.sprite(790, 10, 'mute');
        }

        quiz_json = game.cache.getJSON('quiz');

        sound.inputEnabled = true;
        sound.events.onInputDown.add(toggleSound, this);

        recording = game.add.audio('quizs');
        recording.play();

        nice = game.add.audio('nice');
        clapp = game.add.audio('clapp');
        oops = game.add.audio('oops');
        ending = game.add.audio('ending');

        name_bg = game.add.sprite(885, 5, 'name_bg');
        teacher = game.add.sprite(860, 120, 'teacher');
        talk =  teacher.animations.add('talk');
        teacher.animations.play('talk', 11, true);

        teacher2 = game.add.sprite(920, 220, 'teacher2');
        clap =  teacher2.animations.add('clap');


        score_bg = game.add.sprite(330, 190, 'score_bg');
        score_bg.alpha = 0;
        avatar = game.add.sprite(890, 10, code);
        avatar.frame = 0;
        avatar.scale.setTo(0.4,0.4);

        nick = game.add.text(960,25, name, { font: "24px Varela", fill: "#34486b", fontWeight: "900"});
        nick.fontWeight = 'bold';

        helpquiz = game.add.button(840, 10, 'help', helpQuiz, this, 1, 0, 1);

        quizStartImage = game.add.button(430, 320, 'quiz_start', startQuiz, this, 1, 0, 1);
        helper1_shadow = game.add.sprite(430, 435, 'helper1_shadow');
        helper1_shadow.alpha = 0;
        quizStarting = game.add.text(280,150, "Just click on START when you are \n" +
        " ready to take the quiz!", { font: "32px Varela",fill: font, align: "center", stroke: stroke, strokeThickness:2, fontWeight: '900'  })
        helper_quiz = game.add.sprite(430, 435, 'helper_quiz');
        helper_quiz.alpha = 0;

        a = game.add.text(225,350, "A.", { font: "27px Varela",fill: font, align: "center", stroke: stroke, strokeThickness:2, fontWeight: '900'  });
        option_button_a = game.add.button(275, 320, 'button', submitAnswer, this, 1, 0, 1);
        option_button_a.variable = "a";
        option_a = game.add.text(option_button_a.x + option_button_a.width / 2,option_button_a.y+3 + option_button_a.height / 2, "", { font: "20px Varela",stroke: stroke, strokeThickness:2, fontWeight: '900', fill: font, fontWeight: "bold", wordWrap: true, wordWrapWidth: option_button_a.width, align: "center"});
        option_a.anchor.set(0.5, 0.5);

        c = game.add.text(625,350, "C.", { font: "27px Varela",fill: font, align: "center", stroke: stroke, strokeThickness:2, fontWeight: '900'  });
        option_button_c = game.add.button(675, 320, 'button', submitAnswer, this, 1, 0, 1);
        option_button_c.variable = "c";
        option_c = game.add.text(option_button_c.x + option_button_c.width / 2,option_button_c.y+3 + option_button_c.height / 2, "", { font: "20px Varela",stroke: stroke, strokeThickness:2, fontWeight: '900', fill: font, fontWeight: "bold", wordWrap: true, wordWrapWidth: option_button_c.width, align: "center"});
        option_c.anchor.set(0.5, 0.5);

        b = game.add.text(225,480, "B.", { font: "27px Varela",fill: font, align: "center", stroke: stroke, strokeThickness:2, fontWeight: '900'  });
        option_button_b = game.add.button(275, 450, 'button', submitAnswer, this, 1, 0, 1);
        option_button_b.variable = "b";
        option_b = game.add.text(option_button_b.x + option_button_b.width / 2,option_button_b.y+3 + option_button_b.height / 2, "", { font: "20px Varela",stroke: stroke, strokeThickness:2, fontWeight: '900', fill: font, fontWeight: "bold", wordWrap: true, wordWrapWidth: option_button_b.width, align: "center"});
        option_b.anchor.set(0.5, 0.5);

        d = game.add.text(625,480, "D.", { font: "27px Varela",fill: font, align: "center", stroke: stroke, strokeThickness:2, fontWeight: '900'  });
        option_button_d = game.add.button(675, 450, 'button', submitAnswer, this, 1, 0, 1);
        option_button_d.variable = "d";
        option_d = game.add.text(option_button_d.x + option_button_d.width / 2,option_button_d.y+3 + option_button_d.height / 2, "", { font: "20px Varela",stroke: stroke, strokeThickness:2, fontWeight: '900', fill: font, fontWeight: "bold", wordWrap: true, wordWrapWidth: option_button_d.width, align: "center"});
        option_d.anchor.set(0.5, 0.5);

        question = game.add.text(200,100, "",{ font: "25px Varela",fill: font, align: "center", stroke: stroke, strokeThickness:2, fontWeight: '900'  });

        teacher2.alpha = 0;
        a.alpha =0;
        b.alpha =0;
        c.alpha =0;
        d.alpha =0;
        option_button_a.alpha = 0;
        option_button_b.alpha = 0;
        option_button_c.alpha = 0;
        option_button_d.alpha = 0;
        option_button_a.inputEnabled = false;
        option_button_b.inputEnabled = false;
        option_button_c.inputEnabled = false;
        option_button_d.inputEnabled = false;
        question.alpha = 0;

        game.onPause.add(pauseMusic, this);
        game.onResume.add(resumeMusic, this);

        picture4 = game.add.sprite(350, 75, quiz_json['question' + quiz_counter][rand_number]['image_src']);
        picture6
        picture7
        picture8
        picture10

        pauseTeacher();


    },
    render: function(){
    }
}

function startQuiz(){

    quizStarting.alpha = 0;
    teacher.alpha = 0;
    quizStartImage.alpha = 0;

    game.add.tween(a).to({ alpha: 1 }, 1000, "Linear", true);
    game.add.tween(b).to({ alpha: 1 }, 1000, "Linear", true);
    game.add.tween(c).to({ alpha: 1 }, 1000, "Linear", true);
    game.add.tween(d).to({ alpha: 1 }, 1000, "Linear", true);

    game.add.tween( teacher2).to({ alpha: 1 }, 1000, "Linear", true);

    game.add.tween(option_button_a).to({ alpha: 1 }, 1000, "Linear", true);
    game.add.tween(option_button_b).to({ alpha: 1 }, 1000, "Linear", true);
    game.add.tween(option_button_c).to({ alpha: 1 }, 1000, "Linear", true);
    game.add.tween(option_button_d).to({ alpha: 1 }, 1000, "Linear", true);
    game.add.tween(question).to({ alpha: 1 }, 1000, "Linear", true);

    option_button_a.inputEnabled = true;
    option_button_b.inputEnabled = true;
    option_button_c.inputEnabled = true;
    option_button_d.inputEnabled = true;

    recording.stop();
    quizStartImage.inputEnabled = false;
    helpquiz.inputEnabled = false;
    nextQuestion();
}

function helpQuiz(){
    help_sound.play();

    helpquiz.inputEnabled = false;

    game.add.tween(helper_quiz).to({ alpha: 1 }, 1000, "Linear", true);
    game.add.tween(helper1_shadow).to({ alpha: 1 }, 1000, "Linear", true);
    game.add.tween(helper1_shadow.scale).to( { x: 1.1, y: 1.1 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true);
    game.add.tween(helper1_shadow.position).to( { x:430-12, y: 435-7}, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true );

    setTimeout(function(){
        game.add.tween(helper1_shadow).to({ alpha: 0 }, 300 , "Linear", true);
        game.add.tween(helper_quiz).to({ alpha: 0 }, 1000, "Linear", true);
    },4000)

    setTimeout(function(){
        helpquiz.inputEnabled = true;
    },3000)
}

function toggleSound(){
    if(sound.key == 'sounds'){
        music.mute = true;
        sound.loadTexture('mute')
    }else{
        music.mute = false;
        sound.loadTexture('sounds')
    }
}

function pauseTeacher(){
    setTimeout(function(){
        teacher.animations.stop(null, true);
    }, 3000);
    setTimeout(function(){
        teacher.animations.play('talk', 11, true);
    }, 3300);
    setTimeout(function(){
        teacher.animations.stop(null, true);
    }, 3900);
}
function nextQuestion(){

    rand_number = Math.floor((Math.random() * 5) + 1);
    question.setText(quiz_json['question'+quiz_counter][rand_number]['question']);
    if(quiz_json['question'+quiz_counter][rand_number]['image_src'] != "") {

    }else{
        picture.alpha = 0;
    }
    option_a.setText(quiz_json['question'+quiz_counter][rand_number]['a']);
    option_b.setText(quiz_json['question'+quiz_counter][rand_number]['b']);
    option_c.setText(quiz_json['question'+quiz_counter][rand_number]['c']);
    option_d.setText(quiz_json['question'+quiz_counter][rand_number]['d']);

}


function submitAnswer(answer){
    if(answer.variable == quiz_json['question'+quiz_counter][rand_number]['correct_answer']){
        quiz_score++;
        teacher2.animations.play('clap', 11, true);
        clapp.play();
        setTimeout(function(){
            clapp.stop();
            nice.play();
            teacher2.animations.stop(null, true);
        },1000);
    }else{
        oops.play();
    }
    if(quiz_counter < 10){
        quiz_counter++;
        nextQuestion();
    }else{
        showScore();
    }

}



function showScore(){
    music.stop();
    ending.volume = 0.30;
    ending.play();
    score_bg.alpha = 1;
    teacher2.alpha = 0;
    question.setText("");
    picture.destroy();
    option_button_a.destroy();
    option_button_b.destroy();
    option_button_c.destroy();
    option_button_d.destroy();
    a.alpha = 0;
    b.alpha = 0;
    c.alpha = 0;
    d.alpha = 0;
    option_a.setText("");
    option_a.setText("");
    option_b.setText("");
    option_c.setText("");
    option_d.setText("");

    teacher3 = game.add.sprite(700, 120, 'teacher', 3);
    score_text = game.add.text(350,240, name+", your score is:", { font: "32px Varela", fill: stroke, fontWeight: "bold"});
    score = game.add.text(350,300, quiz_score+" out of 10", { font: "70px Varela", fill:stroke, fontWeight: "bold"});
    score.alpha = 0;
    game.add.tween(score).to({ alpha: 1 }, 3000, "Linear", true);
};