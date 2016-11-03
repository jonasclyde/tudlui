/**
 * Created by Jonas on 11/2/2016.
 */

/**
 * Created by Jonas on 9/14/2016.
 */

var partFive = function(game){
};


var wordIndexFour, textTitle, textDescription, codeoutput, btnrun, inputoutside, inputinside, line1correct, line1incorrect, line2correct, line2incorrect;
var correct = false;


var textTitle, partFourMusic, textCode;

partFive.prototype = {
    init: function(code, name) {
        wordIndexFour = 0;
    },
    preload: function(){
        game.load.audio('partFourMusic', '../music/partFour.mp3');
        game.load.spritesheet('run_code','../images/phaser/button_run_sprite.png', 193, 71);
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

        textDescription = game.add.text(100, 100, "Try to fill up the number of steps outside and inside the loop. If you get the correct answer, proceed to the next page.",
            { font: "16px Raleway", fill: "#000000", align: 'left' });

        inputinside = game.add.inputField(210, 140, {
            font: '18px Raleway',
            fill: '#212121',
            fontWeight: 'bold',
            width: 20,
            height: 20,
            padding: 10,
            borderWidth: 1,
            borderColor: '#323',
            borderRadius: 6,
            min: 1,
            max: 2,
            type: 'numeric'
        });

        inputoutside = game.add.inputField(210, 190, {
            font: '18px Raleway',
            fill: '#212121',
            fontWeight: 'bold',
            width: 20,
            height: 20,
            padding: 10,
            borderWidth: 1,
            borderColor: '#323',
            borderRadius: 6,
            min: '1',
            max: '2',
            type: 'numeric'
        });

        textCode = game.add.text(130, 150, "echo  '          steps inside the loop' ;\n" +
        "echo  '          steps outside the loop' ;\n" +
        "\n" +
        "public function isPresent( $array , $value ){\n"+
            "      for ( $i = 0 ; $i < count( $array ) ; $i++ ){\n"+
            "          if ( $array[ $i ] == $value ) return true; \n"+
            "      }\n"+
            "      return false;\n"+
            "}", { font: "23px Raleway", fill: "#000000", fontWeight:'bold'});
        textCode.lineSpacing = 12.5;

        btnrun = game.add.button(790, 400, 'run_code', runeCode, this, 1, 0, 2);

        codeoutput = game.add.text(810,150, "Code Output", { font: "24px Raleway", fill: "#000000", fontWeight: "bold"});
        line1correct  =  game.add.text(750,230, "6 steps inside the loop", { font: "24px Raleway", fill: "#00FF00", fontWeight: "bold"});
        line1incorrect  =  game.add.text(750,230, "Line 1 code is incorrect.", { font: "24px Raleway", fill: "#FF0000", fontWeight: "bold"});
        line2correct  =  game.add.text(750,310, "2 steps outside the loop", { font: "24px Raleway", fill: "#00FF00", fontWeight: "bold"});
        line2incorrect  =  game.add.text(750,310, "Line 2 code is incorrect.", { font: "24px Raleway", fill: "#FF0000", fontWeight: "bold"});

        line1correct.alpha = 0;
        line1incorrect.alpha = 0;
        line2correct.alpha = 0;
        line2incorrect.alpha = 0;

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

function runeCode(){

    if(inputinside.value == '6'){
        line1correct.alpha = 1;
        line1incorrect.alpha = 0;
    }else{
        line1incorrect.alpha = 1;
        line1correct.alpha = 0;
    }

    if(inputoutside.value == '2'){
        line2correct.alpha = 1;
        line2incorrect.alpha = 0;
    }else{
        line2correct.alpha = 0;
        line2incorrect.alpha = 1;
    }

    if(inputinside.value == 6 && inputoutside.value == 2){
        correct = true;
    }
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
