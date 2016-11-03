
/**
 * Created by Jonas on 9/14/2016.
 */

var partSix = function(game){
};


var lineFive = [];
var wordIndexFive;
var contentFive = "In this section, we will try to examine the graphs of the different orders of common functions. These graphs are important so that we can see the relationship of the number of inputs given and the time it needs to process1." +
    " In this graph, the y axis1 signifies the number of steps or the time needed to execute the algorithm. The x axis represents the number of elements in the array, or the number of inputs. When the line is drawn on the graph, the higher it is, the slower it gets. Let's try to examine the previous example a a a a a a a a a a a a a" +
    " 6n+3. You can see that the graph is a diagonal line. This signifies that o of n is linear and the time it takes to run the function is directly proportional on the number of inputs. " +
    " Now here is the general graph1 for the o of n. Just like the previous graph, it shows a diagonal line. " +
    " Next graph that we will check is the c c c c constant1 time, or o of 1. In this example, I've set that there are 5 steps, or 5 units in y, for the function. Notice that no matter how many inputs are there in the array, the y axis is constant at 5. Constant functions are represented by a straight line in a graph." +
    " The next graph we have is for the q q q q q q q quadratic1 function, or o of n squared. You can see that the line is curved and as the number of input increases, the time it executes quickly increases and doubled compared to the linear graph." +
    " We also have here the e e e e e e e e e e exponential1 graph, which is o of a constant raised to n. The number of inputs are now the exponents and in this example, I've set that the constant is 2. This graph is showing o of 2 raised to n. Notice that the exponential graph is similar to the quadratic graph but it is much slower as the number of input increases. Functions that has this complexity should be avoided if possible." +
    " Lastly, we examine the l l l l l l l logarithmic1 graphs, or o of log n. Logarithmic functions are inverses of exponential functions. If you look at the graph, it shows a curved line which leans towards x. Based on the graph alone, you can see that the logarithmic complexity is the most efficient of them all. Excluding the o of 1 of course, which varies on the number of steps required." +
    " If you are a little confused with these examples, don't worry. We will discuss these complexity functions one by one. ";


var textTitle,textDescription, partFiveMusic, textCode,graph1a, graph0, graph1, graph2, graph3, graph4, graph5, graph6, note1, note2, note3,note4,note5,note6, leg1, leg2, leg3, leg4, leg5;

