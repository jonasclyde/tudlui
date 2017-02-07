/**
 * Created by Jonas on 8/30/2016.
 */
var game = new Phaser.Game(1110, 600, Phaser.AUTO, 'course-material', { preload: preload, create: create, update: update, render: render });

game.state.add('select_char', selectChar);
game.state.add('part_1', partOne);
game.state.add('part_2', partTwo);
game.state.add('part_3', partThree);
game.state.add('part_4', partFour);
game.state.add('part_5', partFive);
game.state.add('part_6', partSix);
game.state.add('part_7', partSeven);
game.state.add('part_8', partEight);
game.state.add('part_9', partNine);
game.state.add('part_10', partTen);
game.state.add('quiz', quiz);


function preload() {

    this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;

    this.load.image('background', '../images/phaser/background.jpg');
    this.load.image('sounds', '../images/phaser/sounds.png');
    this.load.spritesheet('start', '../images/phaser/button_start_sprite.png', 150, 50);
    this.load.spritesheet('about', '../images/phaser/button_about_sprite.png', 150, 50);
    this.load.spritesheet('back', '../images/phaser/button_back_sprite.png', 150, 50);
    this.load.image('mute', '../images/phaser/mute.png');
    this.load.audio('happy', '../music/happy.mp3');
    this.load.audio('click', '../music/click.mp3');
    this.load.audio('help_sound', '../music/help.mp3');
    this.load.spritesheet('next','../images/phaser/button_next_sprite.png', 193, 71 );
    this.load.image('help','../images/phaser/help1.png');
    this.load.image('helper1','../images/phaser/start_help.png');
    this.load.image('helper1_shadow','../images/phaser/start_help_1.png');
    this.load.image('helper2','../images/phaser/about_help.png');
    this.load.image('help_arr','../images/phaser/button_help.png');
    this.load.image('test','../images/phaser/test.png');

}

var music;
var point;
var sound, click;
var title, O;
var loop;
var circle = [];
//var line1, line2, line3;
var btn1, btn2, btn3;
var about_us_header;
var about_us_constant, help1, bool_music = 1;

var ball_counter = 0;

var vars, body1, body2, body3, body4, output1, output2, test;
var text1, text2, text3, text4, text5, text6, text7, text8, help_sound;
var for_1, for_2, for_3;
var tween_counter = 1;

var line1 = [], line2 =[], line3 =[], line4 =[], line5 =[], line6 =[], line7 =[];

var wordIndex1 = 0, wordIndex2 = 0, wordIndex3 = 0, wordIndex4 = 0, wordIndex5 = 0, wordIndex6 = 0, wordIndex7 = 0;
var lineIndex1 = 0, lineIndex2 = 0, lineIndex3 = 0, lineIndex4 = 0, lineIndex5 = 0, lineIndex6 = 0, lineIndex7 = 0;

var arr1, arr2, arr3, helper1, helper2, page= 0,helper1_shadow;

var wordDelay = 180;
var lineDelay = 300;

