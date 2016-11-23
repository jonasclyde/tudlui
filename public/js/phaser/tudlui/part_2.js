/**
 * Created by Jonas on 9/14/2016.
 */

var partTwo = function(game){
};


var lineOne = [];
var wordIndexOne, letterIndexOne=0;
var avatar,nick, textO, picLandau, picO, textDescription, textTitle, btnnOne, partOneMusic, textIterator, helper5, help5, arr41;
var contentOne =
    "The Big-O notation or the Landau's symbol is used to describe the " +
    "performance or complexity of an algorithm. It is used to give an " +
    "estimate of the execution time of an algorithm. It can also measure " +
    "the algorithm's efficiency and the growth rate of the time the " +
    "algorithm takes to complete with respect to the amount of data or " +
    "input given."


partTwo.prototype = {
    init: function(code, name) {
        wordIndexOne=0;

    },
    preload: function(){
        game.load.audio('partOne', '../music/partOne.mp3');
        game.load.image('landau_pic','../images/phaser/landau.jpg');
        game.load.image('bigO','../images/phaser/bigO.png');
        this.load.image('helper5','../images/phaser/part2_help.png');
    },
    create: function(){

        game.background = this.game.add.sprite(0,0, 'background');

        name_bg = game.add.sprite(885, 5, 'name_bg');

        avatar = game.add.sprite(890, 10, code);
        avatar.frame = 0;
        avatar.scale.setTo(0.4,0.4);

        nick = game.add.text(960,25, name, { font: "24px Varela", fill: "#34486b", fontWeight: "900"});
        nick.fontWeight = 'bold';

        help5 = game.add.button(840, 25, 'help', helpFour, this, 1, 0, 1);
        helper5 = game.add.sprite(430, 425, 'helper5');
        helper5.alpha = 0;
        partOneMusic = game.add.audio('partOne');
        partOneMusic.play();

        textTitle= game.add.text(100,40, "Big-O Definition", {  font: "32px Varela",fill: "#34486b", align: "center", stroke: "#E9FBE9", strokeThickness:1, fontWeight: '900'  });
        textDescription = game.add.text(320, 140, "The Big-O notation or the Landau's symbol is used to describe the \n" +
            "performance or complexity of an algorithm. It is used to give an \n" +
            "estimate of the execution time of an algorithm. It can also measure \n" +
            "the algorithm's efficiency and the growth rate of the time the \n" +
            "algorithm takes to complete with respect to the amount of data or \n" +
            "input given.",
            { font: "21px Varela",fill: "#E9FBE9", align: "justify", fontWeight: '900'  });
        textDescription.lineSpacing = 13;

        picLandau = game.add.sprite(120,240, 'landau_pic');
        picO = game.add.sprite(120,120, 'bigO');
        lineOne = contentOne.split(' ');
        game.time.events.repeat(Phaser.Timer.QUARTER * 1.15, lineOne.length, nextWordOne, this);
        game.onPause.add(pausePartOne, this);
        game.onResume.add(resumePartOne, this);

        btnnOne = game.add.button(945, 547, 'next', nextChapterOne, this, 1, 0, 1);
        arr41 = game.add.sprite(955, 480, 'arr31');
        arr41.alpha = 0;

    },
    update: function(){

    },
    render: function(){

    }

}

function helpFour(){
    help_sound.play();

    help5.inputEnabled = false;
    btnnOne.inputEnabled = false;

    game.add.tween(helper5).to({ alpha: 1 }, 1000, "Linear", true);
    setTimeout(function(){
        game.add.tween(helper5).to({ alpha: 0 }, 1000, "Linear", true);
    },4000)

    game.add.tween(arr41).to({ alpha: 1 }, 1000, "Linear", true, 0, 0, true);

    setTimeout(function(){
        game.add.tween(arr41).to({ alpha: 1 }, 1000, "Linear", true);
    },2000)

    setTimeout(function(){
        game.add.tween(arr41).to({ alpha: 0 }, 1000, "Linear", true);
        help5.inputEnabled = true;
        btnnOne.inputEnabled = true;
    },3000)

}

function nextWordOne() {
    var a = letterIndexOne;
    var b = letterIndexOne +  lineOne[wordIndexOne].length;
    textDescription.addColor('#34486b' ,a);
    textDescription.addColor('#E9FBE9',b );

    letterIndexOne = b + 1;

    wordIndexOne++;
    //  Last word?
    if (wordIndexOne === lineOne.length)
    {
        return;
    }
}

function pausePartOne() {
    partOneMusic.pause();
}

function resumePartOne() {
    partOneMusic.resume();
}

function nextChapterOne(){
    partOneMusic.stop();
    game.state.start('part_3', true, false,code,name);
}
