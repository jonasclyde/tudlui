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
game.state.add('quiz_start', quizStart);


function preload() {

    this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;

    //background
    this.load.image('green', '../images/phaser/bg_green.png');
    this.load.image('blue', '../images/phaser/bg_blue.png');
    this.load.image('black', '../images/phaser/bg_black.png');

    //images
    this.load.image('sounds', '../images/phaser/sounds.png');
    this.load.image('mute', '../images/phaser/mute.png');
    this.load.image('help','../images/phaser/help1.png');

    this.load.image('bg1sel','../images/phaser/bg1sel.png');
    this.load.image('bg2sel','../images/phaser/bg2sel.png');
    this.load.image('bg3sel','../images/phaser/bg3sel.png');
    this.load.image('bg4sel','../images/phaser/bg4sel.png');
    this.load.image('bg5sel','../images/phaser/bg5sel.png');
    this.load.image('th1sel','../images/phaser/th1sel.png');
    this.load.image('th2sel','../images/phaser/th2sel.png');
    this.load.image('th3sel','../images/phaser/th3sel.png');

    //helper
    this.load.image('helper1','../images/phaser/start_help.png');
    this.load.image('helper1_shadow','../images/phaser/start_help_1.png');
    this.load.image('helper2','../images/phaser/about_help.png');
    this.load.image('help_arr','../images/phaser/button_help.png');
    this.load.image('helper3','../images/phaser/pref_help.png');

    this.load.spritesheet('start', '../images/phaser/button_start_sprite.png', 150, 50);
    this.load.spritesheet('about', '../images/phaser/button_about_sprite.png', 150, 50);
    this.load.spritesheet('pref', '../images/phaser/button_preference_sprite.png', 150, 50);
    this.load.spritesheet('back', '../images/phaser/button_back_sprite.png', 150, 50);
    this.load.spritesheet('next','../images/phaser/button_next_sprite.png', 150, 50);
    this.load.spritesheet('apply','../images/phaser/button_apply_sprite.png', 150, 50);

    this.load.spritesheet('bg1','../images/phaser/bg1.png', 100, 50);
    this.load.spritesheet('bg2','../images/phaser/bg2.png', 100, 50 );
    this.load.spritesheet('bg3','../images/phaser/bg3.png', 100, 50 );
    this.load.spritesheet('bg4','../images/phaser/bg4.png', 100, 50 );
    this.load.spritesheet('bg5','../images/phaser/bg5.png', 100, 50 );
    this.load.spritesheet('th1','../images/phaser/th1.png', 100, 50 );
    this.load.spritesheet('th2','../images/phaser/th2.png', 100, 50 );
    this.load.spritesheet('th3','../images/phaser/th3.png', 100, 50 );

    //audio
    this.load.audio('bg1m', '../music/bg1.mp3');
    this.load.audio('bg2m', '../music/bg2.mp3');
    this.load.audio('bg3m', '../music/bg3.mp3');
    this.load.audio('bg4m', '../music/bg4.mp3');
    this.load.audio('bg5m', '../music/bg5.mp3');
    this.load.audio('click', '../music/click.mp3');
    this.load.audio('help_sound', '../music/help.mp3');


}

var bg, font, stroke, bgTheme;
var music;
var point;
var sound, click;
var title, O;
var loop;
var circle = [];
//var line1, line2, line3;
var btn1, btn2, btn3, btn4, btn5;
var about_us_header;
var about_us_constant, help1, bool_music = 1;

var ball_counter = 0;

var vars, body1, body2, body3, body4, output1, output2;
var text1, text2, text3, text4, text5, text6, text7, text8, help_sound;
var for_1, for_2, for_3;
var tween_counter = 1;

var line1 = [], line2 =[], line3 =[], line4 =[], line5 =[], line6 =[], line7 =[];