function create() {

    game.background = this.game.add.sprite(0,0, 'background');

    for(var i=0; i<8;i++){
        circle[i] = new Phaser.Circle(1150, 120, 6);
    }

    sound = game.add.sprite(1015, 10, 'sounds');

    title = game.add.text(280, 70, "Learning Big-    Notation", { font: "55px Varela", fill: "#E9FBE9", align: "center"});
    about_us_header= game.add.text(330,70, "What 'Big-O Notation' e-learning is about?", { font: "35px Varela", fill: "#34486b", align: "center", stroke: "#E9FBE9", strokeThickness:2, fontWeight: '900'  });
    //test =game.add.sprite(300,140, 'test');
    about_us_constant= game.add.text(330,150, "         This eLearning course aims to help students better comprehend the \n" +
        "complexity of an algorithm using the 'Big-O notation'. The main objective of the \n" +
        "module is to provide a simple, effective, and portable tool that teaches students \n" +
        "how to compute the Big-O and allows them to practice this anywhere they \n" +
        "want with the help of animations and sounds."+
        "\n"+
        "         This presentation was created by Jonas Almocera, a BSCS4 student of\n" +
        "the University of the Philippines with the help of Prof. Demelo Lao, SP Adviser.", { font: "18px Varela", fill: "#34486b", align: 'left', fontWeight: '900'});
    O = game.add.text(635, 70, "O", { font: "55px Varela", fill: "#34486b", align: "center",  stroke: "#E9FBE9", strokeThickness:2 });

    about_us_constant.lineSpacing = 13;
    O.alpha = 0;

    about_us_header.alpha = 0;
    about_us_constant.alpha =0;

    helper1_shadow = game.add.sprite(835, 450, 'helper1_shadow');
    helper1 = game.add.sprite(835, 450, 'helper1');
    helper2 = game.add.sprite(835, 450, 'helper2');
    arr1 = game.add.sprite(410, 335, 'help_arr');
    arr2 = game.add.sprite(410, 435, 'help_arr');
    arr3 = game.add.sprite(460, 453, 'help_arr');
    helper1.alpha = 0;
    helper2.alpha = 0;
    helper1_shadow.alpha = 0;
    arr1.alpha = 0;
    arr2.alpha = 0;
    arr3.alpha = 0;

    music = game.add.audio('happy');
    click = game.add.audio('click');
    help_sound = game.add.audio('help_sound');
    music.loop = true;
    //music.play();

    title.fontWeight = 'bold';
    O.fontWeight = 'bold';

    sound.inputEnabled = true;
    sound.events.onInputDown.add(toggleSound, this);

    //line1 = game.add.sprite(80, 100, 'line');
    //line2 = game.add.sprite(20, 100, 'line');
    //line3 = game.add.sprite(140, 100, 'line');

    btn1 = game.add.button(520, 350, 'start', startGame, this, 1, 0, 2);
    btn2 = game.add.button(520, 450, 'about', showAbout, this, 1, 0, 2);
    btn3 = game.add.button(560, 470, 'back', backToHome, this, 1, 0, 3);
    help1 = game.add.button(1065, 10, 'help', helpOne, this, 1, 0, 1);

    btn1.alpha = 0;
    btn2.alpha = 0;
    btn3.alpha = 0;


    tweenBalls();

    vars = ["char word[ ] = 'Hello World' ;", "int x = 0 ;"];

    body1 = ["while ( x < word_length ) {"];
    body2 = ["  printf( '%s' , word ) ;"];
    body3 = ["  x++ ;"];
    body4 = ["}"];

    output1= ["x : 0"];
    output2= ["output : "];


    text1 =  game.add.text(10, 150, '', { font: "16px Varela", fill: "#E9FBE9", align: "left",stroke: "#34486b", strokeThickness:4 });
    text1.alpha = 0;
    text2 =  game.add.text(10, 240, '', { font: "16px Varela", fill: "#E9FBE9", align: "left", stroke: "#34486b", strokeThickness:4 });
    text3 =  game.add.text(10, 270, '', { font: "16px Varela", fill: "#E9FBE9", align: "left", stroke: "#34486b", strokeThickness:4 });
    text4 =  game.add.text(10, 300, '', { font: "16px Varela", fill: "#E9FBE9", align: "left", stroke: "#34486b", strokeThickness:4 });
    text5 =  game.add.text(10, 330, '', { font: "16px Varela", fill: "#E9FBE9", align: "left", stroke: "#34486b", strokeThickness:4 });
    text6 =  game.add.text(10, 390, '', { font: "16px Varela", fill: "#E9FBE9", align: "left", stroke: "#34486b", strokeThickness:4 });
    text7 =  game.add.text(10, 410, '', { font: "16px Varela", fill: "#E9FBE9", align: "left",stroke: "#34486b", strokeThickness:4 });
    text8 =  game.add.text(10, 500, 'O(n) complexity', { font: "19px Varela", fill: "#E9FBE9", align: "left",stroke: "#34486b", strokeThickness:4 });
    text8.alpha = 0;

    for_1 = game.add.tween(text2.scale).to({x: 1.2, y:1.2}, 800, Phaser.Easing.Linear.None, false, 0, 0, true);
    for_2 = game.add.tween(text3.scale).to({x: 1.2, y:1.2}, 800, Phaser.Easing.Linear.None, false, 0, 0, true);
    for_3 = game.add.tween(text4.scale).to({x: 1.2, y:1.2}, 800, Phaser.Easing.Linear.None, false, 0, 0, true);

    startAnimation();
}


