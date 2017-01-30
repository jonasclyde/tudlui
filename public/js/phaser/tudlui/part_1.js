/**
 * Created by Jonas on 9/14/2016.
 */


var partOne = function(game){
};

var sound;
var btnb, btnn, help4, lineZero = [], wordIndexZero = 0, letterIndexZero = 0, helper4, arr31;
var gs_title;
var contentZero = "In this learning session, you will learn how to measure the efficiency of your algorithm" +
    " and check its related speed using the Big-O notation. Throughout the tutorial, you can navigate" +
    " through the different sections and learn on your own pace." +
    " To navigate through out the lessons, you can just click next to move forward" +
    " and if you've missed out on a topic, you can click1 back" +
    " to return to previous pages. The final part of the material will be a short quiz." +
    " So be prepared and have fun!";

var line = [];

var wordIndex = 0;
var lineIndex = 0;
var bar = 0;

//var wordDelay = 180;
var lineDelay = 300;

var text;
var recording;
var avatar, nick;

partOne.prototype = {

    init: function(code, name) {

    },

    preload: function(){

        game.load.image('arrow1','../images/phaser/arrow1.png');
        game.load.spritesheet('next','../images/phaser/button_next_sprite.png', 150, 50);
        game.load.spritesheet('back','../images/phaser/button_back_sprite_image.png', 150, 50);
        game.load.spritesheet('back','../images/phaser/teacher_sprite', 150, 50);
        game.load.audio('intro', '../music/intro.mp3');
        this.load.image('name_bg','../images/phaser/name_bg.png');
        this.load.image('helper4','../images/phaser/part1_help.png');
        this.load.image('arr31','../images/phaser/button_next.png');
    },
    create: function(){
        game.background = this.game.add.sprite(0,0, 'background');
        //sound = game.add.sprite(1030, 30, 'sounds');
        recording = game.add.audio('intro');
        recording.play();

        name_bg = game.add.sprite(885, 5, 'name_bg');

        avatar = game.add.sprite(890, 10, code);
        avatar.frame = 0;
        avatar.scale.setTo(0.4,0.4);

        nick = game.add.text(960,25, name, { font: "24px Varela", fill: "#34486b", fontWeight: "900"});
        nick.fontWeight = 'bold';

        help4 = game.add.button(840, 10, 'help', helpThree, this, 1, 0, 1);

        btnb = game.add.button(3, 547, 'back', '', this, 1, 0, 1);
        btnn = game.add.button(945, 547, 'next', nextChapter, this, 1, 0, 1);
        btnb.alpha = 0;

        gs_title= game.add.text(100,40, "Getting Started", { font: "32px Varela",fill: "#34486b", align: "center", stroke: "#E9FBE9", strokeThickness:1, fontWeight: '900'  })
        text = game.add.text(100, 140, "In this learning session, you will learn how to measure the efficiency of your algorithm \n" +
        "and check its related speed using the Big-O notation. Throughout the tutorial, you can \n" +
        "navigate through the different sections and learn on your own pace. \n" +
            "\n" +
        "To navigate through out the lessons, you can just click NEXT to move forward and if \n" +
        "you've missed out on a topic, you can click  BACK to return to previous pages. The final \n" +
        "part of the material will be a short quiz. So be prepared and have fun!",{ font: "17px Varela",fill: "#E9FBE9", align: "justify", fontWeight: '900'  });
        text.lineSpacing = 13;

        lineZero = contentZero.split(' ');
        game.time.events.repeat(Phaser.Timer.QUARTER * 1.15, lineZero.length, nextWordZero, this);

        helper4 = game.add.sprite(430, 425, 'helper4');
        helper4.alpha = 0;

        game.onPause.add(pauseMusic, this);
        game.onResume.add(resumeMusic, this);

    },
    render: function(){
    }
}

function pauseMusic() {
    recording.pause();
}

function resumeMusic() {
    recording.resume();
}

function helpThree(){
    help_sound.play();

    help4.inputEnabled = false;
    btnn.inputEnabled = false;

    game.add.tween(helper4).to({ alpha: 1 }, 1000, "Linear", true);
    setTimeout(function(){
        game.add.tween(helper4).to({ alpha: 0 }, 1000, "Linear", true);
    },4000)

    setTimeout(function(){
        help4.inputEnabled = true;
        btnn.inputEnabled = true;
    },3000)

}

function nextWordZero() {
    var a = letterIndexZero;
    var b = letterIndexZero +  lineZero[wordIndexZero].length;
    text.addColor('#34486b' ,a);
    text.addColor('#E9FBE9',b );

    letterIndexZero = b + 1;

    if(lineZero[wordIndexZero] == 'click1'){
        game.add.tween(btnb).to({alpha: 1}, 2000, "Linear", true, 0, 0, true)

    }

    wordIndexZero++;
    //  Last word?
    if (wordIndexZero === lineZero.length)
    {
        return;
    }
}
function nextChapter(){
    click.play();
    recording.stop();
    game.state.start('part_2', true, false,code,name);
}