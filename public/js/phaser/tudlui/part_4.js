
/**
 * Created by Jonas on 9/14/2016.
 */

var partFour = function(game){
};


var lineThree = [];
var wordIndexThree,o1b, o2b, o3b, o4b, o5b;
var contentThree = "In our previous level, it was stated that the size of the complexity of the algorithm is examined using the input and we will need to count the number of steps it runs to find the Big O notation. Let's examine this line of code here. " +
    " In this example, we will examine a function which adds all the contents of an array. To find its running time, we will need to count how many steps does the function execute." +
    " To do that, lets first count the outside loop1. First would be the initiation of sum sum sum sum sum sum sum1. Next will be the initiation of i1. Lastly, returning the sum sum sum sum sum sum2 will require another step. That's a total of 3 steps1 outside the loop which will only be executed once." +
    " Now we will count1 the steps inside the loop. First, the process of counting counting counting counting counting counting1 the inputs inside the array. Next, comparing i i i i i i2 to the number of inputs in array. Next is the increment1 at the end of the loop. Then, we include the accessing1 of the array at index i. We also count the process adding adding adding adding1" +
    " the array at index to sum. Lastly, we count the step on which the total will be assigned1 to sum. We all have 6 steps for the inside loop." +
    " However, we will need to multiply these steps to the value of the number1 of items in the array because the loop will be executed based on the number of items. So we say that the running time is 6n+3 where n is the number of inputs. You can see that the number of steps is proportionate and dependent on N. No matter what the coefficients1 are and constants added, N will still have the biggest impact." +
    " We can then say that this function is O1 of N. There are also algorithms that stop1 even though the it1 has only executed half of the total number of inputs inside of the array. In the Big O notation, we only get the worst case or the longest time it takes. So this function will still be O of N.";


var textTitle, partThreeMusic, textCode;

partFour.prototype = {
    init: function(code, name, bg, bool_music) {
        wordIndexThree = 0;
    },
    preload: function(){
        game.load.spritesheet('teacher','../images/phaser/teacher_sprite.png', 200, 345, 4);
        game.load.spritesheet('o1b', '../images/phaser/o1b.png', 200, 100);
        game.load.spritesheet('o2b', '../images/phaser/onb.png', 200, 100);
        game.load.spritesheet('o3b', '../images/phaser/on2b.png', 200, 100);
        game.load.spritesheet('o4b', '../images/phaser/o2nb.png', 200, 100);
        game.load.spritesheet('o5b', '../images/phaser/olnb.png', 200, 100);
        //game.load.audio('partThreeMusic', '../music/partThree.mp3');
    },
    create: function(){

        game.background = this.game.add.sprite(0,0, bg);
        music.volume = 0.15;
        if(bool_music){
            sound = game.add.sprite(790, 10, 'sounds');
        }else{
            sound = game.add.sprite(790, 10, 'mute');
        }

        name_bg = game.add.sprite(885, 5, 'name_bg');

        avatar = game.add.sprite(890, 10, code);
        avatar.frame = 0;
        avatar.scale.setTo(0.4,0.4);

        nick = game.add.text(960,25, name, { font: "24px Varela", fill: "#34486b", fontWeight: "900"});
        nick.fontWeight = 'bold';


        helper1_shadow = game.add.sprite(670, 460, 'helper1_shadow');
        helper1_shadow.alpha = 0;

        help6 = game.add.button(840, 10, 'help', helpSix, this, 1, 0, 1);
        helper6 = game.add.sprite(670, 460, 'helper6');
        helper6.alpha = 0;
        //partThreeMusic = game.add.audio('partThreeMusic');
        //partThreeMusic.play();
        //
        textTitle= game.add.text(100,40, "Big-O Examples", {  font: "32px Varela",fill: font, align: "center", stroke: stroke, strokeThickness:2, fontWeight: '900'  });

        teacher = game.add.sprite(860, 120, 'teacher');
        talk =  teacher.animations.add('talk');

        o1b = game.add.button(200, 130, 'o1b', animateOne, this, 1, 0, 1);
        o2b = game.add.button(500, 130, 'o2b', animateTwo, this, 1, 0, 1);
        o3b = game.add.button(350, 255, 'o3b', animateThree, this, 1, 0, 1);
        o4b = game.add.button(200, 380, 'o4b', animateFour, this, 1, 0, 1);
        o5b = game.add.button(500, 380, 'o5b', animateFive, this, 1, 0, 1);

        o1b.alpha = 0;
        o2b.alpha = 0;
        o3b.alpha = 0;
        o4b.alpha = 0;
        o5b.alpha = 0;

        o1b.inputEnabled = false;
        o2b.inputEnabled = false;
        o3b.inputEnabled = false;
        o4b.inputEnabled = false;
        o5b.inputEnabled = false;

        //btnbThree = game.add.button(960, 500, 'back', backChapterThree, this, 0, 1, 0);
        //btnnThree = game.add.button(1050, 500, 'next', nextChapterThree, this, 1, 0, 1);

        animateStart();
    },
    update: function(){

    },
    render: function(){

    }

}

