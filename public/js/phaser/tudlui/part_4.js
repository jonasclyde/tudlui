
/**
 * Created by Jonas on 9/14/2016.
 */

var partFour = function(game){
};


var lineThree = [];
var wordIndexThree, note1, note2, note3,note4, note5, note6, outsideloop, insideloop, totalsteps,notationfunction;
var contentThree = "In our previous level, it was stated that the size of the complexity of the algorithm is examined using the input and we will need to count the number of steps it runs to find the Big O notation. Let's examine this line of code here. " +
    " In this example, we will examine a function which adds all the contents of an array. To find its running time, we will need to count how many steps does the function execute." +
    " To do that, lets first count the outside loop1. First would be the initiation of sum sum sum sum sum sum sum1. Next will be the initiation of i1. Lastly, returning the sum sum sum sum sum sum2 will require another step. That's a total of 3 steps1 outside the loop which will only be executed once." +
    " Now we will count1 the steps inside the loop. First, the process of counting counting counting counting counting counting1 the inputs inside the array. Next, comparing i i i i i i2 to the number of inputs in array. Next is the increment1 at the end of the loop. Then, we include the accessing1 of the array at index i. We also count the process adding adding adding adding1" +
    " the array at index to sum. Lastly, we count the step on which the total will be assigned1 to sum. We all have 6 steps for the inside loop." +
    " However, we will need to multiply these steps to the value of the number1 of items in the array because the loop will be executed based on the number of items. So we say that the running time is 6n+3 where n is the number of inputs. You can see that the number of steps is proportionate and dependent on N. No matter what the coefficients1 are and constants added, N will still have the biggest impact." +
    " We can then say that this function is O1 of N. There are also algorithms that stop1 even though the it1 has only executed half of the total number of inputs inside of the array. In the Big O notation, we only get the worst case or the longest time it takes. So this function will still be O of N.";


var textTitle, partThreeMusic, textCode;

partFour.prototype = {
    init: function(code, name) {
        wordIndexThree = 0;
    },
    preload: function(){
        game.load.audio('partThreeMusic', '../music/partThree.mp3');
    },
    create: function(){

        game.background = this.game.add.sprite(0,0, 'background');


        avatar = game.add.sprite(890, 10, code);
        avatar.frame = 0;
        avatar.scale.setTo(0.4,0.4);
        nick = game.add.text(960,25, name, { font: "24px Raleway", fill: "#000000"});
        nick.fontWeight = 'bold';
        partThreeMusic = game.add.audio('partThreeMusic');
        partThreeMusic.play();

        textTitle= game.add.text(100,40, "III. Counting Method.", { font: "27px Raleway", fill: "#000000"});

        textDescription = game.add.text(140, 100, "In our previous level, it was stated that the size of the complexity of the algorithm is examined using\n" +
            "the input and we will need to count the number of steps it runs to find the Big O notation. Let's examine \n" +
            "this line of code here.",
            { font: "18px Raleway", fill: "#000000", align: 'left' });

        textCode = game.add.text(380,120, "public function addContents( $array ){\n"+
            "      $sum = 0;\n"+
            "      for ( $i = 0 ; $i < count( $array ) ; $i++ ){\n"+
            "          $sum = $sum + $array[ $i ]; \n"+
            "      }\n"+
            "      return $sum;\n"+
            "}", { font: "23px Raleway", fill: "#000000", fontWeight:'bold'});
        textCode.lineSpacing = 13;

        note1 = game.add.text(50,120, "* This function adds all the contents of the \n" +
            " given array.", { font: "14px Raleway", fill: "#000000"});
        note2 = game.add.text(50,190, "* Count the steps outside the loop.", { font: "14px Raleway", fill: "#000000"});
        note3 = game.add.text(50,235, "* Processes that are outside the loop only \n" +
            " occur once.", { font: "14px Raleway", fill: "#000000"});
        note4 = game.add.text(50,305, "* Count the steps inside the loop.", { font: "14px Raleway", fill: "#000000"});
        note5 = game.add.text(50,355, "* The number of steps inside the loop \n" +
            " depends on N (the number of inputs).", { font: "14px Raleway", fill: "#000000"});
        note6 = game.add.text(50,435, "* For big O, we will not consider the\n" +
            " coefficients or constant overheads and\n" +
            " any terms except the fastest growing one.", { font: "14px Raleway", fill: "#000000"});

        outsideloop = game.add.text(860,120, "Outside Loop", { font: "20px Raleway", fill: "#FF0000", fontWeight: "bold"});
        insideloop = game.add.text(860,220, "Inside Loop", { font: "20px Raleway", fill: "#0000FF", fontWeight: "bold"});
        totalsteps = game.add.text(860,320, "Total Steps\n" +
            "     6N + 3", { font: "20px Raleway", fill: "#00FF00", fontWeight: "bold"});
        notationfunction = game.add.text(820,429, "This function is O(N)", { font: "23px Raleway", fill: "#000000", fontWeight: "bold"});

        textCode.alpha = 0;
        note1.alpha = 0;
        note2.alpha = 0;
        note3.alpha = 0;
        note4.alpha = 0;
        note5.alpha = 0;
        note6.alpha = 0;
        outsideloop.alpha = 0;
        insideloop.alpha = 0;
        totalsteps.alpha = 0;
        notationfunction.alpha = 0;

        lineThree = contentThree.split(' ');
        game.time.events.repeat(Phaser.Timer.QUARTER * 1.4, lineThree.length, nextWordThree, this);
        game.onPause.add(pausePartThree, this);
        game.onResume.add(resumePartThree, this);



        btnbThree = game.add.button(960, 500, 'back', backChapterThree, this, 0, 1, 0);
        btnnThree = game.add.button(1050, 500, 'next', nextChapterThree, this, 1, 0, 1);
    },
    update: function(){

    },
    render: function(){

    }

}