var wordIndex1 = 0, wordIndex2 = 0, wordIndex3 = 0, wordIndex4 = 0, wordIndex5 = 0, wordIndex6 = 0, wordIndex7 = 0;
var lineIndex1 = 0, lineIndex2 = 0, lineIndex3 = 0, lineIndex4 = 0, lineIndex5 = 0, lineIndex6 = 0, lineIndex7 = 0;

var arr1, arr2, arr3, helper1, helper2, helper3, page= 0,helper1_shadow, theme_header, music_header, music_constant,pref_header;
var th1, th2, th3, th1sel, th2sel, th3sel, bg1, bg2, bg3, bg4, bg5, bg1sel, bg2sel, bg3sel, bg4sel, bg5sel, tempbg, tempmus;

var wordDelay = 180;
var lineDelay = 300;

function create() {

    bg = 'green';
    tempbg = 'green';
    font = '#ffff1c'; //yellow
    stroke = '#34486b'; //blue
    music_constant='bg1m';
    tempmus = 'bg1m';

    bgTheme = this.game.add.sprite(0,0, bg);

    for(var i=0; i<8;i++){
        circle[i] = new Phaser.Circle(1150, 120, 6);
    }

    sound = game.add.sprite(1015, 10, 'sounds');

    title = game.add.text(280, 70, "Learning Big-    Notation", { font: "55px Varela", fill: font, align: "center"});
    about_us_header= game.add.text(330,70, "What 'Big-O Notation' e-learning is about?", { font: "35px Varela", fill: stroke, align: "center", stroke: font, strokeThickness:2, fontWeight: '900'  });
    //test =game.add.sprite(300,140, 'test');
    about_us_constant= game.add.text(330,150, "         This eLearning course aims to help students better comprehend the \n" +
        "complexity of an algorithm using the 'Big-O notation'. The main objective of the \n" +
        "module is to provide a simple, effective, and portable tool that teaches students \n" +
        "how to compute the Big-O and allows them to practice this anywhere they \n" +
        "want with the help of animations and sounds."+
        "\n"+
        "         This presentation was created by Jonas Almocera, a BSCS4 student of\n" +
        "the University of the Philippines with the help of Prof. Demelo Lao, SP Adviser.", { font: "18px Varela", fill: font, stroke:stroke, strokeThickness:3, align: 'left', fontWeight: '900'});
    O = game.add.text(635, 70, "O", { font: "55px Varela", fill: stroke, align: "center",  stroke: font, strokeThickness:2 });

    theme_header= game.add.text(590,150, "THEME", { font: "28px Varela", fill: font, align: "center", stroke: stroke, strokeThickness:2, fontWeight: '900'  });
    music_header= game.add.text(590,300 , "MUSIC", { font: "28px Varela", fill: font, align: "center", stroke: stroke, strokeThickness:2, fontWeight: '900'  });
    pref_header= game.add.text(330,70, "Choose your setting.", { font: "35px Varela", fill: stroke, align: "center", stroke: font, strokeThickness:2, fontWeight: '900'  });

    about_us_constant.lineSpacing = 13;
    O.alpha = 0;

    about_us_header.alpha = 0;
    about_us_constant.alpha =0;
    theme_header.alpha =0;
    pref_header.alpha =0;
    music_header.alpha =0;

    helper1_shadow = game.add.sprite(835, 450, 'helper1_shadow');
    helper1 = game.add.sprite(835, 450, 'helper1');
    helper2 = game.add.sprite(835, 450, 'helper2');
    helper3 = game.add.sprite(835, 450, 'helper3');
    arr1 = game.add.sprite(410, 335, 'help_arr');
    arr2 = game.add.sprite(410, 435, 'help_arr');
    arr3 = game.add.sprite(460, 453, 'help_arr');
    helper1.alpha = 0;
    helper2.alpha = 0;
    helper3.alpha = 0;
    helper1_shadow.alpha = 0;
    arr1.alpha = 0;
    arr2.alpha = 0;
    arr3.alpha = 0;

    click = game.add.audio('click');
    help_sound = game.add.audio('help_sound');
    music = game.add.audio(music_constant);
    //music.loop = true;
    //music.play();

    title.fontWeight = 'bold';
    O.fontWeight = 'bold';

    sound.inputEnabled = true;
    sound.events.onInputDown.add(toggleSound, this);

    //line1 = game.add.sprite(80, 100, 'line');
    //line2 = game.add.sprite(20, 100, 'line');
    //line3 = game.add.sprite(140, 100, 'line');

    btn1 = game.add.button(520, 330, 'start', startGame, this, 1, 0, 2);
    btn2 = game.add.button(520, 400, 'about', showAbout, this, 1, 0, 2);
    btn3 = game.add.button(560, 540, 'back', backToHome, this, 1, 0, 3);
    btn4 = game.add.button(520, 470, 'pref', showPreferences, this, 1, 0, 2);
    btn5 = game.add.button(560, 470, 'apply', applyPref, this, 1, 0, 2);
    help1 = game.add.button(1065, 12, 'help', helpOne, this, 1, 0, 1);

    btn1.alpha = 0;
    btn2.alpha = 0;
    btn3.alpha = 0;
    btn4.alpha = 0;
    btn5.alpha = 0;

    btn3.inputEnabled = false;
    btn5.inputEnabled = false;

    th1 = game.add.button(410, 210, 'th1', '', this, 1, 0, 1);
    th2 = game.add.button(590, 210, 'th2', '', this, 1, 0, 1);
    th3 = game.add.button(770, 210, 'th3', '', this, 1, 0, 1);

    th1sel = game.add.sprite(410, 210, 'th1sel');
    th2sel = game.add.sprite(590, 210, 'th2sel');
    th3sel = game.add.sprite(770, 210, 'th3sel');

    th1.code = 'green';
    th1.inputEnabled = false;
    th1.events.onInputDown.add(selectTheme, this);

    th2.code = 'blue';
    th2.inputEnabled = false;
    th2.events.onInputDown.add(selectTheme, this);

    th3.code = 'black';
    th3.inputEnabled = false;
    th3.events.onInputDown.add(selectTheme, this);

    th1.alpha = 0;
    th2.alpha = 0;
    th3.alpha = 0;
    th1sel.alpha = 0;
    th2sel.alpha = 0;
    th3sel.alpha = 0;


    bg1 = game.add.button(330, 380, 'bg1', '', this, 1, 0, 1);
    bg2 = game.add.button(460, 380, 'bg2', '', this, 1, 0, 1);
    bg3 = game.add.button(590, 380, 'bg3', '', this, 1, 0, 1);
    bg4 = game.add.button(720, 380, 'bg4', '', this, 1, 0, 1);
    bg5 = game.add.button(850, 380, 'bg5', '', this, 1, 0, 1);

    bg1sel = game.add.sprite(330, 380, 'bg1sel');
    bg2sel = game.add.sprite(460, 380, 'bg2sel');
    bg3sel = game.add.sprite(590, 380, 'bg3sel');
    bg4sel = game.add.sprite(720, 380, 'bg4sel');
    bg5sel = game.add.sprite(850, 380, 'bg5sel');

    bg1.code = 'bg1m';
    bg1.inputEnabled = false;
    bg1.events.onInputDown.add(selectMusic, this);

    bg2.code = 'bg2m';
    bg2.inputEnabled = false;
    bg2.events.onInputDown.add(selectMusic, this);

    bg3.code = 'bg3m';
    bg3.inputEnabled = false;
    bg3.events.onInputDown.add(selectMusic, this);

    bg4.code = 'bg4m';
    bg4.inputEnabled = false;
    bg4.events.onInputDown.add(selectMusic, this);

    bg5.code = 'bg5m';
    bg5.inputEnabled = false;
    bg5.events.onInputDown.add(selectMusic, this);


    bg1.alpha = 0;
    bg2.alpha = 0;
    bg3.alpha = 0;
    bg4.alpha = 0;
    bg5.alpha = 0;
    bg1sel.alpha = 0;
    bg2sel.alpha = 0;
    bg3sel.alpha = 0;
    bg4sel.alpha = 0;
    bg5sel.alpha = 0;

    tweenBalls();

    vars = ["char word[ ] = 'Hello World' ;", "int x = 0 ;"];

    body1 = ["while ( x < word_length ) {"];
    body2 = ["  printf( '%s' , word ) ;"];
    body3 = ["  x++ ;"];
    body4 = ["}"];

    output1= ["x : 0"];
    output2= ["output : "];


    text1 =  game.add.text(10, 150, '', { font: "16px Varela", fill: font, align: "left",stroke: stroke, strokeThickness:4 });
    text1.alpha = 0;
    text2 =  game.add.text(10, 240, '', { font: "16px Varela", fill: font, align: "left", stroke: stroke, strokeThickness:4 });
    text3 =  game.add.text(10, 270, '', { font: "16px Varela", fill: font, align: "left", stroke: stroke, strokeThickness:4 });
    text4 =  game.add.text(10, 300, '', { font: "16px Varela", fill: font, align: "left", stroke: stroke, strokeThickness:4 });
    text5 =  game.add.text(10, 330, '', { font: "16px Varela", fill: font, align: "left", stroke: stroke, strokeThickness:4 });
    text6 =  game.add.text(10, 390, '', { font: "16px Varela", fill: font, align: "left", stroke: stroke, strokeThickness:4 });
    text7 =  game.add.text(10, 410, '', { font: "16px Varela", fill: font, align: "left",stroke: stroke, strokeThickness:4 });
    text8 =  game.add.text(10, 500, 'O(n) complexity', { font: "19px Varela", fill: font, align: "left",stroke: stroke, strokeThickness:4 });
    text8.alpha = 0;

    for_1 = game.add.tween(text2.scale).to({x: 1.2, y:1.2}, 800, Phaser.Easing.Linear.None, false, 0, 0, true);
    for_2 = game.add.tween(text3.scale).to({x: 1.2, y:1.2}, 800, Phaser.Easing.Linear.None, false, 0, 0, true);
    for_3 = game.add.tween(text4.scale).to({x: 1.2, y:1.2}, 800, Phaser.Easing.Linear.None, false, 0, 0, true);

    startAnimation();
}