function update() {

}

function render() {

    game.debug.geom(circle[0], '#34486b');
    game.debug.geom(circle[1], '#34486b');
    game.debug.geom(circle[2], '#34486b');
    game.debug.geom(circle[3], '#34486b');
    game.debug.geom(circle[4], '#34486b');
    game.debug.geom(circle[5], '#34486b');
    game.debug.geom(circle[6], '#34486b');

}

function helpOne(){
    help_sound.play();
    if(!page){
        btn1.inputEnabled = false;
        btn2.inputEnabled = false;
        help1.inputEnabled = false;

        game.add.tween(helper1).to({ alpha: 1 }, 700, "Linear", true);
        game.add.tween(helper1_shadow).to({ alpha: 1 }, 1000, "Linear", true);
        game.add.tween(helper1_shadow.scale).to( { x: 1.1, y: 1.1 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true);
        game.add.tween(helper1_shadow.position).to( { x:835-12, y: 450-7}, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true );

        setTimeout(function(){
            game.add.tween(helper1_shadow).to({ alpha: 0 }, 300 , "Linear", true);
            game.add.tween(helper1).to({ alpha: 0 }, 1000, "Linear", true);
        },4000)


        setTimeout(function(){
            btn1.inputEnabled = true;
            btn2.inputEnabled = true;
            help1.inputEnabled = true;
        },3000)
    }else{
        btn3.inputEnabled = false;
        help1.inputEnabled = false;
        game.add.tween(helper2).to({ alpha: 1 }, 700, "Linear", true);
        game.add.tween(helper1_shadow).to({ alpha: 1 }, 1000, "Linear", true);
        game.add.tween(helper1_shadow.scale).to( { x: 1.1, y: 1.1 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true);
        game.add.tween(helper1_shadow.position).to( { x:835-12, y: 450-7}, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true );
        setTimeout(function(){
            game.add.tween(helper1_shadow).to({ alpha: 0 }, 300 , "Linear", true);
            game.add.tween(helper2).to({ alpha: 0 }, 1000, "Linear", true);
        },4000)

        setTimeout(function(){
            btn3.inputEnabled = true;
            help1.inputEnabled = true;
        },3000)
    }

}

function toggleSound(){
    if(sound.key == 'sounds'){
        music.mute = true;
        sound.loadTexture('mute');
        bool_music = 0;
    }else{
        music.mute = false;
        sound.loadTexture('sounds')
        bool_music = 1;
    }
}

function tweenBalls(){
    setTimeout(function () {    //  call a 3s setTimeout when the loop is called
        game.add.tween(circle[ball_counter]).to({
            x: [1060 ,657, 646, 639, 642, 657, 667, 674, 668, 657, 646, 639, 642, 642],
            y: [120 , 120, 113, 102, 90, 84, 87, 102, 116, 120, 113, 102, 90, -40]
        }, 1500,"Linear", true);
        ball_counter++;
        if (ball_counter < 8) {
            tweenBalls();
        }else{
            setTimeout(function (){
                game.add.tween(O).to({ alpha: 1 }, 2000, "Linear", true);
                setTimeout(function (){
                    game.add.tween(btn1).to({ alpha: 1 }, 2000, "Linear", true);
                    game.add.tween(btn2).to({ alpha: 1 }, 2000, "Linear", true);
                }, 1000)
            }, 1000)
        }                                    //  ..  setTimeout()
    }, 100)
}

function startGame(){
    click.play();
    game.state.start('select_char', true, false,bool_music);
    //game.state.start('part_3');
}

function backToHome(){
    click.play();
    page=0;
    O.alpha = 1;
    title.alpha = 1;
    btn1.alpha = 1;
    btn2.alpha = 1;
    btn1.inputEnabled = true;
    btn2.inputEnabled = true;

    about_us_constant.alpha = 0;
    about_us_header.alpha = 0;
    btn3.alpha = 0;
    btn3.inputEnabled = false;

}

function showAbout(){

    click.play();
    page=1;
    O.alpha = 0;
    title.alpha = 0;
    btn1.alpha = 0;
    btn2.alpha = 0;
    btn1.inputEnabled = false;
    btn2.inputEnabled = false;

    about_us_constant.alpha = 1;
    about_us_header.alpha = 1;
    btn3.alpha = 1;
    btn3.inputEnabled = true;

}

function startAnimation(){

    line1 = [];
    line2 = [];
    line3 = [];
    line4 = [];
    line5 = [];
    line6 = [];
    line7 = [];

    wordIndex1 = 0;
    wordIndex2 = 0;
    wordIndex3 = 0;
    wordIndex4 = 0;
    wordIndex5 = 0;
    wordIndex6 = 0;
    wordIndex7 = 0;

    lineIndex1 = 0;
    lineIndex2 = 0;
    lineIndex3 = 0;
    lineIndex4 = 0;
    lineIndex5 = 0;
    lineIndex6 = 0;
    lineIndex7 = 0;

    text1.setText("");
    text2.setText("");
    text3.setText("");
    text4.setText("");
    text5.setText("");
    text6.setText("");
    text7.setText("");

    game.add.tween(text1).to({alpha:1}, 1000, "Linear", true);
    text2.alpha =1;
    text3.alpha =1;
    text4.alpha =1;
    text5.alpha =1;
    text6.alpha =1;
    text7.alpha =1;

    nextLine1();
}

function nextLine1() {

    if (lineIndex1 === vars.length)
    {
        nextLine2();
        return;
    }

    line1 = vars[lineIndex1].split(' ');

    wordIndex1 = 0;

    game.time.events.repeat(wordDelay, line1.length, nextWord1, this);

    lineIndex1++;

}

function nextWord1() {

    text1.text = text1.text.concat(line1[wordIndex1] + " ");

    //text1.addColor('#ff0000', 4);
    //text1.addColor('#000000', 8);
    //text1.addColor('#ff0000', 30);
    //text1.addColor('#000000', 31);

    wordIndex1++;

    if (wordIndex1 === line1.length)
    {
        text1.text = text1.text.concat("\n");

        game.time.events.add(lineDelay, nextLine1, this);
    }

}

function nextLine2() {

    if (lineIndex2 === body1.length)
    {
        nextLine3();
        return;
    }

    line2 = body1[lineIndex2].split(' ');

    wordIndex2 = 0;

    game.time.events.repeat(wordDelay, line2.length, nextWord2, this);

    lineIndex2++;

}

function nextWord2() {

    text2.text = text2.text.concat(line2[wordIndex2] + " ");


    //text2.addColor('#ff0000', 8);
    //text2.addColor('#000000', 9);
    //text2.addColor('#ff0000', 12);
    //text2.addColor('#000000', 13);

    wordIndex2++;

    if (wordIndex2 === line2.length)
    {
        text2.text = text2.text.concat("\n");

        game.time.events.add(lineDelay, nextLine2, this);
    }

}

function nextLine3() {

    if (lineIndex3 === body2.length)
    {
        nextLine4();
        return;
    }

    line3 = body2[lineIndex3].split(' ');

    wordIndex3 = 0;

    game.time.events.repeat(wordDelay, line3.length, nextWord3, this);

    lineIndex3++;

}

function nextWord3() {

    text3.text = text3.text.concat(line3[wordIndex3] + " ");

    //text3.addColor('#ff0000', 7);
    //text3.addColor('#000000', 11);

    wordIndex3++;

    if (wordIndex3 === line3.length)
    {
        text3.text = text3.text.concat("\n");

        game.time.events.add(lineDelay, nextLine3, this);
    }

}


function nextLine4() {

    if (lineIndex4 === body3.length)
    {
        nextLine5();
        return;
    }

    line4 = body3[lineIndex4].split(' ');

    wordIndex4 = 0;

    game.time.events.repeat(wordDelay, line4.length, nextWord4, this);

    lineIndex4++;

}

function nextWord4() {

    text4.text = text4.text.concat(line4[wordIndex4] + " ");

    //text4.addColor('#ff0000', 2);
    //text4.addColor('#000000', 3);

    wordIndex4++;

    if (wordIndex4 === line4.length)
    {
        text4.text = text4.text.concat("\n");

        game.time.events.add(lineDelay, nextLine4, this);
    }

}

function nextLine5() {

    if (lineIndex5 === body4.length)
    {
        nextLine6();
        return;
    }

    line5 = body4[lineIndex5].split(' ');

    wordIndex5 = 0;

    game.time.events.repeat(wordDelay, line5.length, nextWord5, this);

    lineIndex5++;

}

function nextWord5() {

    text5.text = text5.text.concat(line5[wordIndex5] + " ");

    wordIndex5++;

    if (wordIndex5 === line5.length)
    {
        text5.text = text5.text.concat("\n");

        game.time.events.add(lineDelay, nextLine5, this);
    }

}

function nextLine6() {

    if (lineIndex6 === output1.length)
    {
        nextLine7();
        return;
    }

    line6 = output1[lineIndex6].split(' ');

    wordIndex6 = 0;

    game.time.events.repeat(wordDelay, line6.length, nextWord6, this);

    lineIndex6++;

}

function nextWord6() {

    text6.text = text6.text.concat(line6[wordIndex6] + " ");

    //text6.addColor('#ff0000', 0);
    //text6.addColor('#000000', 1);

    wordIndex6++;

    if (wordIndex6 === line6.length)
    {
        text6.text = text6.text.concat("\n");

        game.time.events.add(lineDelay, nextLine6, this);
    }

}

function nextLine7() {

    if (lineIndex7 === output2.length)
    {
        for_1 = game.add.tween(text2.scale).to({x: 1.2, y:1.2}, 800, Phaser.Easing.Linear.None, false, 0, 0, true);
        for1Tween();
        return;
    }

    line7 = output2[lineIndex7].split(' ');

    wordIndex7 = 0;

    game.time.events.repeat(wordDelay, line7.length, nextWord7, this);

    lineIndex7++;

}

function nextWord7() {

    text7.text = text7.text.concat(line7[wordIndex7] + " ");

    //text7.addColor('#ff0000', 0);
    //text7.addColor('#000000', 6);

    wordIndex7++;

    if (wordIndex7 === line7.length)
    {
        text7.text = text7.text.concat("\n");

        game.time.events.add(lineDelay, nextLine7, this);
    }

}

function for1Tween(){
    for_1.onComplete.addOnce(for2Tween, this);
    for_1.start();
}

function for2Tween(){
    var output_for = "output :";
    for(var t = 0; t < tween_counter; t++){
        if(t > 0){
            output_for = output_for.concat("               Hello World\n");
        }else{
            output_for = output_for.concat(" Hello World\n");
        }
    }
    text7.setText(output_for);
    for_2.onComplete.addOnce(for3Tween, this);
    for_2.start();
}

function for3Tween(){
    text6.setText("x : " + tween_counter);
    tween_counter++;
    if(tween_counter < 4){
        for_3.onComplete.addOnce(for1Tween, this);
    }else{
        game.add.tween(text8).to({alpha:1}, 1000, "Linear", true, 0, 0, false);
        setTimeout(function(){
            tween_counter=1;
            for_3.onComplete.addOnce(fadeOutTween, this);
        }, 1000);
    }
    for_3.start();
}

function fadeOutTween(){

    game.add.tween(text1).to({alpha:0}, 1000, "Linear", true, 0, 0, true);
    game.add.tween(text2).to({alpha:0}, 1000, "Linear", true, 0, 0, true);
    game.add.tween(text3).to({alpha:0}, 1000, "Linear", true, 0, 0, true);
    game.add.tween(text4).to({alpha:0}, 1000, "Linear", true, 0, 0, true);
    game.add.tween(text5).to({alpha:0}, 1000, "Linear", true, 0, 0, true);
    game.add.tween(text6).to({alpha:0}, 1000, "Linear", true, 0, 0, true);
    game.add.tween(text7).to({alpha:0}, 1000, "Linear", true, 0, 0, true);
    game.add.tween(text8).to({alpha:0}, 1000, "Linear", true, 0, 0, false);

    setTimeout(function () {
        startAnimation()
    },1100);
}