function nextWordThree() {


    if(lineThree[wordIndexThree] == 'example,'){
        game.add.tween(textDescription).to({alpha: 0}, 1000, "Linear", true, 0, 0, false);
        game.add.tween(note1).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
        game.add.tween(textCode).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    }else if(lineThree[wordIndexThree] == 'loop1.'){
        game.add.tween(note2).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
        game.add.tween(outsideloop).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    }else if(lineThree[wordIndexThree] == 'sum1.'){
        textCode.addColor('#ff0000', 44);
        textCode.addColor('#000000', 54);
        outsideloop.setText("Outside Loop\n" +
            "      1 step");
    }else if(lineThree[wordIndexThree] == 'i1.'){
        textCode.addColor('#ff0000', 65);
        textCode.addColor('#000000', 73);
        outsideloop.setText("Outside Loop\n" +
            "      2 steps");
    }else if(lineThree[wordIndexThree] == 'sum2'){
        textCode.addColor('#ff0000', 154);
        textCode.addColor('#000000', 166);
        outsideloop.setText("Outside Loop\n" +
            "      3 steps");
    }else if(lineThree[wordIndexThree] == 'steps1'){
        game.add.tween(note3).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    }else if(lineThree[wordIndexThree] == 'count1'){
        game.add.tween(note4).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
        game.add.tween(insideloop).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    }else if(lineThree[wordIndexThree] == 'counting1'){
        textCode.addColor('#0000ff', 79);
        textCode.addColor('#000000', 95);
        insideloop.setText("Inside Loop\n" +
            "      1 step");
    }else if(lineThree[wordIndexThree] == 'i2'){
        textCode.addColor('#0000ff', 74);
        textCode.addColor('#000000', 78);
        insideloop.setText("Inside Loop\n" +
            "      2 steps");
    }else if(lineThree[wordIndexThree] == 'increment1'){
        textCode.addColor('#0000ff', 97);
        textCode.addColor('#000000', 101);
        insideloop.setText("Inside Loop\n" +
            "      3 steps");
    }else if(lineThree[wordIndexThree] == 'accessing1'){
        textCode.addColor('#0000ff', 128);
        textCode.addColor('#000000', 141);
        insideloop.setText("Inside Loop\n" +
            "      4 steps");
    }else if(lineThree[wordIndexThree] == 'adding1'){
        textCode.addColor('#0000ff', 121);
        textCode.addColor('#000000', 127);
        insideloop.setText("Inside Loop\n" +
            "      5 steps");
    }else if(lineThree[wordIndexThree] == 'assigned1'){
        textCode.addColor('#0000ff', 113);
        textCode.addColor('#000000', 120);
        insideloop.setText("Inside Loop\n" +
            "      6 steps");
    }else if(lineThree[wordIndexThree] == 'number1'){
        game.add.tween(note5).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    }else if(lineThree[wordIndexThree] == '6n+3'){
        game.add.tween(totalsteps).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    }else if(lineThree[wordIndexThree] == 'coefficients1'){
        game.add.tween(note6).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    }else if(lineThree[wordIndexThree] == 'O1'){
        game.add.tween(note6).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
        game.add.tween(notationfunction).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    }

    wordIndexThree++;
    //  Last word?
    if (wordIndexThree === lineThree.length)
    {
        return;
    }
}

function pausePartThree() {
    partThreeMusic.pause();
}

function resumePartThree() {
    partThreeMusic.resume();
}

function backChapterThree(){
    game.state.start('part_3', true, false,code,name);
}

function nextChapterThree(){
    game.state.start('part_5', true, false,code,name);
}