function update() {

}

function render() {

    game.debug.geom(circle[0], stroke);
    game.debug.geom(circle[1], stroke);
    game.debug.geom(circle[2], stroke);
    game.debug.geom(circle[3], stroke);
    game.debug.geom(circle[4], stroke);
    game.debug.geom(circle[5], stroke);
    game.debug.geom(circle[6], stroke);

}

function helpOne(){
    help_sound.play();
    if(!page){
        btn1.inputEnabled = false;
        btn2.inputEnabled = false;
        btn4.inputEnabled = false;
        help1.inputEnabled = false;

        game.add.tween(helper1).to({ alpha: 1 }, 700, "Linear", true);
        game.add.tween(helper1_shadow).to({ alpha: 1 }, 1000, "Linear", true);
        game.add.tween(helper1_shadow.scale).to( { x: 1.1, y: 1.1 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true);
        game.add.tween(helper1_shadow.position).to( { x:835-12, y: 450-7}, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true );

        setTimeout(function(){
            game.add.tween(helper1_shadow).to({ alpha: 0 }, 300 , "Linear", true);
            game.add.tween(helper1_shadow.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, false);
            game.add.tween(helper1_shadow.position).to( { x:835, y: 450}, 1000, Phaser.Easing.Linear.None, true, 0, 1000, false );
            game.add.tween(helper1).to({ alpha: 0 }, 1000, "Linear", true);
        },4000)

        setTimeout(function(){
            btn1.inputEnabled = true;
            btn2.inputEnabled = true;
            btn4.inputEnabled = true;
            help1.inputEnabled = true;
        },3000)
    }else if(page == 1){
        btn3.inputEnabled = false;
        help1.inputEnabled = false;
        game.add.tween(helper2).to({ alpha: 1 }, 700, "Linear", true);
        game.add.tween(helper1_shadow).to({ alpha: 1 }, 1000, "Linear", true);
        game.add.tween(helper1_shadow.scale).to( { x: 1.1, y: 1.1 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true);
        game.add.tween(helper1_shadow.position).to( { x:835-12, y: 450-7}, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true );

        setTimeout(function(){
            game.add.tween(helper1_shadow).to({ alpha: 0 }, 300 , "Linear", true);
            game.add.tween(helper1_shadow.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, false);
            game.add.tween(helper1_shadow.position).to( { x:835, y: 450}, 1000, Phaser.Easing.Linear.None, true, 0, 1000, false );
            game.add.tween(helper2).to({ alpha: 0 }, 1000, "Linear", true);
        },4000)

        setTimeout(function(){
            btn3.inputEnabled = true;
            help1.inputEnabled = true;
        },3000)
    }else{
        btn4.inputEnabled = false;
        btn5.inputEnabled = false;
        help1.inputEnabled = false;
        game.add.tween(helper3).to({ alpha: 1 }, 700, "Linear", true);
        game.add.tween(helper1_shadow).to({ alpha: 1 }, 1000, "Linear", true);
        game.add.tween(helper1_shadow.scale).to( { x: 1.1, y: 1.1 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true);
        game.add.tween(helper1_shadow.position).to( { x:835-12, y: 450-7}, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true );

        setTimeout(function(){
            game.add.tween(helper1_shadow).to({ alpha: 0 }, 300 , "Linear", true);
            game.add.tween(helper1_shadow.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, false);
            game.add.tween(helper1_shadow.position).to( { x:835, y: 450}, 1000, Phaser.Easing.Linear.None, true, 0, 1000, false );
            game.add.tween(helper3).to({ alpha: 0 }, 1000, "Linear", true);
        },4000)

        setTimeout(function() {
            btn4.inputEnabled = true;
            btn5.inputEnabled = true;
            help1.inputEnabled = true;
        });
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
                    game.add.tween(btn4).to({ alpha: 1 }, 2000, "Linear", true);
                }, 1000)
            }, 1000)
        }                                    //  ..  setTimeout()
    }, 100)
}

