/**
 * Created by Jonas on 9/14/2016.
 */

var partTwo = function(game){
};


var lineOne = [];
var wordIndexOne, letterIndexOne=0;
var avatar,nick, textO, picLandau, picO, textDescription, textTitle, btnnOne, partOneMusic, textIterator, helper5, help5, helper1_shadow, aw, ew, partOne1, partOne2;
var contentOne =
    "The Big-O notation or the Landau's symbol is used to describe the " +
    "performance or complexity of an algorithm. It is1 used to give an " +
    "estimate of the execution time of an algorithm. It can1 also measure " +
    "the algorithm's efficiency and the growth rate of the time the " +
    "algorithm takes to complete with respect to the amount of data or " +
    "input given."


partTwo.prototype = {
    init: function(code, name, bg, bool_music) {
        wordIndexOne=0;
        letterIndexOne=0;

    },
    preload: function(){
        game.load.audio('partOne', '../music/partOne.mp3');
        game.load.audio('partOne1', '../music/partOne1.mp3');
        game.load.audio('partOne2', '../music/partOne2.mp3');
        game.load.image('landau_pic','../images/phaser/landau.jpg');
        game.load.image('bigO','../images/phaser/bigO.png');
        this.load.image('helper5','../images/phaser/part2_help.png');
        game.load.spritesheet('teacher','../images/phaser/teacher_sprite.png', 200, 345, 4);
    },
    create: function(){

        game.background = this.game.add.sprite(0,0, bg);
        music.volume = 0.15;
        if(bool_music){
            sound = game.add.sprite(790, 10, 'sounds');
        }else{
            sound = game.add.sprite(790, 10, 'mute');
        }

        sound.inputEnabled = true;
        sound.events.onInputDown.add(toggleSound, this);

        name_bg = game.add.sprite(885, 5, 'name_bg');

        avatar = game.add.sprite(890, 10, code);
        avatar.frame = 0;
        avatar.scale.setTo(0.4,0.4);

        nick = game.add.text(960,25, name, { font: "24px Varela", fill: "#34486b", fontWeight: "900"});
        nick.fontWeight = 'bold';

        partOne1 = game.add.audio('partOne1');
        partOne2 = game.add.audio('partOne2');
        helper1_shadow = game.add.sprite(430, 460, 'helper1_shadow');
        helper1_shadow.alpha = 0;
        help5 = game.add.button(840, 10, 'help', helpFour, this, 1, 0, 1);
        helper5 = game.add.sprite(430, 460, 'helper5');
        helper5.alpha = 0;
        partOneMusic = game.add.audio('partOne');
        partOneMusic.play();

        teacher = game.add.sprite(860, 120, 'teacher');
        talk =  teacher.animations.add('talk');
        teacher.animations.play('talk', 11, true);


        textTitle= game.add.text(100,40, "Big-O Definition", {  font: "32px Varela",fill: font, align: "center", stroke: stroke, strokeThickness:2, fontWeight: '900'  });
        textDescription = game.add.text(250, 140, "The Big-O notation or the Landau's symbol is used to describe the \n" +
            "performance or complexity of an algorithm. It is  used to give an \n" +
            "estimate of the execution time of an algorithm. It can  also measure \n" +
            "the algorithm's efficiency and the growth rate of the time the \n" +
            "algorithm takes to complete with respect to the amount of data or \n" +
            "input given.",
            { font: "18px Varela", fill: "#d3d3d3", stroke: stroke, strokeThickness:2, align: "justify", fontWeight: '900'  });
        textDescription.lineSpacing = 13;

        aw = game.add.text(250, 410, "The symbol for the Big O is read as ' O of n ', where n is a variable which represents the \n" +
            "running time of the algorithm. For example usage:   The running time of my code is O(n). \n",
            { font: "15px Varela", fill: font, stroke: stroke, strokeThickness:2, align: "justify", fontWeight: '900'  });
        ew = game.add.text(250, 410, "Edmund Georg Hermann Landau, was a German mathematician who specializes in \n" +
            "number theory and complex analysis.",
            { font: "15px Varela", fill: font, stroke: stroke, strokeThickness:2, align: "justify", fontWeight: '900'  });


        picLandau = game.add.button(50,240, 'landau_pic');
        picO = game.add.button(50,120, 'bigO');
        picLandau.inputEnabled = false;
        picO.inputEnabled = false;
        picO.events.onInputDown.add(showO, this);
        picLandau.events.onInputDown.add(showEd, this);
        aw.alpha =0;
        ew.alpha = 0;
        lineOne = contentOne.split(' ');
        game.time.events.repeat(Phaser.Timer.QUARTER * 1.15, lineOne.length, nextWordOne, this);
        game.onPause.add(pausePartOne, this);
        game.onResume.add(resumePartOne, this);

        btnnOne = game.add.button(945, 547, 'next', nextChapterOne, this, 1, 0, 1);

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
    game.add.tween(helper1_shadow).to({ alpha: 1 }, 1000, "Linear", true);
    game.add.tween(helper1_shadow.scale).to( { x: 1.1, y: 1.1 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true);
    game.add.tween(helper1_shadow.position).to( { x:430-12, y: 460-7}, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true );

    setTimeout(function(){
        game.add.tween(helper1_shadow).to({ alpha: 0 }, 300 , "Linear", true);
        game.add.tween(helper5).to({ alpha: 0 }, 1000, "Linear", true);
    },4000)

    setTimeout(function(){
        help5.inputEnabled = true;
        btnnOne.inputEnabled = true;
    },3000)

}

function nextWordOne() {
    var a = letterIndexOne;
    var b = letterIndexOne +  lineOne[wordIndexOne].length;
    textDescription.addColor(font ,a);
    textDescription.addColor('#d3d3d3',b );

    letterIndexOne = b + 1;

    if(lineOne[wordIndexOne] == 'is1'){
        teacher.animations.stop(null, true);
        setTimeout(function(){
            teacher.animations.play('talk', 11, true);
        }, 400);
    }else if(lineOne[wordIndexOne] == 'can1'){
        teacher.animations.stop(null, true);
        setTimeout(function(){
            teacher.animations.play('talk', 11, true);
        }, 400);
    }else if(lineOne[wordIndexOne] == 'given.'){
        setTimeout(function(){
            teacher.animations.stop(null, true);
        }, 1000);
        setTimeout(function(){
            teacher.animations.play('talk', 11, true);
        }, 1400);
        setTimeout(function(){
            teacher.animations.stop(null, true);
            picLandau.inputEnabled = true;
            picO.inputEnabled = true;
        }, 6800);

    }

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
    partOne1.stop();
    partOne2.stop();
    game.state.start('part_3', true, false,code,name, bg, bool_music);
}

function showO(){
    teacher.animations.play('talk', 11, true);
    partOne1.play();
    picLandau.inputEnabled = false;
    game.add.tween(aw).to({ alpha: 1 }, 1000, "Linear", true);
    setTimeout(function(){
        game.add.tween(aw).to({ alpha: 0 }, 1000, "Linear", true);
        teacher.animations.stop(null, true);
        partOne1.stop();
        picLandau.inputEnabled = true;
    }, 9900);

}

function showEd(){
    teacher.animations.play('talk', 11, true);
    partOne2.play();
    picO.inputEnabled = false;
    game.add.tween(ew).to({ alpha: 1 }, 1000, "Linear", true);
    setTimeout(function(){
        game.add.tween(ew).to({ alpha: 0 }, 1000, "Linear", true);
        teacher.animations.stop(null, true);
        partOne2.stop();
        picO.inputEnabled = true;
    }, 9900);
}
