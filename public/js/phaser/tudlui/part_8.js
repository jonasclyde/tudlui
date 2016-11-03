/**
 * Created by Jonas on 11/2/2016.
 */

var partEight = function(game){
};


var wordIndexSeven, textTitle;
var correct = false;


var textTitle, textCode,  partSevenMusic, numberofsteps, textCode, textDescription, note1, note2, note3, inputindex, codeoutput, correctoutput, incorrectinput;

partEight.prototype = {
    init: function(code, name) {
        wordIndexSeven = 0;
    },
    preload: function(){
        game.load.audio('partSevenMusic', '../music/partSeven.mp3');
        game.load.spritesheet('run_code_7','../images/phaser/button_run_sprite.png', 193, 71);
    },
    create: function(){

        game.background = this.game.add.sprite(0,0, 'background');

        avatar = game.add.sprite(890, 10, code);
        avatar.frame = 0;
        avatar.scale.setTo(0.4,0.4);
        nick = game.add.text(960,25, name, { font: "24px Raleway", fill: "#000000"});
        nick.fontWeight = 'bold';
        partSevenMusic = game.add.audio('partSevenMusic');
        partSevenMusic.play();

        textTitle= game.add.text(100,40, "VII. O(1) Interactive.", { font: "27px Raleway", fill: "#000000"});

        textDescription = game.add.text(100, 100, "Here is another example of a function (printItem) with a constant complexity. No matter how many elements are in the array,\n" +
            "this function will only execute 2 steps.",
            { font: "16px Raleway", fill: "#000000", align: 'left' });

        inputindex = game.add.inputField(300, 170, {
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

        textCode = game.add.text(130,180, "echo printItem(         ,$array);\n" +
        "\n" +
        "$array = [ 'The' , 'Big' , 'O' , 'Notation'];\n" +
        "\n" +
        "public function printItem( $i , $array ){\n"+
        "          return $array[ $i ]; \n"+
        "}", { font: "23px Raleway", fill: "#000000", fontWeight:'bold'});
        textCode.lineSpacing = 13;

        codeoutput = game.add.text(650,300, "Code Output :", { font: "24px Raleway", fill: "#000000", fontWeight: "bold"});
        numberofsteps = game.add.text(650,350, "Number of steps : 2", { font: "24px Raleway", fill: "#000000", fontWeight: "bold"});
        correctoutput =  game.add.text(820,300, "", { font: "24px Raleway", fill: "#00FF00", fontWeight: "bold"});
        incorrectinput =  game.add.text(820,300, "Line 4 is undefined.", { font: "24px Raleway", fill: "#FF0000", fontWeight: "bold"});

        correctoutput.alpha = 0;
        incorrectinput.alpha = 0;

        numberofsteps.addColor('#ffffff', 18);
        numberofsteps.addColor('#000000', 19);

        note1 =  game.add.text(650,180, "* This function returns the value at the given index.",  { font: "14px Raleway", fill: "#000000", fontWeight: 'bold'});
        note2 =  game.add.text(650,210, "* There are only 2 steps which is array access and returning the value",  { font: "14px Raleway", fill: "#000000", fontWeight: 'bold'});
        note3 =  game.add.text(650,240, "* Edit the input value to test and click on the 'Run Code' button.",  { font: "14px Raleway", fill: "#000000", fontWeight: 'bold'});

        game.onPause.add(pausePartSeven, this);
        game.onResume.add(resumePartSeven, this);

        btnrun = game.add.button(750, 420, 'run_code_7', runCode, this, 1, 0, 2);


        btnbSeven = game.add.button(960, 500, 'back', backChapterSeven, this, 0, 1, 0);
        btnnSeven = game.add.button(1050, 500, 'next', nextChapterSeven, this, 1, 0, 1);
    },
    update: function(){

    },
    render: function(){

    }

}

function runCode(){
    if(inputindex.value == '0'){
        correctoutput.alpha = 1;
        incorrectinput.alpha = 0;
        correctoutput.setText("The");
        numberofsteps.addColor('#000000', 18);
        numberofsteps.addColor('#000000', 19);
    }else if(inputindex.value == '1'){
        correctoutput.alpha = 1;
        incorrectinput.alpha = 0;
        correctoutput.setText("Big");
        numberofsteps.addColor('#000000', 18);
        numberofsteps.addColor('#000000', 19);
    }else if(inputindex.value == '2'){
        correctoutput.alpha = 1;
        incorrectinput.alpha = 0;
        correctoutput.setText("O");
        numberofsteps.addColor('#000000', 18);
        numberofsteps.addColor('#000000', 19);
    }else if(inputindex.value == '3'){
        correctoutput.alpha = 1;
        incorrectinput.alpha = 0;
        numberofsteps.addColor('#000000', 18);
        numberofsteps.addColor('#000000', 19);
        correctoutput.setText("Notation");
    }else{
        correctoutput.alpha = 0;
        incorrectinput.alpha = 1;
        numberofsteps.addColor('#000000', 18);
        numberofsteps.addColor('#000000', 19);
    }
}

function pausePartSeven() {
    partSevenMusic.pause();
}

function resumePartSeven() {
    partSevenMusic.resume();
}

function backChapterSeven(){
    partSevenMusic.stop();
    game.state.start('part_4', true, false,code,name);
}

function nextChapterSeven(){
    if(correct){
        partSevenMusic.stop();
        game.state.start('part_6', true, false,code,name);
    }
}
