/**
 * Created by Jonas on 9/14/2016.
 */

var partSeven = function(game){
};


var lineSeven = [];
var barsSeven=[];
var levelSeven = 7;
wordIndexSeven= 0;
var avatar,nick,loading, barSeven, btnnSeven, btnbSeven, textCode, textOutput, textDescription, textTitle, partSevenMusic, textIterator, input_number, textOutput2;
var contentSeven =
        "Here is another example of a function with a constant complexity. No matter how many elements are in the array, the number of steps is constant. " +
        "This function simply returns a value inside of the array at the given index if it exists. " +
        "There are 4 steps inside the function, 2 are for validation, 1 for array access and 1 for return value. " +
        "Try to enter a number from 0-3 and you will see that the output has change but the number of steps is still the same.";


partSeven.prototype = {
    init: function(code, name, bar) {
        if(bar <= levelSeven){
            barSeven = bar + 1;
        }

    },
    preload: function(){
        game.load.audio('partSeven', '../music/partSeven.mp3');
    },
    create: function(){

        game.background = this.game.add.sprite(0,0, 'background');

        loading = game.add.sprite(8, 80, 'loading');
        setBarSeven();
        avatar = game.add.sprite(20, 10, code);
        avatar.frame = 0;
        avatar.scale.setTo(0.4,0.4);
        nick = game.add.text(90,25, name, { font: "24px Raleway", fill: "#000000"});
        nick.fontWeight = 'bold';
        partSevenMusic = game.add.audio('partSeven');
        partSevenMusic.play();

        textTitle= game.add.text(250,30, "II. More O(1) Constant Time", { font: "27px Raleway", fill: "#000000"});
        textDescription = game.add.text(250, 100, "Here is another example of a function (printItem with a constant complexity. \n" +
            "No matter how many elements are in the array, the number of steps is constant). ",
            { font: "18px Raleway", fill: "#000000", align: 'left' });
        textDescription.lineSpacing = 13;

        //textDescription = game.add.text(250, 100, "Here is another example of a function (printItem with a constant complexity. \n"
        //    ,{ font: "16px Raleway", fill: "#000000", align: 'left' });
        //

        textCode = game.add.text(250,300, "$array = ['The', 'Big', 'O', 'Notation'];\n" +
            "\n"+
            "public function printItem($i, $array){\n"+
            "     if($i >= 0 && $i < 4) return $array[$i];\n"+
            "}\n" +
            "\n" +
            "echo printItem('           ',$array);", { font: "22px Raleway", fill: "#000000"});

        input_number = game.add.inputField(410, 480, {
            font: '18px Raleway',
            fill: '#212121',
            fontWeight: 'bold',
            width: 30,
            height: 20,
            padding: 10,
            borderWidth:.5,
            borderColor: '#000',
            max: 1,
            type: 'numeric',
            borderRadius: 6,
            zoom: true
        });


        textOutput = game.add.text(680,300, "Output", { font: "22px Raleway", fill: "#000000", fontWeight: "bold"});
        textOutput2 = game.add.text(680,400, "Number of Steps", { font: "22px Raleway", fill: "#000000", fontWeight: "bold"});

        textCode.alpha = 1;
        textOutput.alpha = 1;

        lineSeven = contentSeven.split(' ');
        game.time.events.repeat(Phaser.Timer.QUARTER * 1.5, lineSeven.length, nextWordSeven, this);
        game.onPause.add(pausePartSeven, this);
        game.onResume.add(resumePartSeven, this);

        btnbSeven = game.add.button(960, 540, 'back', backChapterSeven, this, 0, 1, 0);
        btnnSeven = game.add.button(1050, 540, 'next', nextChapterSeven, this, 1, 0, 1);
    },
    update: function(){

    },
    render: function(){

    }

}

function nextWordSeven() {
    if(lineSeven[wordIndexSeven] == 'Big'){
        game.add.tween(textO).to({alpha: 1}, 6000, "Linear", true, 0, 0, true);
    }

    wordIndexSeven++;
    //  Last word?
    if (wordIndexSeven === lineSeven.length)
    {
        return;
    }
}

function pausePartSeven() {
    partSevenMusic.pause();
}

function resumePartSeven() {
    partSevenMusic.resume();
}

function setBarSeven(){
    i = 0;
    h = 24;
    if(bar > levelSeven){
        while(i < bar){
            barsSeven[i] = game.add.sprite(32, 514 - (h * i), 'bar');
            i++;
        }
    }else{
        while(i < levelSeven){
            barsSeven[i] = game.add.sprite(32, 514 - (h * i), 'bar');
            i++;
        }
    }

}
function backChapterSeven(){
    game.state.start('part_6', true, false,code,name, bar);
}

function nextChapterSeven(){
    game.state.start('part_8', true, false,code,name, barSeven);
}