function startGame(){
    click.play();
    //game.state.start('select_char', true, false,bool_music,music_constant,bg);
    game.state.start('quiz_start', true, false,code,name, bg, bool_music);
}

function backToHome(){
    click.play();
    page=0;
    O.alpha = 1;
    title.alpha = 1;
    btn1.alpha = 1;
    btn2.alpha = 1;
    btn4.alpha = 1;
    btn1.inputEnabled = true;
    btn2.inputEnabled = true;
    btn4.inputEnabled = true;

    about_us_constant.alpha = 0;
    about_us_header.alpha = 0;
    theme_header.alpha = 0;
    music_header.alpha = 0;
    pref_header.alpha = 0;
    pref_header.alpha = 0;
    btn3.alpha = 0;
    btn3.inputEnabled = false;
    btn5.alpha = 0;
    btn5.inputEnabled = false;

    th1.alpha = 0;
    th2.alpha = 0;
    th3.alpha = 0;
    th1sel.alpha = 0;
    th2sel.alpha = 0;
    th3sel.alpha = 0;

    th1.inputEnabled = false;
    th2.inputEnabled = false;
    th3.inputEnabled = false;

    bg1.alpha = 0;
    bg2.alpha = 0;
    bg3.alpha = 0;
    bg4.alpha = 0;
    bg5.alpha = 0;
    bg1sel.alpha = 0;
    bg2sel.alpha = 0;
    bg3sel.alpha = 0;
    bg4sel.alpha = 0;
    bg5sel.alpha = 0;

    bg1.inputEnabled = false;
    bg2.inputEnabled = false;
    bg3.inputEnabled = false;
    bg4.inputEnabled = false;
    bg5.inputEnabled = false;

    if(tempbg != bg){
        bg = tempbg;
        bgTheme.loadTexture(bg);
    }

    if(tempmus != music_constant){
        music_constant = tempmus;

        music.stop();
        music.destroy(true);
        music = game.add.audio(music_constant);
        music.loop = true;
        music.play();
        if(sound.key == 'sounds'){
            music.mute = false;
        }else{
            music.mute = true;
        }
    }

}

