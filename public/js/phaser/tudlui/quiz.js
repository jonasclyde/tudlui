/**
 * Created by Jonas on 11/2/2016.
 */

var quiz = function(game){
};

var quiz_json, question, picture, option_a, option_b, option_c, option_d, rand_number, score, score_text;
var option_button_a, option_button_b,  option_button_c,  option_button_d;
var a, b, c, d;
var quiz_counter = 1, quiz_score = 0;

quiz.prototype = {
    init: function(code, name) {

    },
    preload: function(){
        game.load.json('quiz', '../json/quiz.json');
        game.load.spritesheet('button','../images/quiz/buttons_prototype.jpg', 193, 71 );
        this.load.image('quiz1', '../images/quiz/quiz_1.jpg');
        this.load.image('quiz2', '../images/quiz/quiz_2.jpg');
        this.load.image('quiz3', '../images/quiz/quiz_3.jpg');
        this.load.image('quiz4', '../images/quiz/quiz_4.jpg');
        this.load.image('quiz5', '../images/quiz/quiz_5.jpg');
        this.load.image('quiz6', '../images/quiz/quiz_6.jpg');
        this.load.image('quiz7', '../images/quiz/quiz_7.jpg');
        this.load.image('quiz8', '../images/quiz/quiz_8.jpg');
        this.load.image('quiz9', '../images/quiz/quiz_9.jpg');
        this.load.image('quiz10', '../images/quiz/quiz_10.jpg');
        this.load.image('mute', '../images/phaser/mute.png');
        this.load.audio('snow', '../music/snow.mp3');
    },
    create: function(){

        game.background = this.game.add.sprite(0,0, 'background');

        quiz_json = game.cache.getJSON('quiz');

        avatar = game.add.sprite(890, 10, code);
        avatar.frame = 0;
        avatar.scale.setTo(0.4,0.4);
        nick = game.add.text(960,25, name, { font: "24px Raleway", fill: "#000000"});
        nick.fontWeight = 'bold';

        music = game.add.audio('snow');
        sound = game.add.sprite(1060, 30, 'sounds');

        music = game.add.audio('snow');
        music.loop = true;
        music.play();

        sound.inputEnabled = true;
        sound.events.onInputDown.add(toggleSound, this);

        a = game.add.text(225,340, "A.", { font: "27px Raleway", fill: "#000000", fontWeight: "bold"});
        option_button_a = game.add.button(275, 320, 'button', submitAnswer, this, 1, 0, 1);
        option_button_a.variable = "a";
        option_a = game.add.text(option_button_a.x + option_button_a.width / 2,option_button_a.y+3 + option_button_a.height / 2, "", { font: "20px Raleway", fill: "#000000", fontWeight: "bold", wordWrap: true, wordWrapWidth: option_button_a.width, align: "center"});
        option_a.anchor.set(0.5, 0.5);

        c = game.add.text(625,340, "C.", { font: "27px Raleway", fill: "#000000", fontWeight: "bold"});
        option_button_c = game.add.button(675, 320, 'button', submitAnswer, this, 1, 0, 1);
        option_button_c.variable = "c";
        option_c = game.add.text(option_button_c.x + option_button_c.width / 2,option_button_c.y+3 + option_button_c.height / 2, "", { font: "20px Raleway", fill: "#000000", fontWeight: "bold", wordWrap: true, wordWrapWidth: option_button_c.width, align: "center"});
        option_c.anchor.set(0.5, 0.5);

        b = game.add.text(225,470, "B.", { font: "27px Raleway", fill: "#000000", fontWeight: "bold"});
        option_button_b = game.add.button(275, 450, 'button', submitAnswer, this, 1, 0, 1);
        option_button_b.variable = "b";
        option_b = game.add.text(option_button_b.x + option_button_b.width / 2,option_button_b.y+3 + option_button_b.height / 2, "", { font: "20px Raleway", fill: "#000000", fontWeight: "bold", wordWrap: true, wordWrapWidth: option_button_b.width, align: "center"});
        option_b.anchor.set(0.5, 0.5);

        d = game.add.text(625,470, "D.", { font: "27px Raleway", fill: "#000000", fontWeight: "bold"});
        option_button_d = game.add.button(675, 450, 'button', submitAnswer, this, 1, 0, 1);
        option_button_d.variable = "d";
        option_d = game.add.text(option_button_d.x + option_button_d.width / 2,option_button_d.y+3 + option_button_d.height / 2, "", { font: "20px Raleway", fill: "#000000", fontWeight: "bold", wordWrap: true, wordWrapWidth: option_button_d.width, align: "center"});
        option_d.anchor.set(0.5, 0.5);

        question = game.add.text(130,10, "", { font: "20px Raleway", fill: "#000000", fontWeight: "bold"});

        nextQuestion();

    },
    update: function(){

    },
    render: function(){

    }

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

function submitAnswer(answer){
    if(answer.variable == quiz_json['question'+quiz_counter][rand_number]['correct_answer']) quiz_score++;
    if(quiz_counter < 10){
        quiz_counter++;
        nextQuestion();
    }else{
        showScore();
    }

}

function nextQuestion(){

    rand_number = Math.floor((Math.random() * 5) + 1);
    question.setText(quiz_json['question'+quiz_counter][rand_number]['question']);
    picture = game.add.sprite(350,75, quiz_json['question'+quiz_counter][rand_number]['image_src']);
    option_a.setText(quiz_json['question'+quiz_counter][rand_number]['a']);
    option_b.setText(quiz_json['question'+quiz_counter][rand_number]['b']);
    option_c.setText(quiz_json['question'+quiz_counter][rand_number]['c']);
    option_d.setText(quiz_json['question'+quiz_counter][rand_number]['d']);

}

function showScore(){

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

    score_text = game.add.text(400,120, "Your Score:", { font: "50px Raleway", fill: "#000000", fontWeight: "bold"});
    score = game.add.text(360,230, quiz_score+" out of 10", { font: "70px Raleway", fill: "#000000", fontWeight: "bold"});
};