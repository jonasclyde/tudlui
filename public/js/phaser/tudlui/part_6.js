
/**
 * Created by Jonas on 9/14/2016.
 */

var partSix = function(game){
};


var lineFive = [];
var wordIndexFive;
var contentFive = "";


var textTitle,textDescription, partFiveMusic, textCode, graph0, graph1, graph2, graph3, graph4, graph5, graph6;

partSix.prototype = {
    init: function(code, name) {
        wordIndexFive = 0;
    },
    preload: function(){
        game.load.audio('partFiveMusic', '../music/partFive.mp3');
        game.load.image('func1','../images/phaser/func0.png');
        game.load.image('func1','../images/phaser/func1.png');
        game.load.image('func2','../images/phaser/func2.png');
        game.load.image('func3','../images/phaser/func3.png');
        game.load.image('func4','../images/phaser/func4.png');
        game.load.image('func5','../images/phaser/func5.png');
        game.load.image('func6','../images/phaser/func6.png');
    },
    create: function(){

        game.background = this.game.add.sprite(0,0, 'background');

        avatar = game.add.sprite(890, 10, code);
        avatar.frame = 0;
        avatar.scale.setTo(0.4,0.4);
        nick = game.add.text(960,25, name, { font: "24px Raleway", fill: "#000000"});
        nick.fontWeight = 'bold';
        partFiveMusic = game.add.audio('partFiveMusic');
        partFiveMusic.play();

        textTitle= game.add.text(100,40, "V. Graphing the Functions.", { font: "27px Raleway", fill: "#000000"});

        textDescription = game.add.text(140, 100, "In our previous level, it was stated that the size of the complexity of the algorithm is examined using\n" +
            "the input and we will need to count the number of steps it runs to find the Big O notation. Let's examine \n" +
            "this line of code here.",
            { font: "18px Raleway", fill: "#000000", align: 'left' });

        graph0 = game.add.sprite(200, 100, 'func0');
        graph1 = game.add.sprite(200, 100, 'func1');
        graph2 = game.add.sprite(200, 100, 'func2');
        graph3 = game.add.sprite(200, 100, 'func3');
        graph4 = game.add.sprite(200, 100, 'func4');
        graph5 = game.add.sprite(200, 100, 'func5');
        graph6 = game.add.sprite(200, 100, 'func6');

        graph0.alpha = 0;
        graph1.alpha = 0;
        graph2.alpha = 0;
        graph3.alpha = 0;
        graph4.alpha = 0;
        graph5.alpha = 0;
        graph6.alpha = 0;

        //note1 = game.add.text(50,120, "* This function adds all the contents of the \n" +
        //" given array.", { font: "14px Raleway", fill: "#000000"});
        //note2 = game.add.text(50,190, "* Count the steps outside the loop.", { font: "14px Raleway", fill: "#000000"});
        //note3 = game.add.text(50,235, "* Processes that are outside the loop only \n" +
        //" occur once.", { font: "14px Raleway", fill: "#000000"});
        //note4 = game.add.text(50,305, "* Count the steps inside the loop.", { font: "14px Raleway", fill: "#000000"});
        //note5 = game.add.text(50,355, "* The number of steps inside the loop \n" +
        //" depends on N (the number of inputs).", { font: "14px Raleway", fill: "#000000"});
        //note6 = game.add.text(50,435, "* For big O, we will not consider the\n" +
        //" coefficients or constant overheads and\n" +
        //" any terms except the fastest growing one.", { font: "14px Raleway", fill: "#000000"});
        //
        //outsideloop = game.add.text(860,120, "Outside Loop", { font: "20px Raleway", fill: "#FF0000", fontWeight: "bold"});
        //insideloop = game.add.text(860,220, "Inside Loop", { font: "20px Raleway", fill: "#0000FF", fontWeight: "bold"});
        //totalsteps = game.add.text(860,320, "Total Steps\n" +
        //"     6N + 3", { font: "20px Raleway", fill: "#00FF00", fontWeight: "bold"});
        //notationfunction = game.add.text(820,429, "This function is O(N)", { font: "23px Raleway", fill: "#000000", fontWeight: "bold"});
        //
        //textCode.alpha = 0;
        //note1.alpha = 0;
        //note2.alpha = 0;
        //note3.alpha = 0;
        //note4.alpha = 0;
        //note5.alpha = 0;
        //note6.alpha = 0;
        //outsideloop.alpha = 0;
        //insideloop.alpha = 0;
        //totalsteps.alpha = 0;
        //notationfunction.alpha = 0;
        //
        //lineFive = contentFive.split(' ');
        //game.time.events.repeat(Phaser.Timer.QUARTER * 1.4, lineFive.length, nextWordFive, this);
        //game.onPause.add(pausePartFive, this);
        //game.onResume.add(resumePartFive, this);



        btnbFive = game.add.button(960, 500, 'back', backChapterFive, this, 0, 1, 0);
        btnnFive = game.add.button(1050, 500, 'next', nextChapterFive, this, 1, 0, 1);
    },
    update: function(){

    },
    render: function(){

    }

}

