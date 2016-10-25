/**
 * Created by Jonas on 9/14/2016.
 */

var partTwo = function(game){
};


//var lineTwo = [],
var barsTwo=[];
var levelTwo = 2;
var wordIndexTwo = 0;
var avatar, nick, loading, barTwo, btnnTwo, btnbTwo, textO, descriptionO, countTwo, textCode, textCount, partTwoMusic, lineTwo;
var contentTwo =
        "The marker0 big O of an algorithm is represented by O of N. It is a function, O, of the time an algorithm takes to run or the running time which is represented by n." +
        " We use the Big O notation to express how quickly the algorithm's runtime grows given the number of marker4 input. " +
        " To find the marker1 big O of an algorithm we will need to determine how long it takes to run the function based on the number of inputs. " +
        " Given an array of marker2 inputs with size marker3 n, we will need to count how many processes it executes for each element of the array.  Don't worry an example will be given in the next level.";


partTwo.prototype = {
    init: function(code, name, bar) {
        if(bar <= levelTwo){
            barTwo = bar + 1;
        }

    },
    preload: function(){
        game.load.audio('partTwoMusic', '../music/partTwo.mp3');
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
        partTwoMusic = game.add.audio('partTwoMusic');
        partTwoMusic.play();

        textTitle= game.add.text(250,30, "III. Why Big O and How?", { font: "27px Raleway", fill: "#000000"});

        textO = game.add.text(250, 100, "O( n )", { font: "80px Raleway", fill: "#000000"});

        descriptionO = game.add.text(470, 110, "The big O of an algorithm is represented by O(n) - pronounced 'Oh of en'.\n" +
        "It's a function, O, of the time an algorithm takes to run or the running time,\n" +
            "which is represented by N."
            , { font: "16px Raleway", fill: "#000000"});
        descriptionO.addFontWeight('bold', 43);
        descriptionO.addFontWeight('normal', 48);

        descriptionO.addFontWeight('bold',90);
        descriptionO.addFontWeight('normal',91);

        descriptionO.addFontWeight('bold',175);
        descriptionO.addFontWeight('normal',176);

        textCount = game.add.text(280, 300,"COUNT :", { font: "24px Raleway", fill: "#0000FF", fontWeight: "bold"});

        textCode = game.add.text(550,230, "$array = [ 'The' , 'Big' , 'O' , 'Notation'];\n" +
        "\n"+
        "public function addContents( $array ){\n"+
        "    for ( $i = 0 ; i < count( $array ) ; $i++ ){\n"+
        "        echo $array[ $i ].'<br>';\n"+
        "    }\n"+
        "}", { font: "23px Raleway", fill: "#000000", fontWeight:'bold'});

        countTwo = game.add.text(250, 500,"To find the big O of an algorithm, we " +
        "will need to determine how long it takes " +
        "to run the function based on the\nnumber" +
        " of inputs.", { font: "16px Raleway", fill: "#000000"});

        textCount.alpha = 0;
        textCode.alpha = 0;
        countTwo.alpha = 0;
        descriptionO.alpha =0;

        lineTwo = contentTwo.split(' ');
        game.time.events.repeat(Phaser.Timer.QUARTER * 1.5, lineTwo.length, nextWordTwo, this);
        game.onPause.add(pausePartTwo, this);
        game.onResume.add(resumePartTwo, this);

        btnbTwo = game.add.button(960, 540, 'back', backChapterTwo, this, 0, 1, 0);
        btnnTwo = game.add.button(1050, 540, 'next', nextChapterTwo, this, 1, 0, 1);
    },
    update: function(){

    },
    render: function(){

    }

}

function nextWordTwo() {
    if(lineTwo[wordIndexTwo] == 'marker4'){
        partTwoMusic.pause();
    }else if(lineTwo[wordIndexTwo] == "marker1"){
        partTwoMusic.resume();
        game.add.tween(countTwo).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    }else if(lineTwo[wordIndexTwo] == "inputs."){
        game.add.tween(textCount).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
        game.add.tween(textCode).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    }else if(lineTwo[wordIndexTwo] == "marker2"){
        textCode.addColor('#ff0000', 9);
        textCode.addColor('#000000', 44);
    } else if(lineTwo[wordIndexTwo] == "marker3"){
        textCode.addColor('#000000', 9);
        setTimeout(function(){
            textCode.addColor('#ff0000', 11);
            textCode.addColor('#000000', 16);
        }, 1000);
        setTimeout(function(){
            textCode.addColor('#ff0000', 93);
            textCode.addColor('#000000', 99);
            textCount.setText("COUNT : 1");
        }, 2000);
        setTimeout(function(){
            textCode.addColor('#000000', 93);
            textCode.addColor('#ff0000', 106);
            textCode.addColor('#000000', 121);
            textCount.setText("COUNT : 2");
        }, 3500);
        setTimeout(function(){
            textCode.addColor('#ff0000', 102);
            textCode.addColor('#000000', 121);
            textCount.setText("COUNT : 3");
        }, 5000);
        setTimeout(function(){
            textCode.addColor('#000000', 102);
            textCode.addColor('#000000', 106);
            textCode.addColor('#ff0000', 135);
            textCode.addColor('#000000', 163);
            textCount.setText("COUNT : 4");
        }, 6500);
        setTimeout(function(){
            textCode.addColor('#000000', 135);
            textCode.addColor('#ff0000', 124);
            textCode.addColor('#000000', 128);
            textCount.setText("COUNT : 5");
        }, 8000);
    }else if(lineTwo[wordIndexTwo] == "marker0"){
        game.add.tween(descriptionO).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    }

    wordIndexTwo++;
    //  Last word?
    if (wordIndexTwo === lineTwo.length)
    {
        return;
    }
}

function pausePartTwo() {
    partTwoMusic.pause();
}

function resumePartTwo() {
    partTwoMusic.resume();
}

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
