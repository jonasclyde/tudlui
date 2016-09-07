/**
 * Created by Jonas on 8/30/2016.
 */
var game = new Phaser.Game(1110, 600, Phaser.AUTO, 'course-material', { preload: preload, create: create, update: update, render: render });

function preload() {

    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    this.load.image('background', '../images/phaser/background.jpg');
    this.load.image('line', '../images/phaser/line.png');
    this.load.image('sounds', '../images/phaser/sounds.png');
    this.load.image('mute', '../images/phaser/mute.png');
    this.load.audio('snow', '../music/snow.mp3')

}

var music;
var point;
var sound;
var title;
var line1, line2, line3;

function create() {

    game.background = this.game.add.sprite(0,0, 'background')

    music = game.add.audio('snow');
    music.loop = true;
    music.play();

    sound = game.add.sprite(1030, 30, 'sounds');
    sound.inputEnabled = true;
    sound.events.onInputDown.add(toggleSound, this);

    line1 = game.add.sprite(60, 100, 'line')
    line2 = game.add.sprite(20, 100, 'line')
    line3 = game.add.sprite(100, 100, 'line')
    line1.animations.add('run');
    line1.animations.play('run',60,true);

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
