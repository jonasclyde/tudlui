/**
 * Created by JONAS on 10/5/2016.
 */


var startState = function(game){
};

var boy_1, boy_2, boy_3, girl_1, girl_2, girl_3;

startState.prototype = {
    preload: function(){

        this.load.image('boy_1', '../images/phaser/boy_1.png');
        this.load.image('boy_2', '../images/phaser/boy_2.png');
        this.load.image('boy_3', '../images/phaser/boy_3.png');
        this.load.image('girl_1', '../images/phaser/girl_1.png');
        this.load.image('girl_2', '../images/phaser/girl_2.png');
        this.load.image('girl_3', '../images/phaser/girl_3.png');

    },
    create: function(){

        game.background = this.game.add.sprite(0,0, 'background');

        //sound = game.add.sprite(1030, 30, 'sounds');
        //
        //sound.inputEnabled = true;
        //sound.events.onInputDown.add(toggleSound, this);

        boy_1 = game.add.sprite(100, 100, 'boy_1');
        boy_2 = game.add.sprite(300, 100, 'boy_2');
        boy_3 = game.add.sprite(500, 100, 'boy_3');
        girl_1 = game.add.sprite(100, 300, 'girl_1');
        girl_2 = game.add.sprite(300, 300, 'girl_2');
        girl_3 = game.add.sprite(500, 300, 'girl_3');

    },
    upload: function(){

    },
    render: function(){

    }

}


function toggleSound(){
    if(sound.key == 'sounds'){
        music.mute = true;
        sound.loadTexture('mute')
    }else{
        music.mute = false;
        sound.loadTexture('sounds')
    }
}
