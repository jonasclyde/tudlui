/**
 * Created by Jonas on 9/14/2016.
 */

var startState = function(game){
};

var sound;
var btnb, btnn;
var gs_title;
var content = [
    "In this tutorial, you will learn how to measure the speed of your algorithm",
    " and check its efficiency using the Big-O notation. Through out the tutorial,",
    "you can navigate through the different sections and learn on your own pace.",
    " ",
    "There will be a completion bar found on the left side of the page to track",
    "the total percentage that you've covered in the tutorial. You can go to the succeeding page",
    "by clicking on the next button and if you've missed something from the previous page",
    "you can just click on the back button that will appear for the next pages.",
];

var line = [];

var wordIndex = 0;
var lineIndex = 0;

var wordDelay = 180;
var lineDelay = 300;

var text;
var arr1, arr3;

startState.prototype = {
    preload: function(){

        game.load.spritesheet('back','../images/phaser/button_back_sprite.png', 193, 71 )
        game.load.spritesheet('next','../images/phaser/button_next_sprite.png', 193, 71 )
        game.load.image('arrow1','../images/phaser/arrow1.png');
        game.load.image('arrow3','../images/phaser/arrow1.png');
    },
    create: function(){
        game.background = this.game.add.sprite(0,0, 'background');
        sound = game.add.sprite(1030, 30, 'sounds');

        btnb = game.add.button(350, 500, 'back', backGroup, this, 1, 0, 3)
        btnn = game.add.button(600, 500, 'next', nextGroup, this, 1, 0, 3)
        btnb.alpha = 0;

        arr1 = game.add.sprite(180,430,'arrow1');
        arr3 = game.add.sprite(800,490,'arrow3');

        arr1.alpha = 0;
        arr3.alpha = 0;

        gs_title= game.add.text(250,30, "I. Getting Started?", { font: "30px Raleway", fill: "#000000"})
        text = game.add.text(250, 100, '', { font: "18px Raleway", fill: "#000000", align: 'left' });
        text.lineSpacing = 13;

        nextLine();

        sound.inputEnabled = true;
        sound.events.onInputDown.add(toggleSound, this);

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
    game.time.events.repeat(wordDelay, line.length, nextWord, this);

    //  Advance to the next line
    lineIndex++;

};

function nextWord() {

    //  Add the next word onto the text string, followed by a space
    text.text = text.text.concat(line[wordIndex] + " ");
    if(line[wordIndex] == 'completion'){
        arr1.alpha = 1;
        game.add.tween(arr1.scale).to({x: 2, y:2}, 800, Phaser.Easing.Linear.None, true, 0, 0, true);
        setTimeout(function (){
            game.add.tween(arr1).to({alpha:0}, 1500, "Linear", true);
        }, 2000)
    }else if(line[wordIndex] == 'succeeding'){
        arr3.alpha = 1;
        game.add.tween(arr3.scale).to({x: 2, y:2}, 800, Phaser.Easing.Linear.None, true, 0, 0, true);
        setTimeout(function (){
            game.add.tween(arr3).to({alpha:0}, 1500, "Linear", true);
        }, 2000)
    }else if(line[wordIndex] == 'back'){
        game.add.tween(btnb).to({alpha:1}, 1500, "Linear", true, 0,0 ,true);
    }
    //  Advance the word index to the next word in the line
    wordIndex++;

    //  Last word?
    if (wordIndex === line.length)
    {
        //  Add a carriage return
        text.text = text.text.concat("\n");

        //  Get the next line after the lineDelay amount of ms has elapsed
        game.time.events.add(lineDelay, nextLine, this);
    }

}



function backGroup(){};
function nextGroup(){};