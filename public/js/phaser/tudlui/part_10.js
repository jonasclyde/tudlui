/**
 * Created by Jonas on 11/2/2016.
 */

var partTen = function(game){
};


var wordIndexNine, textTitle;
var correct = false;


var textTitle, textCode,  partNineMusic, numberofsteps, textCode, textDescription, note1, note2, note3, note4, inputword, codeoutput;

partTen.prototype = {
    init: function(code, name) {
        wordIndexNine = 0;
    },
    preload: function(){
        game.load.audio('partNineMusic', '../music/partNine.mp3');
        game.load.spritesheet('run_code_7','../images/phaser/button_run_sprite.png', 193, 71);
    },
    create: function(){

        game.background = this.game.add.sprite(0,0, 'background');
        game.add.plugin(Fabrique.Plugins.InputField);

        avatar = game.add.sprite(890, 10, code);
        avatar.frame = 0;
        avatar.scale.setTo(0.4,0.4);
        nick = game.add.text(960,25, name, { font: "24px Raleway", fill: "#000000"});
        nick.fontWeight = 'bold';
        partNineMusic = game.add.audio('partNineMusic');
        partNineMusic.play();

        textTitle= game.add.text(100,40, "VII. O(n) Interactive.", { font: "27px Raleway", fill: "#000000"});

        textDescription = game.add.text(100, 100, "To understand more about O(n), let's use the code from the previous level and enter some inputs to check the growth of the function.\n",
            { font: "16px Raleway", fill: "#000000", align: 'left' });

        inputword = game.add.inputField(270, 155, {
            font: '18px Raleway',
            fill: '#212121',
            fontWeight: 'bold',
            width: 80,
            height: 20,
            padding: 10,
            borderWidth: 1,
            borderColor: '#323',
            borderRadius: 6,
            min: 1,
            max: 2,
            type: 'numeric'
        });

        textCode = game.add.text(100,160, "echo isPresent(                    , $array );\n" +
        "$array = [ 'The' , 'Big' , 'O' , 'Notation'];\n" +
        "\n" +
        "public function isPresent( $array, $value ){\n"+
        "          for ( $i = 0; $i < count( $array ); $i++){\n"+
        "               if ( $array[ $i ] == $value ) return true;\n"+
        "          }\n"+
        "          return false;\n"+
        "}", { font: "23px Raleway", fill: "#000000", fontWeight:'bold'});
        textCode.lineSpacing = 12;

        codeoutput = game.add.text(650,380, "Code Output :", { font: "24px Raleway", fill: "#000000", fontWeight: "bold"});
        numberofsteps = game.add.text(650,330, "Number of steps : 5n + 2 =    steps", { font: "24px Raleway", fill: "#000000", fontWeight: "bold"});

        note1 =  game.add.text(650,160, "* Enter a string on the input box to check if the string is present\n" +
        " in the array.",  { font: "14px Raleway", fill: "#000000", fontWeight: 'bold'});
        note2 =  game.add.text(650,210, "* The input text is case sensitive.",  { font: "14px Raleway", fill: "#000000", fontWeight: 'bold'});
        note3 =  game.add.text(650,240, "* Examine the change on the number of steps as you change the input.",  { font: "14px Raleway", fill: "#000000", fontWeight: 'bold'});
        note4 =  game.add.text(650,270, "* The running time is proportional to n or number of the elements\n" +
        " in the array being evaluated.",  { font: "14px Raleway", fill: "#000000", fontWeight: 'bold'});

        game.onPause.add(pausePartNine, this);
        game.onResume.add(resumePartNine, this);

        btnrun = game.add.button(750, 440, 'run_code_7', runCodeN, this, 1, 0, 2);


        btnbNine = game.add.button(960, 500, 'back', backChapterNine, this, 0, 1, 0);
        btnnNine = game.add.button(1050, 500, 'next', nextChapterNine, this, 1, 0, 1);
    },
    update: function(){

    },
    render: function(){

    }

}

function runCodeN(){
    if(inputword.value == 'The'){
        codeoutput.setText("Code Output : true");
        codeoutput.addColor('#00ff00', 14);
        codeoutput.addColor('#000000', 19);
        numberofsteps.setText("Number of steps : 5(1) + 2 =  7 steps");
    }else if(inputword.value == 'Big'){
        codeoutput.setText("Code Output : true");
        codeoutput.addColor('#00ff00', 14);
        codeoutput.addColor('#000000', 19);
        numberofsteps.setText("Number of steps : 5(2) + 2 =  12 steps");
    }else if(inputword.value == 'O'){
        codeoutput.setText("Code Output : true");
        codeoutput.addColor('#00ff00', 14);
        codeoutput.addColor('#000000', 19);
        numberofsteps.setText("Number of steps : 5(3) + 2 =  17 steps");
    }else if(inputword.value == 'Notation'){
        codeoutput.setText("Code Output : true");
        codeoutput.addColor('#00ff00', 14);
        codeoutput.addColor('#000000', 19);
        numberofsteps.setText("Number of steps : 5(4) + 2 =  22 steps");
    }else{
        codeoutput.setText("Code Output : false");
        codeoutput.addColor('#ff0000', 14);
        codeoutput.addColor('#000000', 19);
        numberofsteps.setText("Number of steps : 5(4) + 2 =  22 steps");
    }
}

function pausePartNine() {
    partNineMusic.pause();
}

function resumePartNine() {
    partNineMusic.resume();
}

function backChapterNine(){
    partNineMusic.stop();
    game.state.start('part_9', true, false,code,name);
}

function nextChapterNine(){
        partNineMusic.stop();
        game.state.start('quiz', true, false,code,name);
}
