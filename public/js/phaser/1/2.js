/**
 * Created by Jonas on 9/14/2016.
 */


var introState = function(game){
};

var sound;
var btnb, btnn;
var gs_title;
var content = [
    "In this learning session, you will learn how to measure the speed of your algorithm",
    "and check its efficiency using the Big-O notation. Through out the tutorial,",
    "you can navigate through the different sections and learn on your own pace.",
    " ",
    "There will be a completion bar found on the left side of the page to track",
    "the total percentage that you've covered in the tutorial. You can go to the succeeding page",
    "by clicking on the next button and if you've missed something from the previous page",
    "you can just click on the back button that will appear for the succeeding pages.",
];

var line = [];

var wordIndex = 0;
var lineIndex = 0;
var bar = 0;

//var wordDelay = 180;
var lineDelay = 300;

var text;
var recording;
var avatar, nick, loading, bar1, bar2, bar3, test;

introState.prototype = {

    init: function(code, name) {

    },

    preload: function(){

        game.load.image('arrow1','../images/phaser/arrow1.png');
        game.load.image('bar','../images/phaser/loading-progress.png');
        game.load.spritesheet('next','../images/phaser/next-image.jpg', 49, 50);
        game.load.spritesheet('back','../images/phaser/back-image.jpg', 49, 50);
        game.load.image('loading','../images/phaser/loading-bar.jpg' );
        game.load.audio('intro', '../music/intro.mp3');
    },
    create: function(){
        game.background = this.game.add.sprite(0,0, 'background');
        //sound = game.add.sprite(1030, 30, 'sounds');
        recording = game.add.audio('intro');
        recording.play();

        avatar = game.add.sprite(20, 10, code);
        avatar.frame = 0;
        avatar.scale.setTo(0.4,0.4);

        loading = game.add.sprite(8, 80, 'loading');
        bar1 = game.add.sprite(32, 514, 'bar');
        bar1.alpha = 0;
        bar2 = game.add.sprite(32, 490, 'bar');
        bar2.alpha = 0;
        bar3 = game.add.sprite(32, 466, 'bar');
        bar3.alpha = 0;

        nick = game.add.text(90,25, name, { font: "24px Raleway", fill: "#000000"});
        nick.fontWeight = 'bold';

        btnb = game.add.button(960, 540, 'back', '', this, 0, 1, 0);
        btnn = game.add.button(1050, 540, 'next', nextChapter, this, 1, 0, 1);
        btnb.alpha = 0;

        gs_title= game.add.text(200,30, "I. Getting Started.", { font: "30px Raleway", fill: "#000000"})
        text = game.add.text(200, 100, '', { font: "18px Raleway", fill: "#000000", align: 'left' });
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

//function toggleSound(){
//    if(sound.key == 'sounds'){
//        music.mute = true;
//        sound.loadTexture('mute')
//    }else{
//        music.mute = false;
//        sound.loadTexture('sounds')
//    }
//}

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
    game.time.events.repeat(Phaser.Timer.QUARTER * 1.2, line.length, nextWord, this);

    //  Advance to the next line
    lineIndex++;

};

function nextWord() {

    //  Add the next word onto the text string, followed by a space
    text.text = text.text.concat(line[wordIndex] + " ");
    if (line[wordIndex] == 'completion') {
        setTimeout(function () {
            bar1.alpha = 1;
        }, 500);
        setTimeout(function () {
            bar2.alpha = 1;
        }, 1000);
        setTimeout(function () {
            bar3.alpha = 1;
        }, 1500);
        setTimeout(function () {
            bar1.alpha = 0;
            bar2.alpha = 0;
            bar3.alpha = 0;
        }, 2000);
    } else if (line[wordIndex] == 'next') {
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
    game.state.start('part_1', true, false,code,name, bar);
}