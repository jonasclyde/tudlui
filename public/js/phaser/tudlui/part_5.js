/**
 * Created by Jonas on 11/2/2016.
 */

/**
 * Created by Jonas on 9/14/2016.
 */

var partFive = function(game){
};


var wordIndexFour, help7, helper7, conc1, conc2, conc3, conc4, conc5, conc6, teacher, talk, conc1m, conc2m, conc3m, conc4m, conc5m, conc6m, helper1_shadow;
var correct = false;


var textTitle, btnbFour, btnnFour;

partFive.prototype = {
    init: function(code, name) {
        wordIndexFour = 0;
    },
    preload: function(){
        game.load.spritesheet('teacher','../images/phaser/teacher_sprite.png', 200, 345, 4);
        this.load.image('helper7','../images/phaser/conc_help.png');
        this.load.audio('conc1m', '../music/conc1.mp3');
        this.load.audio('conc2m', '../music/conc2.mp3');
        this.load.audio('conc3m', '../music/conc3.mp3');
        this.load.audio('conc4m', '../music/conc4.mp3');
        this.load.audio('conc5m', '../music/conc5.mp3');
        this.load.audio('conc6m', '../music/conc6.mp3');
    },
    create: function() {
        game.background = this.game.add.sprite(0, 0, bg);
        music.volume = 0.15;
        if (bool_music) {
            sound = game.add.sprite(790, 10, 'sounds');
        } else {
            sound = game.add.sprite(790, 10, 'mute');
        }

        conc1m = game.add.audio('conc1m');
        conc2m = game.add.audio('conc2m');
        conc3m = game.add.audio('conc3m');
        conc4m = game.add.audio('conc4m');
        conc5m = game.add.audio('conc5m');
        conc6m = game.add.audio('conc6m');

        name_bg = game.add.sprite(885, 5, 'name_bg');

        avatar = game.add.sprite(890, 10, code);
        avatar.frame = 0;
        avatar.scale.setTo(0.4, 0.4);

        helper1_shadow = game.add.sprite(430, 460, 'helper1_shadow');
        helper1_shadow.alpha = 0;

        help7 = game.add.button(840, 10, 'help', helpSeven, this, 1, 0, 1);
        helper7 = game.add.sprite(430, 460, 'helper7');
        helper7.alpha = 0;

        nick = game.add.text(960, 25, name, {font: "24px Varela", fill: "#34486b", fontWeight: "900"});
        nick.fontWeight = 'bold';

        teacher = game.add.sprite(860, 120, 'teacher');
        talk =  teacher.animations.add('talk');
        teacher.animations.play('talk', 11, true);

        textTitle = game.add.text(100, 40, "Conclusion", {
            font: "32px Varela",
            fill: font,
            align: "center",
            stroke: stroke,
            strokeThickness: 2,
            fontWeight: '900'
        });

        conc1 = game.add.text(700, 100, "* The Big O notation is a symbol for measuring the complexity of an algorithm. It helps us check  \n"+
            "if the running time of an algorithm is efficient for large amount of inputs.",
            { font: "15px Varela", fill: font, stroke: stroke, strokeThickness:2, align: "justify", fontWeight: '900'  });

        conc2 = game.add.text(700, 170, "* Big O is a part of the Bachmann–Landau notations which was conceptualized by the German \n" +
            "mathematician Edmund Landau.",
            { font: "15px Varela", fill: font, stroke: stroke, strokeThickness:2, align: "justify", fontWeight: '900'  });

        conc3 = game.add.text(700, 235, "* The notation focuses on the worst running time of the algorithm. If a codebase has 2 functions \n" +
            "on which 1 function is O(n) and the other function is O(1), the whole codebase is O(n).",
            { font: "15px Varela", fill: font, stroke: stroke, strokeThickness:2, align: "justify", fontWeight: '900'  });

        conc4 = game.add.text(700, 300, "* When reviewing the number of steps, we can drop constants and focus on the variable (n) which is the size of the input.",
            { font: "14px Varela", fill: font, stroke: stroke, strokeThickness:2, align: "justify", fontWeight: '900'  });

        conc5 =  game.add.text(700, 340, "* The 5 common complexity notations are: constant, linear, quadratic, exponential and logarithmic.",
            { font: "15px Varela", fill: font, stroke: stroke, strokeThickness:2, align: "justify", fontWeight: '900'  });

        conc6 =  game.add.text(700, 380, "* We can also get the Big O of an algorithm by analyzing it. If the worst case of the function needs \n" +
            " to go through all the elements of the array input with the steps dependent on the input, the complexity \n" +
            " will be O(n). If it goes through  a nested loop with the same condition, it will be O(n^x) where x is \n" +
            " the number of nested loops. You just need to familiarize the different notations so that you can apply \n" +
            " it in real life algorithms.",
            { font: "15px Varela", fill: font, stroke: stroke, strokeThickness:2, align: "justify", fontWeight: '900'  });

        conc1.alpha =0;
        conc2.alpha =0;
        conc3.alpha =0;
        conc4.alpha =0;
        conc5.alpha =0;
        conc6.alpha =0;

        btnbFour = game.add.button(3, 547, 'back', backChapterFour, this, 1, 0, 1);
        btnnFour= game.add.button(945, 547, 'next', nextChapterFour, this, 1, 0, 1);
        startConc();
    }
};

