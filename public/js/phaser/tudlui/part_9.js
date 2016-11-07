/**
 * Created by JONAS on 11/7/2016.
 */

/**
 * Created by Jonas on 9/14/2016.
 */

var partNine = function(game){
};


var lineEight = [];
var wordIndexEight;
var contentEight = "The notation, o of n describes an algorithm whose performance will grow linearly and directly proportional to the number of inputs. To simplify, the number of code execution will depend on the number of input elements. Let's try to examine this code. " +
    "a a a a a a a a a a a a a This1 function checks if the value1 given, is inside the a array1. " +
    "If the given value is present in the array, it will return a true1, and if it is not, it will return a false1. " +
    "In order for1 the function to check if the value is in the array2, it will need to access the entries of the array and check one by one starting1 from index 0 and ending right before the value of the size of the array which is 3." +
    " In this1 example. In this example, string a a a a a o1 was found during the 3rd1 iteration or index 2. This means that the for loop was executed 3 " +
    "times. You can see that the code stopped1 earlier than expected, but big o2 notation will always assume the upper limit where " +
    "the algorithm will perform the maximum number of iterations which is the number of elements inside the array. " +
    " a a a a This3 is the o of n complexity. You can also imagine1, that if the array has 1000 elements1 and o is found on the last part of the array, " +
    "then the inner code is ran 1000 times. ";


var textTitle,textDescription, partEightMusic, textCode, note1, note2, note3, note4, note5, note6;

partNine.prototype = {
    init: function(code, name) {
        wordIndexEight = 0;
    },
    preload: function(){
        game.load.audio('partEightMusic', '../music/partEight.mp3');
    },
    create: function(){

        game.background = this.game.add.sprite(0,0, 'background');

        avatar = game.add.sprite(890, 10, code);
        avatar.frame = 0;
        avatar.scale.setTo(0.4,0.4);
        nick = game.add.text(960,25, name, { font: "24px Raleway", fill: "#000000"});
        nick.fontWeight = 'bold';
        partEightMusic = game.add.audio('partEightMusic');
        partEightMusic.play();

        textTitle= game.add.text(100,40, "VI. O(n) Linear Time.", { font: "27px Raleway", fill: "#000000"});

        textDescription = game.add.text(140, 100, "The notation O(n) describes an algorithm whose performance will grow linearly and directly proportional to the number\n" +
            "of inputs. To simplify, the number of code execution will depend on the number of input elements. Let's try to examine this code.",
            { font: "16px Raleway", fill: "#000000", align: 'left' });


        textCode = game.add.text(130,200, "$array = [ 'The' , 'Big' , 'O' , 'Notation'];\n" +
        "$value = 'O';\n"+ //57
        "public function isPresent( $array , $value ){\n"+ //102
        "      for($i = 0; $i < count($array); $i++){\n"+  //146
        "         if ( $array[$i] == $value ) return true;\n"+ //196
        "      }\n"+ //206
        "      return false;\n"+ //226
        "}", { font: "23px Raleway", fill: "#000000", fontWeight:'bold'});
        textCode.lineSpacing = 13;

        note1 =  game.add.text(650,200, "* This function returns 'true' if the value given is present inside the array.",  { font: "14px Raleway", fill: "#000000", fontWeight: 'bold'});
        note2 =  game.add.text(650,235, "* Number of steps varies on the number of elements inside the array.",  { font: "14px Raleway", fill: "#000000", fontWeight: 'bold'});
        note3 =  game.add.text(650,270, "* In this example, the for loop was repeated 3 times.",  { font: "14px Raleway", fill: "#000000", fontWeight: 'bold'});
        note4 =  game.add.text(650,305, "* We only consider the worst case running time which is the size of\n" +
        " the whole array or the number elements inside the array (n).",  { font: "14px Raleway", fill: "#000000", fontWeight: 'bold'});
        note5 =  game.add.text(650,360, "* This is an example of O(n) where n is the number of elements in the array.",  { font: "14px Raleway", fill: "#000000", fontWeight: 'bold'});
        note6 =  game.add.text(650,395, "* Imagine if the array has 1000 elements and 'O' is at the last element\n" +
        " of the array, the for loop or inner code is ran 1000 times.",  { font: "14px Raleway", fill: "#000000", fontWeight: 'bold'});

        lineEight = contentEight.split(' ');
        game.time.events.repeat(Phaser.Timer.QUARTER * 1.4, lineEight.length, nextWordEight, this);
        game.onPause.add(pausePartEight, this);
        game.onResume.add(resumePartEight, this);

        note1.alpha = 0;
        note2.alpha = 0;
        note3.alpha = 0;
        note4.alpha = 0;
        note5.alpha = 0;
        note6.alpha = 0;

        btnbEight = game.add.button(960, 500, 'back', backChapterEight, this, 0, 1, 0);
        btnnEight = game.add.button(1050, 500, 'next', nextChapterEight, this, 1, 0, 1);
    },
    update: function(){

    },
    render: function(){

    }

}

