/**
 * Created by Jonas on 11/1/2016.
 */
/**
 * Created by Jonas on 9/14/2016.
 */

var partThree = function(game){
};

var wordIndexTwo;
//var lineTwo = [],
var avatar, nick, btnnTwo, btnbTwo, textO, descriptionO, countTwo, textCode, textCount, partTwoMusic, lineTwo,help6, helper6, what, how, learn_more, selected = 0, whats, hows;
var contentTwo =
    "The marker0 big O of an algorithm is represented by O of N. It is a function, O, of the time an algorithm takes to run or the running time which is represented by n." +
    " We use the Big O notation to express how quickly the algorithm's runtime grows given the number of marker4 input. " +
    " To marker1 find the  big O of an algorithm we will need to determine how long it takes to run the function based on the number of inputs. " +
    " Given an array of marker2 inputs with size marker3 n, we will need to count how many processes it executes for each element of the array.  Don't worry an example will be given in the next level.";


partThree.prototype = {
    init: function(code, name) {
        wordIndexTwo = 0;
    },
    preload: function(){
        game.load.audio('partTwoMusic', '../music/partTwo.mp3');
        game.load.spritesheet('what', '../images/phaser/what.png', 200, 100);
        game.load.spritesheet('how', '../images/phaser/how.png', 200, 100);
        game.load.spritesheet('whats', '../images/phaser/whats.png', 150, 50);
        game.load.spritesheet('hows', '../images/phaser/hows.png', 150, 50);
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

        name_bg = game.add.sprite(885, 5, 'name_bg');

        avatar = game.add.sprite(890, 10, code);
        avatar.frame = 0;
        avatar.scale.setTo(0.4,0.4);

        nick = game.add.text(960,25, name, { font: "24px Varela", fill: "#34486b", fontWeight: "900"});
        nick.fontWeight = 'bold';


        teacher = game.add.sprite(860, 120, 'teacher');
        talk =  teacher.animations.add('talk');

        what = game.add.button(250, 180, 'what',whatOne, this, 1, 0, 1);
        how = game.add.button(550, 180, 'how',howOne, this, 1, 0, 1);
        whats = game.add.button(250, 530, 'whats',showWhat, this, 1, 0, 1);
        hows = game.add.button(450, 530, 'hows',showHow, this, 1, 0, 1);
        whats.alpha = 0;
        hows.alpha = 0;
        whats.inputEnabled = false;
        hows.inputEnabled = false;
        what.inputEnabled = false;
        how.inputEnabled = false;

        help6 = game.add.button(840, 10, 'help', helpFour, this, 1, 0, 1);
        helper6 = game.add.sprite(430, 425, 'helper5');

        helper6.alpha = 0;
        partTwoMusic = game.add.audio('partTwoMusic');
        partTwoMusic.play();

        textTitle= game.add.text(100,40, "What is Big-O and how?", {  font: "32px Varela",fill: font, align: "center", stroke: stroke, strokeThickness:2, fontWeight: '900'  });

        //textO = game.add.text(100, 100, "O( n )", { font: "80px Raleway", fill: "#000000"});

        descriptionO = game.add.text(370, 110, "The big O of an algorithm is represented by O(n) - pronounced 'Oh of en'.\n" +
            "It's a function, O, of the time an algorithm takes to run or the running time,\n" +
            "which is represented by N."
            , { font: "16px Raleway", fill: "#000000"});
        descriptionO.addFontWeight('bold', 43);
        descriptionO.addFontWeight('normal', 48);

        descriptionO.addFontWeight('bold',90);
        descriptionO.addFontWeight('normal',91);

        descriptionO.addFontWeight('bold',175);
        descriptionO.addFontWeight('normal',176);

        textCount = game.add.text(180, 300,"COUNT :", { font: "24px Raleway", fill: "#0000FF", fontWeight: "bold"});

        textCode = game.add.text(450,230, "$array = [ 'The' , 'Big' , 'O' , 'Notation'];\n" +
            "\n"+
            "public function addContents( $array ){\n"+
            "    for ( $i = 0 ; i < count( $array ) ; $i++ ){\n"+
            "        echo $array[ $i ].'<br>';\n"+
            "    }\n"+
            "}", { font: "23px Raleway", fill: "#000000", fontWeight:'bold'});

        countTwo = game.add.text(130, 500,"To find the big O of an algorithm, we " +
            "will need to determine how long it takes " +
            "to run the function based on the\nnumber" +
            " of inputs.", { font: "16px Raleway", fill: "#000000"});

        textCount.alpha = 0;
        textCode.alpha = 0;
        countTwo.alpha = 0;
        descriptionO.alpha =0;

        lineTwo = contentTwo.split(' ');
        game.time.events.repeat(Phaser.Timer.QUARTER * 1.5, lineTwo.length, nextWordTwo, this);
        //game.onPause.add(pausePartTwo, this);
        //game.onResume.add(resumePartTwo, this);

        btnbTwo = game.add.button(3, 547, 'back', backChapterTwo, this, 1, 0, 1);
        btnnTwo = game.add.button(945, 547, 'next', nextChapterTwo, this, 1, 0, 1);

        startIntro();
    },
    update: function(){

    },
    render: function(){

    }

}