function startConc(){

    conc1m.play()
    game.add.tween(conc1).to({ alpha: 1 }, 1000, "Linear", true);
    game.add.tween(conc1).to({ x: 120, y:100 }, 1000, "Linear", true)
    setTimeout(function(){
        teacher.animations.stop(null, true);
    }, 9000);
    setTimeout(function(){
        game.add.tween(conc2).to({ alpha: 1 }, 1000, "Linear", true);
        game.add.tween(conc2).to({ x: 120, y:170 }, 1000, "Linear", true)
        teacher.animations.play('talk', 11, true);
        conc2m.play()
    }, 9500);
    setTimeout(function(){
        teacher.animations.stop(null, true);
    }, 15500);
    setTimeout(function(){
        game.add.tween(conc3).to({ alpha: 1 }, 1000, "Linear", true);
        game.add.tween(conc3).to({ x: 120, y:235 }, 1000, "Linear", true)
        teacher.animations.play('talk', 11, true);
        conc3m.play()
    }, 16000);
    setTimeout(function(){
        teacher.animations.stop(null, true);
    }, 28000);
    setTimeout(function(){
        game.add.tween(conc4).to({ alpha: 1 }, 1000, "Linear", true);
        game.add.tween(conc4).to({ x: 120, y:300 }, 1000, "Linear", true)
        teacher.animations.play('talk', 11, true);
        conc4m.play()
    }, 28500);
    setTimeout(function(){
        teacher.animations.stop(null, true);
    }, 35500);
    setTimeout(function(){
        game.add.tween(conc5).to({ alpha: 1 }, 1000, "Linear", true);
        game.add.tween(conc5).to({ x: 120, y:340 }, 1000, "Linear", true)
        teacher.animations.play('talk', 11, true);
        conc5m.play()
    }, 36000);
    setTimeout(function(){
        teacher.animations.stop(null, true);
    }, 42600);
    setTimeout(function(){
        game.add.tween(conc6).to({ alpha: 1 }, 1000, "Linear", true);
        game.add.tween(conc6).to({ x: 120, y:380 }, 1000, "Linear", true)
        teacher.animations.play('talk', 11, true);
        conc6m.play()
    }, 43500);
    setTimeout(function(){
        teacher.animations.stop(null, true);
    }, 68200);

}

function helpSeven(){

    help_sound.play();

    help7.inputEnabled = false;
    btnnFour.inputEnabled = false;

    game.add.tween(helper7).to({ alpha: 1 }, 1000, "Linear", true);
    game.add.tween(helper1_shadow).to({ alpha: 1 }, 1000, "Linear", true);
    game.add.tween(helper1_shadow.scale).to( { x: 1.1, y: 1.1 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true);
    game.add.tween(helper1_shadow.position).to( { x:430-12, y: 460-7}, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true );

    setTimeout(function(){
        game.add.tween(helper1_shadow).to({ alpha: 0 }, 300 , "Linear", true);
        game.add.tween(helper7).to({ alpha: 0 }, 1000, "Linear", true);
    },4000)

    setTimeout(function(){
        help7.inputEnabled = true;
        btnnFour.inputEnabled = true;
    },3000)
}

function pausePartFour() {
    partFourMusic.pause();
}

function resumePartFour() {
    partFourMusic.resume();
}

function backChapterFour(){
    partFourMusic.stop();
    game.state.start('part_4', true, false,code,name);
}

function nextChapterFour(){
    if(correct){
        partFourMusic.stop();
        game.state.start('part_6', true, false,code,name);
    }
}

function backChapterFour(){
    conc1m.stop();
    conc2m.stop();
    conc3m.stop();
    conc4m.stop();
    conc5m.stop();
    conc6m.stop();

    game.state.start('part_4', true, false,code,name, bg, bool_music);
}

function nextChapterFour(){
    conc1m.stop();
    conc2m.stop();
    conc3m.stop();
    conc4m.stop();
    conc5m.stop();
    conc6m.stop();


    game.state.start('quiz_start', true, false,code,name, bg, bool_music);
}