function nextWordFive() {


    if(lineFive[wordIndexFive] == 'example,'){
        game.add.tween(textDescription).to({alpha: 0}, 1000, "Linear", true, 0, 0, false);
        game.add.tween(note1).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
        game.add.tween(textCode).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    }else if(lineFive[wordIndexFive] == 'loop1.'){
        game.add.tween(note2).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
        game.add.tween(outsideloop).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    }else if(lineFive[wordIndexFive] == 'sum1.'){
        textCode.addColor('#ff0000', 44);
        textCode.addColor('#000000', 54);
        outsideloop.setText("Outside Loop\n" +
        "      1 step");
    }else if(lineFive[wordIndexFive] == 'i1.'){
        textCode.addColor('#ff0000', 65);
        textCode.addColor('#000000', 73);
        outsideloop.setText("Outside Loop\n" +
        "      2 steps");
    }else if(lineFive[wordIndexFive] == 'sum2'){
        textCode.addColor('#ff0000', 154);
        textCode.addColor('#000000', 166);
        outsideloop.setText("Outside Loop\n" +
        "      3 steps");
    }else if(lineFive[wordIndexFive] == 'steps1'){
        game.add.tween(note3).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    }else if(lineFive[wordIndexFive] == 'count1'){
        game.add.tween(note4).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
        game.add.tween(insideloop).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    }else if(lineFive[wordIndexFive] == 'counting1'){
        textCode.addColor('#0000ff', 79);
        textCode.addColor('#000000', 95);
        insideloop.setText("Inside Loop\n" +
        "      1 step");
    }else if(lineFive[wordIndexFive] == 'i2'){
        textCode.addColor('#0000ff', 74);
        textCode.addColor('#000000', 78);
        insideloop.setText("Inside Loop\n" +
        "      2 steps");
    }else if(lineFive[wordIndexFive] == 'increment1'){
        textCode.addColor('#0000ff', 97);
        textCode.addColor('#000000', 101);
        insideloop.setText("Inside Loop\n" +
        "      3 steps");
    }else if(lineFive[wordIndexFive] == 'accessing1'){
        textCode.addColor('#0000ff', 128);
        textCode.addColor('#000000', 141);
        insideloop.setText("Inside Loop\n" +
        "      4 steps");
    }else if(lineFive[wordIndexFive] == 'adding1'){
        textCode.addColor('#0000ff', 121);
        textCode.addColor('#000000', 127);
        insideloop.setText("Inside Loop\n" +
        "      5 steps");
    }else if(lineFive[wordIndexFive] == 'assigned1'){
        textCode.addColor('#0000ff', 113);
        textCode.addColor('#000000', 120);
        insideloop.setText("Inside Loop\n" +
        "      6 steps");
    }else if(lineFive[wordIndexFive] == 'number1'){
        game.add.tween(note5).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    }else if(lineFive[wordIndexFive] == '6n+3'){
        game.add.tween(totalsteps).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    }else if(lineFive[wordIndexFive] == 'coefficients1'){
        game.add.tween(note6).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    }else if(lineFive[wordIndexFive] == 'O1'){
        game.add.tween(note6).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
        game.add.tween(notationfunction).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    }

    wordIndexFive++;
    //  Last word?
    if (wordIndexFive === lineFive.length)
    {
        return;
    }
}

function pausePartFive() {
    partFiveMusic.pause();
}

function resumePartFive() {
    partFiveMusic.resume();
}

function backChapterFive(){
    game.state.start('part_3', true, false,code,name);
}

function nextChapterFive(){
    game.state.start('part_5', true, false,code,name);
}
