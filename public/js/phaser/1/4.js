/**
 * Created by JONAS on 10/11/2016.
 */

var partTwo = function(game){
};

var levelTwo = 2;
var barTwo, btnbTwo, btnnTwo;
var barsTwo=[];
var lineTwo = [];
var wordIndexTwo = 0;

var textTwo;
var titleTwo, tExampleA, tExampleB,tExampleC, tExampleD, partTwoMusic;

var contentTwo = 'The "complexity" of a function is called the O(n). ' +
                'It is read "Order of N" because the O function is also known as the Order function.' +
                 ' We can find the complexity an algorithm if we can determine how long the' +
                 ' algorithm takes to run as a function of the number of inputs given.';

partTwo.prototype = {
    init: function(code, name, bar) {
        if(bar <= levelOne){
            barTwo  = bar + 1;
        }

    },
    preload: function(){
        game.load.audio('partTwo', '../music/partTwo.mp3');
    },
    create: function(){
        game.background = this.game.add.sprite(0,0, 'background');
        loading = game.add.sprite(8, 80, 'loading');
        setBarTwo();
        avatar = game.add.sprite(20, 10, code);
        avatar.frame = 0;
        avatar.scale.setTo(0.4,0.4);
        nick = game.add.text(90,25, name, { font: "24px Raleway", fill: "#000000"});
        nick.fontWeight = 'bold';

        partTwoMusic = game.add.audio('partTwo');
        partTwoMusic.play();

        titleTwo= game.add.text(200,30, "Why is this called big O? ", { font: "30px Raleway", fill: "#000000"});
        textTwo = game.add.text(200, 100, 'The "complexity" of a function is called O(n). It is read "Order of N" because the O function is also \n' +
            'known as the Order function. We can find the complexity an algorithm if we can determine how long the \n' +
            ' algorithm takes to run as a function of the number of inputs given.', { font: "18px Raleway", fill: "#000000", align: 'left' });
        textTwo.lineSpacing = 13;

        tExampleA = game.add.text(380,300, "O(n) read as O of n", { font: "50px Raleway", fill: "#000000"});
        tExampleA.alpha = 0;
        tExampleB = game.add.text(380,300, "Example: 5n + 6", { font: "50px Raleway", fill: "#000000"});
        tExampleB.alpha = 0;
        tExampleD = game.add.text(360,360, "the order of the function is n", { font: "35px Raleway",  fill: "#FF0000", align: "left", fontWeight: "italic"});
        tExampleD.alpha = 0;

        btnbTwo = game.add.button(960, 540, 'back', backChapterTwo, this, 0, 1, 0);
        btnnTwo = game.add.button(1050, 540, 'next', nextChapterTwo, this, 1, 0, 1);

        lineTwo = contentTwo.split(' ');
        game.time.events.repeat(Phaser.Timer.QUARTER * 1.4, lineTwo.length, nextWordTwo, this);

        game.onPause.add(pausePartTwo, this);
        game.onResume.add(resumePartTwo, this);

    },
    update: function(){

    },
    render: function(){

    }

}


function nextWordTwo() {
    if(lineTwo[wordIndexTwo] == '"Order'){
        game.add.tween(tExampleA).to({alpha: 1}, 2500, "Linear", true, 0, 0, true);
    }else if(lineTwo[wordIndexTwo] == 'function.'){
        game.add.tween(tExampleB).to({alpha: 1}, 1500, "Linear", true, 0, 0, false);
        setTimeout(function(){
            game.add.tween(tExampleD).to({alpha: 1}, 1500, "Linear", true, 0, 0, false);
            tExampleB.addColor('#ff0000', 10);
            tExampleB.addColor('#000000', 11);
        },2500);
    }

    wordIndexTwo++;
    //  Last word?
    if (wordIndexTwo === lineTwo.length)
    {
        return;
    }
}

function pausePartTwo() {
    partTwoMusic.pause();
}

function resumePartTwo() {
    partTwoMusic.resume();
}



function nextChapterTwo(){
    partTwoMusic.stop();
    game.state.start('part_3', true, false,code,name, bar);
}

function backChapterTwo(){
    partTwoMusic.stop();
    game.state.start('part_1', true, false,code,name, bar);
}

function setBarTwo(){

    i = 0;
    h = 24;
    if(bar > levelTwo){
        while(i < bar){
            barsTwo[i] = game.add.sprite(32, 514 - (h * i), 'bar');
            i++;
        }
    }else{
        while(i < levelTwo){
            barsTwo[i] = game.add.sprite(32, 514 - (h * i), 'bar');
            i++;
        }
    }
}