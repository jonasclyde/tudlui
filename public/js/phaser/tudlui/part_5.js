/**
 * Created by Jonas on 11/2/2016.
 */

/**
 * Created by Jonas on 9/14/2016.
 */

var partFive = function(game){
};


var lineFour = [];
var wordIndexFour, textTitle, textDescription;
var contentFour =  "";


var textTitle, partFourMusic, textCode;

partFive.prototype = {
    init: function(code, name) {
        wordIndexFour = 0;
    },
    preload: function(){
        game.load.audio('partFourMusic', '../music/partFour.mp3');
    },
    create: function(){

        game.background = this.game.add.sprite(0,0, 'background');


        avatar = game.add.sprite(890, 10, code);
        avatar.frame = 0;
        avatar.scale.setTo(0.4,0.4);
        nick = game.add.text(960,25, name, { font: "24px Raleway", fill: "#000000"});
        nick.fontWeight = 'bold';
        partFourMusic = game.add.audio('partFourMusic');
        partFourMusic.play();

        textTitle= game.add.text(100,40, "IV. Counting Exercise.", { font: "27px Raleway", fill: "#000000"});

        textDescription = game.add.text(100, 100, "y to fill up the number of steps outside and inside the loop. If you get the correct answer, proceed to the nex page.",
            { font: "18px Raleway", fill: "#000000", align: 'left' });

        textCode = game.add.text(380,120, "public function isPresent( $array , $value ){\n"+
            "\n"+
            "      for ( $i = 0 ; $i < count( $array ) ; $i++ ){\n"+
            "          if ( $array[i] == $value ) return true; \n"+
            "      }\n"+
            "      return false;\n"+
            "}", { font: "23px Raleway", fill: "#000000", fontWeight:'bold'});
        textCode.lineSpacing = 13;

        note1 = game.add.text(50,120, "* This function checks if value exists \n" +
            " inside the array.", { font: "14px Raleway", fill: "#000000"});
        note2 = game.add.text(50,190, "* Count the steps outside and inside the loop.", { font: "14px Raleway", fill: "#000000"});
        note4 = game.add.text(50,435, "* For big O, we will not consider the\n" +
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

        lineFour = contentFour.split(' ');
        game.time.events.repeat(Phaser.Timer.QUARTER * 1.4, lineFour.length, nextWordFour, this);
        game.onPause.add(pausePartFour, this);
        game.onResume.add(resumePartFour, this);



        btnbFour = game.add.button(960, 500, 'back', backChapterFour, this, 0, 1, 0);
        btnnFour = game.add.button(1050, 500, 'next', nextChapterFour, this, 1, 0, 1);
    },
    update: function(){

    },
    render: function(){

    }

}

function nextWordFour() {

    console.log(lineFour[wordIndexFour]);
    if(lineFour[wordIndexFour] == 'example,'){
        game.add.tween(textDescription).to({alpha: 0}, 1000, "Linear", true, 0, 0, false);
        game.add.tween(note1).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
        game.add.tween(textCode).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    }

    wordIndexFour++;
    //  Last word?
    if (wordIndexFour === lineFour.length)
    {
        return;
    }
}

function pausePartFour() {
    partFourMusic.pause();
}

function resumePartFour() {
    partFourMusic.resume();
}

function backChapterFour(){
    game.state.start('part_4', true, false,code,name);
}

function nextChapterFour(){
    game.state.start('part_6', true, false,code,name);
}