function startIntro(){
    teacher.animations.play('talk', 11, true);
    setTimeout(function(){
        game.add.tween(what.scale).to( { x: 1.1, y: 1.1 }, 700, Phaser.Easing.Linear.None, true, 0, 0, true);
        game.add.tween(what.position).to( { x:250-12, y: 180-7}, 700, Phaser.Easing.Linear.None, true, 0, 0, true );
    }, 1500);

    setTimeout(function(){
        game.add.tween(how.scale).to( { x: 1.1, y: 1.1 }, 600, Phaser.Easing.Linear.None, true, 0, 0, true);
        game.add.tween(how.position).to( { x:550-12, y: 180-7}, 600, Phaser.Easing.Linear.None, true, 0, 0, true );
    }, 7100);

    setTimeout(function(){
        teacher.animations.stop(null, true);
        what.inputEnabled = true;
        how.inputEnabled = true;
    }, 10100);

}

function whatOne(){
    whats.inputEnabled = true;
    hows.inputEnabled = true;
    what.inputEnabled = false;
    how.inputEnabled = false;
    game.add.tween(what).to({ alpha: 0 }, 1000, "Linear", true);
    game.add.tween(how).to({ alpha: 0 }, 1000, "Linear", true);
    game.add.tween(whats).to({ alpha: 1 }, 1000, "Linear", true);
    game.add.tween(hows).to({ alpha: 1 }, 1000, "Linear", true);
    game.add.tween(what.scale).to({x: .8, y:.8}, 800, Phaser.Easing.Linear.None, true);
    game.add.tween(how.scale).to({x:.8, y:.8}, 800, Phaser.Easing.Linear.None, true);
    game.add.tween(what).to({
        x: [250],
        y: [530]
    }, 1000,"Linear", true);
    game.add.tween(how).to({
        x: [450],
        y: [530]
    }, 1000,"Linear", true);
    showWhat();

}


function howOne(){
    whats.inputEnabled = true;
    hows.inputEnabled = true;
    what.inputEnabled = false;
    how.inputEnabled = false;
    game.add.tween(what).to({ alpha: 0 }, 1000, "Linear", true);
    game.add.tween(how).to({ alpha: 0 }, 1000, "Linear", true);
    game.add.tween(whats).to({ alpha: 1 }, 1000, "Linear", true);
    game.add.tween(hows).to({ alpha: 1 }, 1000, "Linear", true);
    game.add.tween(what.scale).to({x: .5, y:.5}, 800, Phaser.Easing.Linear.None, true);
    game.add.tween(how.scale).to({x:.5, y:.5}, 800, Phaser.Easing.Linear.None, true);
    game.add.tween(what).to({
        x: [250],
        y: [530]
    }, 1000,"Linear", true);
    game.add.tween(how).to({
        x: [450],
        y: [530]
    }, 1000,"Linear", true);
    showHow();

}

function showWhat(){

}


function showHow(){

}

function nextWordTwo() {
    if(lineTwo[wordIndexTwo] == 'marker4'){
        partTwoMusic.pause();
    }
    // else if(lineTwo[wordIndexTwo] == "marker1"){
    //    partTwoMusic.resume();
    //    game.add.tween(countTwo).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    //}else if(lineTwo[wordIndexTwo] == "inputs."){
    //    game.add.tween(textCount).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    //    game.add.tween(textCode).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    //}else if(lineTwo[wordIndexTwo] == "marker2"){
    //    textCode.addColor('#ff0000', 9);
    //    textCode.addColor('#000000', 44);
    //} else if(lineTwo[wordIndexTwo] == "marker3"){
    //    textCode.addColor('#000000', 9);
    //    setTimeout(function(){
    //        textCode.addColor('#ff0000', 11);
    //        textCode.addColor('#000000', 16);
    //    }, 1000);
    //    setTimeout(function(){
    //        textCode.addColor('#ff0000', 93);
    //        textCode.addColor('#000000', 99);
    //        textCount.setText("COUNT : 1");
    //    }, 2000);
    //    setTimeout(function(){
    //        textCode.addColor('#000000', 93);
    //        textCode.addColor('#ff0000', 106);
    //        textCode.addColor('#000000', 121);
    //        textCount.setText("COUNT : 2");
    //    }, 3500);
    //    setTimeout(function(){
    //        textCode.addColor('#ff0000', 102);
    //        textCode.addColor('#000000', 121);
    //        textCount.setText("COUNT : 3");
    //    }, 5000);
    //    setTimeout(function(){
    //        textCode.addColor('#000000', 102);
    //        textCode.addColor('#000000', 106);
    //        textCode.addColor('#ff0000', 135);
    //        textCode.addColor('#000000', 163);
    //        textCount.setText("COUNT : 4");
    //    }, 6500);
    //    setTimeout(function(){
    //        textCode.addColor('#000000', 135);
    //        textCode.addColor('#ff0000', 124);
    //        textCode.addColor('#000000', 128);
    //        textCount.setText("COUNT : 5");
    //    }, 8000);
    //}else if(lineTwo[wordIndexTwo] == "marker0"){
    //    game.add.tween(descriptionO).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    //}

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

function backChapterTwo(){
    partTwoMusic.stop();
    game.state.start('part_2', true, false,code,name, bg, bool_music);
}

function nextChapterTwo(){
    partTwoMusic.stop();
    game.state.start('part_4', true, false,code,name, bg, bool_music);
}