partSix.prototype = {
    init: function(code, name) {
        wordIndexFive = 0;
    },
    preload: function(){
        game.load.audio('partFiveMusic', '../music/partFive.mp3');
        game.load.image('func0','../images/phaser/func0.png');
        game.load.image('func1a','../images/phaser/func1a.png');
        game.load.image('func1','../images/phaser/func1.png');
        game.load.image('func2','../images/phaser/func2.png');
        game.load.image('func3','../images/phaser/func3.png');
        game.load.image('func4','../images/phaser/func4.png');
        game.load.image('func5','../images/phaser/func5.png');
        game.load.image('func6','../images/phaser/func6.png');
        game.load.image('leg1','../images/phaser/linear.png');
        game.load.image('leg2','../images/phaser/constant.png');
        game.load.image('leg3','../images/phaser/quadratic.png');
        game.load.image('leg4','../images/phaser/exponential.png');
        game.load.image('leg5','../images/phaser/logarithmic.png');
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

        textDescription = game.add.text(140, 100, "In this section, we will try to examine the graphs of the different orders of common functions. \n" +
            "These graphs are important so that we can see the relationship of the number of inputs \n" +
            "given and the time it needs to process.",
            { font: "18px Raleway", fill: "#000000", align: 'left' });

        graph1a = game.add.sprite(160, 110, 'func1a');
        graph0 = game.add.sprite(200, 150, 'func0');
        graph1 = game.add.sprite(200, 150, 'func1');
        graph2 = game.add.sprite(200, 150, 'func2');
        graph3 = game.add.sprite(200, 150, 'func3');
        graph4 = game.add.sprite(200, 150, 'func4');
        graph5 = game.add.sprite(200, 150, 'func5');
        graph6 = game.add.sprite(200, 150, 'func6');

        leg1 = game.add.sprite(900, 150, 'leg1');
        leg2 = game.add.sprite(900, 200, 'leg2');
        leg3 = game.add.sprite(900, 250, 'leg3');
        leg4 = game.add.sprite(900, 300, 'leg4');
        leg5 = game.add.sprite(900, 350, 'leg5');

        graph0.alpha = 0;
        graph1.alpha = 0;
        graph1a.alpha = 0;
        graph2.alpha = 0;
        graph3.alpha = 0;
        graph4.alpha = 0;
        graph5.alpha = 0;
        graph6.alpha = 0;

        leg1.alpha = 0;
        leg2.alpha = 0;
        leg3.alpha = 0;
        leg4.alpha = 0;
        leg5.alpha = 0;

        note1 = game.add.text(140,100, "The y-axis is for the number of steps or time. The x-axis is for the number of elements or input. ", { font: "15px Raleway", fill: "#000000"});
        note2 = game.add.text(140,100, "The linear graph's time is directly proportional to its input. These type of functions are represented by a diagonal line.", { font: "15px Raleway", fill: "#000000"});
        note3 = game.add.text(140,100, "The time it takes to run the function is constant at 5 units. No matter how may inputs are there inside the array", { font: "15px Raleway", fill: "#000000"});
        note4 = game.add.text(140,100, "Line is now curved towards y. You can see that as the input increases, y quickly increases.", { font: "15px Raleway", fill: "#000000"});
        note5 = game.add.text(140,100, "Exponential graphs are formed by multiplying a constant, n number of times. These functions should be avoided if possible.", { font: "15px Raleway", fill: "#000000"});
        note6 = game.add.text(140,100, "Logarithmic functions are inverses of exponential functions. They are the most efficient types of functions.", { font: "15px Raleway", fill: "#000000"});

        note1.alpha = 0;
        note2.alpha = 0;
        note3.alpha = 0;
        note4.alpha = 0;
        note5.alpha = 0;
        note6.alpha = 0;

        lineFive = contentFive.split(' ');
        game.time.events.repeat(Phaser.Timer.QUARTER * 1.4, lineFive.length, nextWordFive, this);
        game.onPause.add(pausePartFive, this);
        game.onResume.add(resumePartFive, this);



        btnbFive = game.add.button(960, 500, 'back', backChapterFive, this, 0, 1, 0);
        btnnFive = game.add.button(1050, 500, 'next', nextChapterFive, this, 1, 0, 1);
    },
    update: function(){

    },
    render: function(){

    }

}

function nextWordFive() {

    console.log(lineFive[wordIndexFive]);
    if(lineFive[wordIndexFive] == 'process1.'){
        game.add.tween(textDescription).to({alpha: 0}, 1000, "Linear", true, 0, 0, false);
    }else if(lineFive[wordIndexFive] == 'axis1'){
        game.add.tween(note1).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
        game.add.tween(graph0).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
        game.add.tween(graph1a).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    }else if(lineFive[wordIndexFive] == '6n+3.'){
        game.add.tween(note1).to({alpha: 0}, 1000, "Linear", true, 0, 0, false);
        game.add.tween(note2).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
        game.add.tween(graph1).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    }else if(lineFive[wordIndexFive] == 'graph1'){
        game.add.tween(graph2).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
        game.add.tween(leg1).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    }else if(lineFive[wordIndexFive] == 'constant1'){
        game.add.tween(note2).to({alpha: 0}, 1000, "Linear", true, 0, 0, false);
        game.add.tween(note3).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
        game.add.tween(graph3).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
        game.add.tween(leg2).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    }else if(lineFive[wordIndexFive] == 'quadratic1'){
        game.add.tween(note3).to({alpha: 0}, 1000, "Linear", true, 0, 0, false);
        game.add.tween(note4).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
        game.add.tween(graph4).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
        game.add.tween(leg3).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    }else if(lineFive[wordIndexFive] == 'exponential1'){
        game.add.tween(note4).to({alpha: 0}, 1000, "Linear", true, 0, 0, false);
        game.add.tween(note5).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
        game.add.tween(graph5).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
        game.add.tween(leg4).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
    }else if(lineFive[wordIndexFive] == 'logarithmic1'){
        game.add.tween(note5).to({alpha: 0}, 1000, "Linear", true, 0, 0, false);
        game.add.tween(note6).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
        game.add.tween(graph6).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
        game.add.tween(leg5).to({alpha: 1}, 1000, "Linear", true, 0, 0, false);
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
    partFiveMusic.stop();
    game.state.start('part_5', true, false,code,name);
}

function nextChapterFive(){
    partFiveMusic.stop();
    game.state.start('part_7', true, false,code,name);
}
