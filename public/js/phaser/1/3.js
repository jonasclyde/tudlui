/**
 * Created by Jonas on 9/14/2016.
 */

var partOne = function(game){
};

var levelOne = 1;
var lineOne = [];
var contentOne =
    "In Computer Science, the Big O notation is used to calculate the performance or the complexity of an algorithm. " +
    "It is a way to measure the speed and how well an algorithm scales as the amount of input increases. " +
    "In other words, the notation is only concerned on the worst possible outcome of an algorithm. In this example, you can see that code A is set to have 10 inputs. This means " +
    "that the code will be executed 10 times. Think what will happen if we change the input to 1000.";

var titleOne;
var textOne, codeOne, codeTwo, Output, OutputAnother, labelOne, LabelTwo;
var loading, partOneMusic, nick, avatar, btnnOne;
var text;
var wordIndexOne= 0;
var barOne;
var barsOne=[];


partOne.prototype = {
    init: function(code, name, bar) {
        if(bar <= levelOne){
            barOne = bar + 1;
        }

    },
    preload: function(){
        game.load.audio('partOne', '../music/partOne.mp3');
    },
    create: function(){
        game.background = this.game.add.sprite(0,0, 'background');
        loading = game.add.sprite(8, 80, 'loading');
        setBarOne();
        avatar = game.add.sprite(20, 10, code);
        avatar.frame = 0;
        avatar.scale.setTo(0.4,0.4);
        nick = game.add.text(90,25, name, { font: "24px Raleway", fill: "#000000"});
        nick.fontWeight = 'bold';
        partOneMusic = game.add.audio('partOne');
        partOneMusic.play();

        titleOne= game.add.text(200,30, "So why is this called big O?", { font: "30px Raleway", fill: "#000000"})
        textOne = game.add.text(200, 100, 'In Computer Science, the Big O notation is used to calculate the performance or the complexity of an\n' +
            'algorithm. It is a way to measure the speed and how well an algorithm scales as the amount of input\n' +
            'increases. In other words, the notation is only concerned on the worst possible outcome of an algorithm.\n'+
            'Example: The efficiency of the code when dealing 10 inputs vs 10000 inputs. ', { font: "18px Raleway", fill: "#000000", align: 'left' });
        textOne.lineSpacing = 13;

        codeOne =  game.add.text(250, 300, 'var input = 10', { font: "24px Raleway", fill: "#000000", align: "left", fontWeight: "bold"});
        codeTwo =  game.add.text(250, 350, 'for(i=0; i< input; i++){\n' +
            'do Something...\n' +
            'console.log("Hello World!")\n' +
            '}', { font: "24px Raleway", fill: "#000000", align: "left", fontWeight: "bold"});
        labelOne = game.add.text(250, 500, 'will be executed 10 times', { font: "24px Raleway", fill: "#FF0000", align: "left", fontWeight: "italic"});
        labelOne.alpha = 0;
        Output = game.add.text(650, 300, 'Output:',{ font: "24px Raleway", fill: "#000000", align: "left", fontWeight: "bold"});
        OutputAnother = game.add.text(650, 300, '\n' +
            'Hello World!       Hello World!\n' +
            'Hello World!       Hello World!\n' +
            'Hello World!       Hello World!\n' +
            'Hello World!       Hello World!\n' +
            'Hello World!       Hello World!\n', { font: "24px Raleway", fill: "#000000", align: "left", fontWeight: "bold"});
        OutputAnother.alpha = 0;
        lineOne = contentOne.split(' ');
        game.time.events.repeat(Phaser.Timer.QUARTER * 1.4, lineOne.length, nextWordOne, this);
        game.onPause.add(pausePartOne, this);
        game.onResume.add(resumePartOne, this);

        btnnOne = game.add.button(1050, 540, 'next', nextChapterOne, this, 1, 0, 1);
    },
    update: function(){

    },
    render: function(){

    }

}

function pausePartOne() {
    partOneMusic.pause();
}

function resumePartOne() {
    partOneMusic.resume();
}

function setBarOne(){
    i = 0;
    h = 24;
    if(bar > levelOne){
        while(i < bar){
            barsOne[i] = game.add.sprite(32, 514 - (h * i), 'bar');
            i++;
        }
    }else{
        while(i < levelOne){
            barsOne[i] = game.add.sprite(32, 514 - (h * i), 'bar');
            i++;
        }
    }

}

function nextWordOne() {
    if(lineOne[wordIndexOne] == 'inputs.'){
        game.add.tween(codeOne.scale).to({x: 1.3, y: 1.3}, 800, Phaser.Easing.Linear.None, true, 0, 0, true);
    }else if(lineOne[wordIndexOne] == 'executed'){
        game.add.tween(labelOne).to({alpha: 1}, 1500, "Linear", true, 0, 0, false);
        game.add.tween(OutputAnother).to({alpha: 1}, 1500, "Linear", true, 0, 0, false);
    }else if(lineOne[wordIndexOne] == '1000'){

    }

    wordIndexOne++;
    //  Last word?
    if (wordIndexOne === lineOne.length)
    {
        return;
    }
}

function nextChapterOne(){
    partOneMusic.stop();
    game.state.start('part_2', true, false,code,name, barOne);
}