function showAbout() {

    click.play();
    page = 1;
    O.alpha = 0;
    title.alpha = 0;
    btn1.alpha = 0;
    btn2.alpha = 0;
    btn4.alpha = 0;
    btn1.inputEnabled = false;
    btn2.inputEnabled = false;
    btn4.inputEnabled = false;
    btn5.inputEnabled = false;

    about_us_constant.alpha = 1;
    about_us_header.alpha = 1;
    btn3.alpha = 1;
    btn3.inputEnabled = true;

}

function showPreferences(){

    click.play();
    page = 3;
    O.alpha = 0;
    title.alpha = 0;
    btn1.alpha = 0;
    btn2.alpha = 0;
    btn4.alpha = 0;
    btn1.inputEnabled = false;
    btn2.inputEnabled = false;
    btn4.inputEnabled = false;

    btn3.alpha = 1;
    btn5.alpha = 1;
    btn3.inputEnabled = true;
    btn5.inputEnabled = true;

    th1.inputEnabled = true;
    th2.inputEnabled = true;
    th3.inputEnabled = true;

    pref_header.alpha = 1;
    theme_header.alpha = 1;
    music_header.alpha = 1;

    if(bg=="green"){
        th1.alpha = 0;
        th2.alpha = 1;
        th3.alpha = 1;
        th1sel.alpha = 1;
        th2sel.alpha = 0;
        th3sel.alpha = 0;

    }else if(bg=="blue"){
        th1.alpha = 1;
        th2.alpha = 0;
        th3.alpha = 1;
        th1sel.alpha = 0;
        th2sel.alpha = 1;
        th3sel.alpha = 0;

    }else if(bg=="black"){
        th1.alpha = 1;
        th2.alpha = 1;
        th3.alpha = 0;
        th1sel.alpha = 0;
        th2sel.alpha = 0;
        th3sel.alpha = 1;
    }

    bg1.inputEnabled = true;
    bg2.inputEnabled = true;
    bg3.inputEnabled = true;
    bg4.inputEnabled = true;
    bg5.inputEnabled = true;

    if(music_constant=="bg1m"){
        bg1.alpha = 0;
        bg2.alpha = 1;
        bg3.alpha = 1;
        bg4.alpha = 1;
        bg5.alpha = 1;
        bg1sel.alpha = 1;
        bg2sel.alpha = 0;
        bg3sel.alpha = 0;
        bg4sel.alpha = 0;
        bg5sel.alpha = 0;

    }else if(music_constant=="bg2m"){
        bg1.alpha = 1;
        bg2.alpha = 0;
        bg3.alpha = 1;
        bg4.alpha = 1;
        bg5.alpha = 1;
        bg1sel.alpha = 0;
        bg2sel.alpha = 1;
        bg3sel.alpha = 0;
        bg4sel.alpha = 0;
        bg5sel.alpha = 0;

    }else if(music_constant=="bg3m"){
        bg1.alpha = 1;
        bg2.alpha = 1;
        bg3.alpha = 0;
        bg4.alpha = 1;
        bg5.alpha = 1;
        bg1sel.alpha = 0;
        bg2sel.alpha = 0;
        bg3sel.alpha = 1;
        bg4sel.alpha = 0;
        bg5sel.alpha = 0;
    }else if(music_constant=="bg4m"){
        bg1.alpha = 1;
        bg2.alpha = 1;
        bg3.alpha = 1;
        bg4.alpha = 0;
        bg5.alpha = 1;
        bg1sel.alpha = 0;
        bg2sel.alpha = 0;
        bg3sel.alpha = 0;
        bg4sel.alpha = 1;
        bg5sel.alpha = 0;
    }else if(music_constant=="bg5m"){
        bg1.alpha = 1;
        bg2.alpha = 1;
        bg3.alpha = 1;
        bg4.alpha = 1;
        bg5.alpha = 0;
        bg1sel.alpha = 0;
        bg2sel.alpha = 0;
        bg3sel.alpha = 0;
        bg4sel.alpha = 0;
        bg5sel.alpha = 1;
    }
}

