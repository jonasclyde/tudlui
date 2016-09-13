/**
 * Created by Jonas on 8/30/2016.
 */
var game = new Phaser.Game(1110, 600, Phaser.AUTO, 'course-material', { preload: preload, create: create, update: update, render: render });

function preload() {

    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    this.load.image('background', '../images/phaser/background.jpg');
    this.load.image('line', '../images/phaser/line.png');
    this.load.image('sounds', '../images/phaser/sounds.png');
    this.load.spritesheet('start', '../images/phaser/button_sprite_sheet.png', 193, 71);
    this.load.spritesheet('about', '../images/phaser/button_sprite_sheet2.png', 193, 71);
    this.load.image('mute', '../images/phaser/mute.png');
    this.load.audio('snow', '../music/snow.mp3')

}

var music;
var point;
var sound;
var title, O;
var loop;
var circle = [];
var line1, line2, line3;
var btn1, btn2, btn3;
var btna, btnb, btnc;

var ball_counter = 0;

function create() {

    game.background = this.game.add.sprite(0,0, 'background');


    for(var i=0; i<8;i++){
        circle[i] = new Phaser.Circle(1150, 150, 6);
    }

    //music = game.add.audio('snow');
    sound = game.add.sprite(1030, 30, 'sounds');
    title = game.add.text(280, 100, "Learning Big-    Notation", { font: "55px Raleway", fill: "#000000", align: "center" });
    O = game.add.text(620, 100, "O", { font: "55px Raleway", fill: "#000000", align: "center" });

    O.alpha = 0;

    //music.loop = true;
    //music.play();

    sound.inputEnabled = true;
    sound.events.onInputDown.add(toggleSound, this);

    line1 = game.add.sprite(60, 100, 'line');
    line2 = game.add.sprite(20, 100, 'line');
    line3 = game.add.sprite(100, 100, 'line');

    btn1 = game.add.button(500, 250, 'start', startGame, this, 2, 1, 0);
    btn2 = game.add.button(500, 400, 'about', startGame, this, 2, 1, 0);
    //btn1 = game.add.button(500, 250, 'button', startGame ,this, 0, 'button3');


    tweenBalls();

}


function update() {

    line1.y += 10;
    line2.y += 5;
    line3.y += 2;

    if (line1.y > game.world.height )
    {
        line1.y =  -line1.height;
    }

    if (line2.y > game.world.height )
    {
        line2.y =  -line2.height;
    }

    if (line3.y > game.world.height )
    {
        line3.y =  -line3.height;
    }
}

function render() {

    game.debug.geom(circle[0], 'rgba(0,0,0,1)');
    game.debug.geom(circle[1], 'rgba(0,0,0,1)');
    game.debug.geom(circle[2], 'rgba(0,0,0,1)');
    game.debug.geom(circle[3], 'rgba(0,0,0,1)');
    game.debug.geom(circle[4], 'rgba(0,0,0,1)');
    game.debug.geom(circle[5], 'rgba(0,0,0,1)');
    game.debug.geom(circle[6], 'rgba(0,0,0,1)');

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

function tweenBalls(){
    setTimeout(function () {    //  call a 3s setTimeout when the loop is called
        game.add.tween(circle[ball_counter]).to({
            x: [1045 ,642, 631, 624, 627, 642, 652, 659, 653, 642, 631, 624, 627, 627],
            y: [150 , 150, 143, 132, 120, 114, 117, 132, 146, 150, 143, 132, 120, -10],
        }, 1500,"Linear", true);
        ball_counter++;
        if (ball_counter < 8) {
            tweenBalls();
        }else{

            setTimeout(function (){
                game.add.tween(O).to({ alpha: 1 }, 2000, "Linear", true);
            }, 1000)
        }                                    //  ..  setTimeout()
    }, 100)
}

function startGame(){};
function aboutGame(){

};