function nextWordEight() {

    console.log(lineEight[wordIndexEight]);
    if(lineEight[wordIndexEight] == 'This1'){
        game.add.tween(note1).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    }else if(lineEight[wordIndexEight] == 'value1'){
        textCode.addColor('#0000FF', 54);
        textCode.addColor('#000000', 57);
    }else if(lineEight[wordIndexEight] == 'array1.'){
        textCode.addColor('#FF0000', 9);
        textCode.addColor('#000000', 44);
    }else if(lineEight[wordIndexEight] == 'true1,'){
        textCode.addColor('#00FF00', 191);
        textCode.addColor('#000000', 195);
    }else if(lineEight[wordIndexEight] == 'false1.'){
        textCode.addColor('#ff0000', 216);
        textCode.addColor('#000000', 221);
    }else if(lineEight[wordIndexEight] == 'for1'){

        textCode.addColor('#000000', 54);
        textCode.addColor('#000000', 57);

        textCode.addColor('#000000', 9);
        textCode.addColor('#000000', 44);

        textCode.addColor('#000000', 191);
        textCode.addColor('#000000', 195);

        textCode.addColor('#000000', 216);
        textCode.addColor('#000000', 221);
    }else if(lineEight[wordIndexEight] == 'array2,'){
        game.add.tween(note2).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    }else if(lineEight[wordIndexEight] == 'starting1'){
        textCode.addColor('#FF0000', 11);
        textCode.addColor('#000000', 16);
        setTimeout(function(){
            textCode.addColor('#000000', 11);
            textCode.addColor('#000000', 16);

            textCode.addColor('#FF0000', 19);
            textCode.addColor('#000000', 24);
        },1000);
        setTimeout(function(){
            textCode.addColor('#000000', 19);
            textCode.addColor('#000000', 24);

            textCode.addColor('#FF0000', 27);
            textCode.addColor('#000000', 30);
        },2000);
        setTimeout(function(){
            textCode.addColor('#000000', 27);
            textCode.addColor('#000000', 30);

            textCode.addColor('#FF0000', 33);
            textCode.addColor('#000000', 43);
        },3000);
        setTimeout(function(){
            textCode.addColor('#000000', 33);
            textCode.addColor('#000000', 43);
        },4000);
    }else if(lineEight[wordIndexEight] == 'this1'){
        textCode.addColor('#0000FF', 103);
        textCode.addColor('#000000', 191);

        textCode.addColor('#0000FF', 191);
        textCode.addColor('#000000', 195);

        textCode.addColor('#0000FF', 195);
        textCode.addColor('#000000', 206);
    }else if(lineEight[wordIndexEight] == 'o1'){
        textCode.addColor('#0000FF', 54);
        textCode.addColor('#000000', 57);
    }else if(lineEight[wordIndexEight] == '3rd1'){
        game.add.tween(note3).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
        textCode.addColor('#FF0000', 11);
        textCode.addColor('#000000', 16);
        setTimeout(function(){
            textCode.addColor('#000000', 11);
            textCode.addColor('#000000', 16);

            textCode.addColor('#FF0000', 19);
            textCode.addColor('#000000', 24);
        },1000);
        setTimeout(function(){
            textCode.addColor('#000000', 19);
            textCode.addColor('#000000', 24);

            textCode.addColor('#FF0000', 27);
            textCode.addColor('#000000', 30);
        },2000);
    }else if(lineEight[wordIndexEight] == 'stopped1'){
        textCode.addColor('#000000', 27);
        textCode.addColor('#000000', 30);

        textCode.addColor('#000000', 54);
        textCode.addColor('#000000', 57);

        textCode.addColor('#000000', 103);
        textCode.addColor('#000000', 191);

        textCode.addColor('#000000', 191);
        textCode.addColor('#000000', 195);

        textCode.addColor('#000000', 195);
        textCode.addColor('#000000', 206);
    }else if(lineEight[wordIndexEight] == 'o2'){
        game.add.tween(note4).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    }else if(lineEight[wordIndexEight] == 'This3'){
        game.add.tween(note5).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    }else if(lineEight[wordIndexEight] == 'elements1'){
        game.add.tween(note6).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    }


    wordIndexEight++;
    //  Last word?
    if (wordIndexEight === lineEight.length)
    {
        return;
    }
}

function pausePartEight() {
    partEightMusic.pause();
}

function resumePartEight() {
    partEightMusic.resume();
}

function backChapterEight(){
    partEightMusic.stop();
    game.state.start('part_8', true, false,code,name);
}

function nextChapterEight(){
    partEightMusic.stop();
    game.state.start('part_10', true, false,code,name);
}