function applyPref(){

    tempbg = bg;
    tempmus = music_constant;
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

function selectTheme(theme){
    var selected = theme.code;
    switch (selected){
        case "green":
            th1sel.alpha = 1;
            th2sel.alpha = 0;
            th3sel.alpha = 0;
            th1.alpha = 0;
            th2.alpha = 1;
            th3.alpha = 1;
            bg="green";

            break;
        case "blue":
            th1sel.alpha = 0;
            th2sel.alpha = 1;
            th3sel.alpha = 0;
            th1.alpha = 1;
            th2.alpha = 0;
            th3.alpha = 1;
            bg="blue";
            break;
        case "black":
            th1sel.alpha = 0;
            th2sel.alpha = 0;
            th3sel.alpha = 1;
            th1.alpha = 1;
            th2.alpha = 1;
            th3.alpha = 0;
            bg="black";
            break;
    }
    bgTheme.loadTexture(bg);

}

function selectMusic(musc){
    var selected = musc.code;
    switch (selected){
        case "bg1m":
            bg1.alpha = 0;
            bg2.alpha = 1;
            bg3.alpha = 1;
            bg4.alpha = 1;
            bg5.alpha = 1;
            bg1sel.alpha = 1;
            bg2sel.alpha = 0;
            bg3sel.alpha = 0;
            bg4sel.alpha = 0;
            bg5sel.alpha = 0;
            music_constant="bg1m";
            break;
        case "bg2m":
            bg1.alpha = 1;
            bg2.alpha = 0;
            bg3.alpha = 1;
            bg4.alpha = 1;
            bg5.alpha = 1;
            bg1sel.alpha = 0;
            bg2sel.alpha = 1;
            bg3sel.alpha = 0;
            bg4sel.alpha = 0;
            bg5sel.alpha = 0;
            music_constant="bg2m"
            break;
        case "bg3m":
            bg1.alpha = 1;
            bg2.alpha = 1;
            bg3.alpha = 0;
            bg4.alpha = 1;
            bg5.alpha = 1;
            bg1sel.alpha = 0;
            bg2sel.alpha = 0;
            bg3sel.alpha = 1;
            bg4sel.alpha = 0;
            bg5sel.alpha = 0;
            music_constant="bg3m";
            break;
        case "bg4m":
            bg1.alpha = 1;
            bg2.alpha = 1;
            bg3.alpha = 1;
            bg4.alpha = 0;
            bg5.alpha = 1;
            bg1sel.alpha = 0;
            bg2sel.alpha = 0;
            bg3sel.alpha = 0;
            bg4sel.alpha = 1;
            bg5sel.alpha = 0;
            music_constant="bg4m";
            break;
        case "bg5m":
            bg1.alpha = 1;
            bg2.alpha = 1;
            bg3.alpha = 1;
            bg4.alpha = 1;
            bg5.alpha = 0;
            bg1sel.alpha = 0;
            bg2sel.alpha = 0;
            bg3sel.alpha = 0;
            bg4sel.alpha = 0;
            bg5sel.alpha = 1;
            music_constant="bg5m";
            break;
    }

    music.stop();
    music.destroy(true);
    music = game.add.audio(music_constant);
    music.loop = true;
    music.play();

    if(sound.key == 'sounds'){
        music.mute = false;
    }else{
        music.mute = true;
    }

}
