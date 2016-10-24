/**
 * Created by Jonas on 9/14/2016.
 */

var partTwo = function(game){
};


//var lineTwo = [],
var barsTwo=[];
var levelTwo = 2;
    //wordIndexTwo= 0;
var avatar,nick,loading, barTwo, btnnTwo, btnbTwo;
    //textO, picLandau, textCode, textOutput, textDescription, textTitle, btnTwo, partTwoMusic, textIterator;
//var contentTwo =
//        "The Big O notation or the Landau's symbol is used to describe the performance or complexity of an algorithm. " +
//        "It gives the estimation of the worst-case scenario and execution time of an algorithm. " +
//        "To be more specific, it measures the efficiency of an algorithm. " +
//        "and the growth rate of the time the algorithm takes to complete with respect to the amount of data it is given";


partTwo.prototype = {
    init: function(code, name, bar) {
        if(bar <= levelTwo){
            barTwo = bar + 1;
        }

    },
    preload: function(){
        //game.load.audio('partTwo', '../music/partTwo.mp3');
        //game.load.image('landau_pic','../images/phaser/landau.jpg');
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
        //partTwoMusic = game.add.audio('partTwo');
        //partTwoMusic.play();
        //
        textTitle= game.add.text(250,30, "III. Why Big O and How?", { font: "27px Raleway", fill: "#000000"});
        //textDescription = game.add.text(250, 100, "The Big O notation (Landau's symbol) is used to describe the performance or complexity of an algorithm.  \n" +
        //    " It gives the the estimation of the worst-case scenario and execution time of an algorithm.\n" +
        //    "To be more specific, it measures of the efficiency and the growth rate of the time the algorithm\n" +
        //    "takes to complete with respect to the amount of data it is given.\n",
        //    { font: "16px Raleway", fill: "#000000", align: 'left' });
        //textDescription.lineSpacing = 13;
        //
        //textO = game.add.text(320, 330, "O(f(n))", { font: "72px Raleway", fill: "#000000"});
        //picLandau = game.add.sprite(640,280, 'landau_pic');
        //textCode = game.add.text(250,300, "$array = ['The', 'Big', 'O', 'Notation'];\n" +
        //    "\n"+
        //    "public function addContents($array){\n"+
        //    "    for($i = 0; i < count($array); $i++){\n"+
        //    "        echo $array[$i].' ';\n"+
        //    "    }\n"+
        //    "}", { font: "22px Raleway", fill: "#000000"});
        //textOutput = game.add.text(680,300, "Text Output", { font: "22px Raleway", fill: "#000000", fontWeight: "bold"});
        //textIterator = game.add.text(480,430, "// $i is index 0", { font: "18px Raleway", fill: "#ff0000", fontWeight: "italic"});
        //
        //textO.alpha = 0;
        //textCode.alpha = 0;
        //picLandau.alpha = 0;
        //textOutput.alpha = 0;
        //textIterator.alpha = 0;
        //
        //lineTwo = contentTwo.split(' ');
        //game.time.events.repeat(Phaser.Timer.QUARTER * 1.5, lineTwo.length, nextWordTwo, this);
        //game.onPause.add(pausePartTwo, this);
        //game.onResume.add(resumePartTwo, this);

        btnbTwo = game.add.button(960, 540, 'back', backChapterTwo, this, 0, 1, 0);
        btnnTwo = game.add.button(1050, 540, 'next', nextChapterTwo, this, 1, 0, 1);
    },
    update: function(){

    },
    render: function(){

    }

}

//function nextWordTwo() {
//    if(lineTwo[wordIndexTwo] == 'Big'){
//        game.add.tween(textO).to({alpha: 1}, 6000, "Linear", true, 0, 0, true);
//    }else if(lineTwo[wordIndexTwo] == "Landau's"){
//        game.add.tween(picLandau).to({alpha: 1}, 6000, "Linear", true, 0, 0, true);
//    }else if(lineTwo[wordIndexTwo] == "be"){
//        game.add.tween(textCode).to({alpha: 1}, 1500, "Linear", true, 0, 0, false);
//        game.add.tween(textOutput).to({alpha: 1}, 1500, "Linear", true, 0, 0, false);
//    }else if(lineTwo[wordIndexTwo] == "complete"){
//        setTimeout(function(){
//            game.add.tween(textIterator).to({alpha: 1}, 200, "Linear", true, 0, 0, false);
//            textOutput.setText("Text Output \n\nThe");
//
//        },2000);
//        setTimeout(function(){
//            textIterator.setText("// $i is index 1");
//            textOutput.setText("Text Output \n\nThe Big");
//
//        },4000);
//        setTimeout(function(){
//            textIterator.setText("// $i is index 2");
//            textOutput.setText("Text Output \n\nThe Big O");
//
//        },6000);
//        setTimeout(function(){
//            textIterator.setText("// $i is index 3");
//            textOutput.setText("Text Output \n\nThe Big O Notation");
//
//        },8000);
//    }
//
//    wordIndexTwo++;
//    //  Last word?
//    if (wordIndexTwo === lineTwo.length)
//    {
//        return;
//    }
//}
//
//function pausePartTwo() {
//    partTwoMusic.pause();
//}
//
//function resumePartTwo() {
//    partTwoMusic.resume();
//}

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
function backChapterTwo(){
    game.state.start('part_1', true, false,code,name, bar);
}

function nextChapterTwo(){
    game.state.start('part_3', true, false,code,name, barTwo);
}
