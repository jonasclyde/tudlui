/**
 * Created by Jonas on 9/14/2016.
 */

var partTwo = function(game){
};


var lineOne = [];
var wordIndexOne;
var avatar,nick, textO, picLandau, textCode, textOutput,textOutputLabel, textDescription, textTitle, btnnOne, partOneMusic, textIterator;
var contentOne =
    "The Big O notation or the Landau's symbol is used to describe the performance or complexity of an algorithm. " +
    "It gives the estimation of the worst-case scenario and execution time of an algorithm. " +
    "To be more specific, it measures the efficiency of an algorithm. " +
    "and the growth rate of the time the algorithm takes to complete with respect to the amount of data it is given";


partTwo.prototype = {
    init: function(code, name) {
        wordIndexOne=0;

    },
    preload: function(){
        game.load.audio('partOne', '../music/partOne.mp3');
        game.load.image('landau_pic','../images/phaser/landau.jpg');
    },
    create: function(){

        game.background = this.game.add.sprite(0,0, 'background');


        avatar = game.add.sprite(890, 10, code);
        avatar.frame = 0;
        avatar.scale.setTo(0.4,0.4);
        nick = game.add.text(960,25, name, { font: "24px Raleway", fill: "#000000"});
        nick.fontWeight = 'bold';

        partOneMusic = game.add.audio('partOne');
        partOneMusic.play();

        textTitle= game.add.text(100,40, "II. The Big O Notation.", { font: "27px Raleway", fill: "#000000"});
        textDescription = game.add.text(170, 120, "The Big O notation (Landau's symbol) is used to describe the performance or complexity of an \n" +
            "algorithm. It gives the estimation of the worst-case scenario and execution time of an algorithm.\n" +
            "To be more specific, it measures the efficiency and the growth rate of the time the algorithm takes \n" +
            "to complete with respect to the amount of data it is given.\n",
            { font: "17px Raleway", fill: "#000000", align: 'left' });
        textDescription.lineSpacing = 13;

        textO = game.add.text(260, 330, "O( f(n) )", { font: "72px Raleway", fill: "#000000"});
        textO.addColor('#ff0000', 3);
        textO.addColor('#000000', 7);
        picLandau = game.add.sprite(580,280, 'landau_pic');
        textCode = game.add.text(220,300, "$array = [ 'The' , 'Big' , 'O' , 'Notation'];\n" +
            "\n"+
            "public function addContents( $array ){\n"+
            "    for( $i = 0 ; i < count( $array ) ; $i++ ){\n"+
            "        echo $array[ $i ].'<br>';\n"+
            "    }\n"+
            "}", { font: "22px Raleway", fill: "#000000"});
        textOutputLabel = game.add.text(670,300, "Text Output", { font: "22px Raleway", fill: "#000000", fontWeight: "bold"});
        textOutput = game.add.text(690,360, "", { font: "34px Raleway", fill: "#0000FF", fontWeight: "bold"});
        textIterator = game.add.text(510,430, "// $i = 0", { font: "18px Raleway", fill: "#ff0000", fontWeight: "italic"});

        textO.alpha = 0;
        textCode.alpha = 0;
        picLandau.alpha = 0;
        textOutput.alpha = 0;
        textOutputLabel.alpha = 0;
        textIterator.alpha = 0;

        lineOne = contentOne.split(' ');
        game.time.events.repeat(Phaser.Timer.QUARTER * 1.5, lineOne.length, nextWordOne, this);
        game.onPause.add(pausePartOne, this);
        game.onResume.add(resumePartOne, this);

        btnnOne = game.add.button(1050, 500, 'next', nextChapterOne, this, 1, 0, 1);
    },
    update: function(){

    },
    render: function(){

    }

}

function nextWordOne() {
    if(lineOne[wordIndexOne] == 'Big'){
        game.add.tween(textO).to({alpha: 1}, 6000, "Linear", true, 0, 0, true);
    }else if(lineOne[wordIndexOne] == "Landau's"){
        game.add.tween(picLandau).to({alpha: 1}, 6000, "Linear", true, 0, 0, true);
    }else if(lineOne[wordIndexOne] == "be"){
        game.add.tween(textCode).to({alpha: 1}, 1500, "Linear", true, 0, 0, false);
        game.add.tween(textOutput).to({alpha: 1}, 1500, "Linear", true, 0, 0, false);
        game.add.tween(textOutputLabel).to({alpha: 1}, 1500, "Linear", true, 0, 0, false);
    }else if(lineOne[wordIndexOne] == "growth" ){
        game.add.tween(textIterator).to({alpha: 1}, 200, "Linear", true, 0, 0, false);
        textOutput.setText("The");
        setTimeout(function(){
            textIterator.setText("// $i =  1");
            textOutput.setText("The \n" +
                "Big")
        },1500);

        setTimeout(function(){
            textIterator.setText("// $i =  2");
            textOutput.setText("The \n" +
                "Big \n" +
                "O");

        },3000);
        setTimeout(function(){
            textIterator.setText("// $i = 3");
            textOutput.setText("The\n" +
                "Big\n" +
                "O\n" +
                "Notation");

        },4500);
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
    game.state.start('part_3', true, false,code,name);
}
