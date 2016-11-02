/**
 * Created by Jonas on 9/14/2016.
 */


var partOne = function(game){
};

var sound;
var btnb, btnn;
var gs_title;
var content = [
    "In this learning session, you will learn how to measure the efficiency of your algorithm",
    "and check its related speed using the Big-O notation. Throughout the tutorial, you can navigate",
    "through the different sections and learn on your own pace.",
    " ",
    "To navigate through out the lessons, you can just click on the next arrow found on the",
    "bottom right corner of the page. If you've missed out on a topic, you can click on the",
    "back arrow that will appear on the succeeding pages. The final part of the material",
    "will be a short quiz. So be prepared and have fun!",
];

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
        game.load.spritesheet('next','../images/phaser/next-image.jpg', 49, 50);
        game.load.spritesheet('back','../images/phaser/back-image.jpg', 49, 50);
        game.load.audio('intro', '../music/intro.mp3');
    },
    create: function(){
        game.background = this.game.add.sprite(0,0, 'background');
        //sound = game.add.sprite(1030, 30, 'sounds');
        recording = game.add.audio('intro');
        recording.play();

        avatar = game.add.sprite(890, 10, code);
        avatar.frame = 0;
        avatar.scale.setTo(0.4,0.4);

        nick = game.add.text(960,25, name, { font: "24px Raleway", fill: "#000000"});
        nick.fontWeight = 'bold';

        btnb = game.add.button(960, 500, 'back', '', this, 0, 1, 0);
        btnn = game.add.button(1050, 500, 'next', nextChapter, this, 1, 0, 1);
        btnb.alpha = 0;

        gs_title= game.add.text(100,40, "I. Getting Started.", { font: "27px Raleway", fill: "#000000"})
        text = game.add.text(200, 120, '', { font: "17px Raleway", fill: "#000000", align: 'left' });
        text.lineSpacing = 13;

        nextLine();


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

function nextLine(){

    if (lineIndex === content.length)
    {
        //  We're finished
        return;
    }

    //  Split the current line on spaces, so one word per array element
    line = content[lineIndex].split(' ');

    //  Reset the word index to zero (the first word in the line)
    wordIndex = 0;

    //  Call the 'nextWord' function once for each word in the line (line.length)
    game.time.events.repeat(Phaser.Timer.QUARTER * 1.3, line.length, nextWord, this);

    //  Advance to the next line
    lineIndex++;

};

function nextWord() {

    //  Add the next word onto the text string, followed by a space
    text.text = text.text.concat(line[wordIndex] + " ");
    if(line[wordIndex] == 'bottom') {
        game.add.tween(btnn.scale).to({x: 1.2, y: 1.2}, 800, Phaser.Easing.Linear.None, true, 0, 0, true);
    } else if (line[wordIndex] == 'back') {
        game.add.tween(btnb).to({alpha: 1}, 1500, "Linear", true, 0, 0, true);
    }
    wordIndex++;

    //  Last word?
    if (wordIndex === line.length) {
        //  Add a carriage return
        text.text = text.text.concat("\n");

        //  Get the next line after the lineDelay amount of ms has elapsed
        game.time.events.add(lineDelay, nextLine, this);
    }
}

function nextChapter(){
    recording.stop();
    game.state.start('part_2', true, false,code,name);
}