function animateStart(){
    setTimeout(function(){
        game.add.tween(o1b).to({ alpha: 1 }, 1000, "Linear", true);
    },2000);

    setTimeout(function(){
        game.add.tween(o2b).to({ alpha: 1 }, 1000, "Linear", true);
    },2400);

    setTimeout(function(){
        game.add.tween(o3b).to({ alpha: 1 }, 1000, "Linear", true);
    },2800);

    setTimeout(function(){
        game.add.tween(o4b).to({ alpha: 1 }, 1000, "Linear", true);
    },3200);

    setTimeout(function(){
        game.add.tween(o5b).to({ alpha: 1 }, 1000, "Linear", true);
    },3600);

    o1b.inputEnabled = true;
    o2b.inputEnabled = true;
    o3b.inputEnabled = true;
    o4b.inputEnabled = true;
    o5b.inputEnabled = true;
}

function nextWordThree() {

}

function animateOne(){
    game.add.tween(o1b).to({ alpha: 0 }, 300, "Linear", true);
    game.add.tween(o2b).to({ alpha: 0 }, 300, "Linear", true);
    game.add.tween(o3b).to({ alpha: 0 }, 300, "Linear", true);
    game.add.tween(o4b).to({ alpha: 0 }, 300, "Linear", true);
    game.add.tween(o5b).to({ alpha: 0 }, 300, "Linear", true);

}

function animateTwo(){
    game.add.tween(o1b).to({ alpha: 0 }, 300, "Linear", true);
    game.add.tween(o2b).to({ alpha: 0 }, 300, "Linear", true);
    game.add.tween(o3b).to({ alpha: 0 }, 300, "Linear", true);
    game.add.tween(o4b).to({ alpha: 0 }, 300, "Linear", true);
    game.add.tween(o5b).to({ alpha: 0 }, 300, "Linear", true);
}

function animateThree(){
    game.add.tween(o1b).to({ alpha: 0 }, 300, "Linear", true);
    game.add.tween(o2b).to({ alpha: 0 }, 300, "Linear", true);
    game.add.tween(o3b).to({ alpha: 0 }, 300, "Linear", true);
    game.add.tween(o4b).to({ alpha: 0 }, 300, "Linear", true);
    game.add.tween(o5b).to({ alpha: 0 }, 300, "Linear", true);
}

function animateFour(){
    game.add.tween(o1b).to({ alpha: 0 }, 300, "Linear", true);
    game.add.tween(o2b).to({ alpha: 0 }, 300, "Linear", true);
    game.add.tween(o3b).to({ alpha: 0 }, 300, "Linear", true);
    game.add.tween(o4b).to({ alpha: 0 }, 300, "Linear", true);
    game.add.tween(o5b).to({ alpha: 0 }, 300, "Linear", true);
}

function animateFive(){
    game.add.tween(o1b).to({ alpha: 0 }, 300, "Linear", true);
    game.add.tween(o2b).to({ alpha: 0 }, 300, "Linear", true);
    game.add.tween(o3b).to({ alpha: 0 }, 300, "Linear", true);
    game.add.tween(o4b).to({ alpha: 0 }, 300, "Linear", true);
    game.add.tween(o5b).to({ alpha: 0 }, 300, "Linear", true);
}

function showOne(){

}

function showTwo(){

}

function showThree(){

}

function showFour(){

}

function showFive(){

}

function pausePartThree() {
    partThreeMusic.pause();
}

function resumePartThree() {
    partThreeMusic.resume();
}

function backChapterThree(){
    partThreeMusic.stop();
    game.state.start('part_3', true, false,code,name);
}

function nextChapterThree(){
    partThreeMusic.stop();
    game.state.start('part_5', true, false,code,name);
}
