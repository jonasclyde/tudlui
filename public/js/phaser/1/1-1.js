/**
 * Created by JONAS on 10/5/2016.
 */


var startState = function(game){
};

var boy_1, boy_2, boy_3, girl_1, girl_2, girl_3;
var selected, choose;

startState.prototype = {
    preload: function(){

        this.load.image('boy_1', '../images/phaser/boy_1.jpg');
        this.load.image('boy_2', '../images/phaser/boy_2.jpg');
        this.load.image('boy_3', '../images/phaser/boy_3.jpg');
        this.load.image('girl_1', '../images/phaser/girl_1.jpg');
        this.load.image('girl_2', '../images/phaser/girl_2.jpg');
        this.load.image('girl_3', '../images/phaser/girl_3.jpg');

    },
    create: function(){

        game.background = this.game.add.sprite(0,0, 'background');
        game.add.plugin(Fabrique.Plugins.InputField);

        var input = game.add.inputField(10, 90, {
            font: '18px Raleway',
            fill: '#212121',
            fontWeight: 'bold',
            width: 150,
            padding: 8,
            borderWidth: 1,
            borderColor: '#000',
            borderRadius: 6
        });



        //sound = game.add.sprite(1030, 30, 'sounds');
        //
        //sound.inputEnabled = true;
        //sound.events.onInputDown.add(toggleSound, this);

        boy_1 = game.add.sprite(100, 50, 'boy_1');
        boy_2 = game.add.sprite(300, 50, 'boy_2');
        boy_3 = game.add.sprite(500, 50, 'boy_3');
        girl_1 = game.add.sprite(100, 250, 'girl_1');
        girl_2 = game.add.sprite(300, 250, 'girl_2');
        girl_3 = game.add.sprite(500, 250, 'girl_3');

        boy_1.inputEnabled = true;
        boy_2.inputEnabled = true;
        boy_3.inputEnabled = true;
        girl_1.inputEnabled = true;
        girl_2.inputEnabled = true;
        girl_3.inputEnabled = true;


        boy_1.events.onInputDown.add(selectAvatar, {id: 0});
        boy_2.events.onInputDown.add(selectAvatar,{id: 1});
        boy_3.events.onInputDown.add(selectAvatar,{id: 2});
        girl_1.events.onInputDown.add(selectAvatar,{id: 3});
        girl_2.events.onInputDown.add(selectAvatar,{id: 4});
        girl_3.events.onInputDown.add(selectAvatar,{id: 5});

        choose = game.add.text(750, 30, 'Select your character and\n'+
            'enter your name.', { font: "25px Raleway", fill: "#000000", align: "center" });

    },
    update: function(){

    },
    render: function(){

    }

}

function selectAvatar(){
    selected = this.id;
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
