
/**
 * Created by Jonas on 9/14/2016.
 */

var partSeven = function(game){
};


var lineSix = [];
var wordIndexSix;
var contentSix = "The O of 1 notation represents the running time for algorithms that will run for the same amount of time regardless of the number of inputs, or size of the array given to the function. Let's examine this code. " +
    "This a a a a a a function1 will accept an input of array with n elements and will return true if the array is empty and false if not. " +
    "In this example, the algorithm will have a 51 steps when executed. Only 5 because the function will only have 1 return value depending on the input. You can see that no matter how many inputs are there inside the array1, the function will only have 5 steps. This is the O of 1, or constant complexity.";


var textTitle,textDescription, partSixMusic, textCode, note1, note2, note3;

partSeven.prototype = {
    init: function(code, name) {
        wordIndexSix = 0;
    },
    preload: function(){
        game.load.audio('partSixMusic', '../music/partSix.mp3');
    },
    create: function(){

        game.background = this.game.add.sprite(0,0, 'background');

        avatar = game.add.sprite(890, 10, code);
        avatar.frame = 0;
        avatar.scale.setTo(0.4,0.4);
        nick = game.add.text(960,25, name, { font: "24px Raleway", fill: "#000000"});
        nick.fontWeight = 'bold';
        partSixMusic = game.add.audio('partSixMusic');
        partSixMusic.play();

        textTitle= game.add.text(100,40, "VI. O(1) Constant Time.", { font: "27px Raleway", fill: "#000000"});

        textDescription = game.add.text(140, 100, "The O(1) notation represents the running time of algorithms that will run for the same amount of time regardless\n" +
            "of the number of inputs or size of the array given to the function. Let's examine this code:\n",
            { font: "16px Raleway", fill: "#000000", align: 'left' });


        textCode = game.add.text(130,180, "$array = [ 'The' , 'Big' , 'O' , 'Notation'];\n" +
        "public function isEmpty( $array ){\n"+
        "       $number_of_inputs = count( $array );  //3 \n"+
        "       if ( $number_of_inputs ){    //1\n"+
        "           return false;      //1\n "+
        "       }else{\n"+
        "           return true;        //1\n"+
        "       }\n"+
        "}", { font: "23px Raleway", fill: "#000000", fontWeight:'bold'});
        textCode.lineSpacing = 13;

        note1 =  game.add.text(750,210, "* This function checks if the\n" +
        " given array is empty or not.",  { font: "16px Raleway", fill: "#000000", fontWeight: 'bold'});
        note2 =  game.add.text(750,310, "* Number of steps is 5.",  { font: "16px Raleway", fill: "#000000", fontWeight: 'bold'});
        note3 =  game.add.text(750,390, "* The function will only execute\n" +
        "5 steps no matter how many \n" +
        "elements are in the array.",  { font: "16px Raleway", fill: "#000000", fontWeight: 'bold'});

        lineSix = contentSix.split(' ');
        game.time.events.repeat(Phaser.Timer.QUARTER * 1.4, lineSix.length, nextWordSix, this);
        game.onPause.add(pausePartSix, this);
        game.onResume.add(resumePartSix, this);


        note1.alpha = 0;
        note2.alpha = 0;
        note3.alpha = 0;

        textCode.addColor('#ffffff', 124);
        textCode.addColor('#000000', 127);

        textCode.addColor('#ffffff', 164);
        textCode.addColor('#000000', 167);

        textCode.addColor('#ffffff', 197);
        textCode.addColor('#000000', 200);

        textCode.addColor('#ffffff', 245);
        textCode.addColor('#000000', 248);


        btnbSix = game.add.button(960, 500, 'back', backChapterSix, this, 0, 1, 0);
        btnnSix = game.add.button(1050, 500, 'next', nextChapterSix, this, 1, 0, 1);
    },
    update: function(){

    },
    render: function(){

    }

}

function nextWordSix() {

    if(lineSix[wordIndexSix] == 'function1'){
        game.add.tween(note1).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    }else if(lineSix[wordIndexSix] == '51'){
        textCode.addColor('#ff0000', 124);
        textCode.addColor('#000000', 127);

        textCode.addColor('#ff0000', 164);
        textCode.addColor('#000000', 167);

        textCode.addColor('#ff0000', 197);
        textCode.addColor('#000000', 200);

        textCode.addColor('#ff0000', 245);
        textCode.addColor('#000000', 248);
        game.add.tween(note2).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    }else if(lineSix[wordIndexSix] == 'array1,'){
        game.add.tween(note3).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    }


    wordIndexSix++;
    //  Last word?
    if (wordIndexSix === lineSix.length)
    {
        return;
    }
}

function pausePartSix() {
    partSixMusic.pause();
}

function resumePartSix() {
    partSixMusic.resume();
}

function backChapterSix(){
    partSixMusic.stop();
    game.state.start('part_6', true, false,code,name);
}

function nextChapterSix(){
    partSixMusic.stop();
    game.state.start('part_8', true, false,code,name);
}
