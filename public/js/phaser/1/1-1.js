/**
 * Created by JONAS on 10/5/2016.
 */


var startState = function(game){
};

var boy_1, boy_2, boy_3, girl_1, girl_2, girl_3, enter;
var girl_1_pic, girl_2_pic , girl_3_pic, boy_1_pic, boy_2_pic, boy_3_pic;
var selected, choose, input_name, name;

startState.prototype = {
    preload: function(){

        //this.load.image('boy_1', '../images/phaser/boy_1.jpg');
        //this.load.image('boy_2', '../images/phaser/boy_2.jpg');
        //this.load.image('boy_3', '../images/phaser/boy_3.jpg');
        //this.load.image('girl_1', '../images/phaser/girl_1.jpg');
        //this.load.image('girl_2', '../images/phaser/girl_2.jpg');
        //this.load.image('girl_3', '../images/phaser/girl_3.jpg');
        this.load.spritesheet('girl_1','../images/phaser/girl_1_sheet.jpg', 150, 150 );
        this.load.spritesheet('girl_2','../images/phaser/girl_2_sheet.jpg', 150, 150 );
        this.load.spritesheet('girl_3','../images/phaser/girl_3_sheet.jpg', 150, 150 );
        this.load.spritesheet('boy_1','../images/phaser/boy_1_sheet.jpg', 150, 150 );
        this.load.spritesheet('boy_2','../images/phaser/boy_2_sheet.jpg', 150, 150 );
        this.load.spritesheet('boy_3','../images/phaser/boy_3_sheet.jpg', 150, 150 );
        this.load.spritesheet('enter','../images/phaser/button_enter_sprite.jpg', 193, 71 );

    },
    create: function(){

        game.background = this.game.add.sprite(0,0, 'background');
        game.add.plugin(Fabrique.Plugins.InputField);

        input_name = game.add.inputField(780, 190, {
            font: '18px Raleway',
            fill: '#212121',
            fontWeight: 'bold',
            width: 220,
            height: 20,
            padding: 10,
            borderWidth: 1,
            borderColor: '#000',
            borderRadius: 6,
            placeHolder: 'Enter your nickname.'
        });




        //sound = game.add.sprite(1030, 30, 'sounds');
        //
        //sound.inputEnabled = true;
        //sound.events.onInputDown.add(toggleSound, this);

        girl_1 = game.add.button(100, 250, 'girl_1','', this, 1, 0, 1, 1);
        girl_2 = game.add.button(300, 250, 'girl_2', '', this, 1, 0, 1, 1);
        girl_3 = game.add.button(500, 250, 'girl_3', '', this, 1, 0, 1, 1);
        boy_1 = game.add.button(100, 50, 'boy_1', '', this, 1, 0, 1, 1);
        boy_2 = game.add.button(300, 50, 'boy_2', '', this, 1, 0, 1, 1);
        boy_3 = game.add.button(500, 50, 'boy_3', '', this, 1, 0, 1, 1);

        girl_1_pic = game.add.sprite(100, 250, 'girl_1');
        girl_1_pic.frame = 1;
        girl_1_pic.alpha = 0;

        girl_2_pic = game.add.sprite(300, 250, 'girl_2');
        girl_2_pic.frame = 1;
        girl_2_pic.alpha = 0;

        girl_3_pic = game.add.sprite(500, 250, 'girl_3');
        girl_3_pic.frame = 1;
        girl_3_pic.alpha = 0;

        boy_1_pic = game.add.sprite(100, 50, 'boy_1');
        boy_1_pic.frame = 1;
        boy_1_pic.alpha = 0;

        boy_2_pic = game.add.sprite(300, 50, 'boy_2');
        boy_2_pic.frame = 1;
        boy_2_pic.alpha = 0;

        boy_3_pic = game.add.sprite(500, 50, 'boy_3');
        boy_3_pic.frame = 1;
        boy_3_pic.alpha = 0;

        enter = game.add.button(800, 320, 'enter', enterGame, this, 1, 0, 1, 1);

        girl_1.variable = 0;
        girl_1.inputEnabled = true;
        girl_1.events.onInputDown.add(selectAvatar, this);


        girl_2.variable =  1;
        girl_2.inputEnabled = true;
        girl_2.events.onInputDown.add(selectAvatar, this);


        girl_3.variable =  2;
        girl_3.inputEnabled = true;
        girl_3.events.onInputDown.add(selectAvatar, this);


        boy_1.variable =  3;
        boy_1.inputEnabled = true;
        boy_1.events.onInputDown.add(selectAvatar, this);


        boy_2.variable =  4 ;
        boy_2.inputEnabled = true;
        boy_2.events.onInputDown.add(selectAvatar, this);


        boy_3.variable =  5 ;
        boy_3.inputEnabled = true;
        boy_3.events.onInputDown.add(selectAvatar, this);

        choose = game.add.text(750, 30, 'Select your character and\n'+
            'enter your name.', { font: "25px Raleway", fill: "#000000", align: "center" });

    },
    update: function(){

    },
    render: function(){

    }

}

function selectAvatar(char){
    selected = char.variable;

    switch(selected) {
        case 0:
            girl_1_pic.alpha = 1;
            girl_2_pic.alpha = 0;
            girl_3_pic.alpha = 0;
            boy_1_pic.alpha = 0;
            boy_2_pic.alpha = 0;
            boy_3_pic.alpha = 0;
            girl_1.alpha = 0;
            girl_2.alpha = 1;
            girl_3.alpha = 1;
            boy_1.alpha = 1;
            boy_2.alpha = 1;
            boy_3.alpha = 1;
            break;
        case 1:
            girl_1_pic.alpha = 0;
            girl_2_pic.alpha = 1;
            girl_3_pic.alpha = 0;
            boy_1_pic.alpha = 0;
            boy_2_pic.alpha = 0;
            boy_3_pic.alpha = 0;
            girl_1.alpha = 1;
            girl_2.alpha = 0;
            girl_3.alpha = 1;
            boy_1.alpha = 1;
            boy_2.alpha = 1;
            boy_3.alpha = 1;
            break;
        case 2:
            girl_1_pic.alpha = 0;
            girl_2_pic.alpha = 0;
            girl_3_pic.alpha = 1;
            boy_1_pic.alpha = 0;
            boy_2_pic.alpha = 0;
            boy_3_pic.alpha = 0;
            girl_1.alpha = 1;
            girl_2.alpha = 1;
            girl_3.alpha = 0;
            boy_1.alpha = 1;
            boy_2.alpha = 1;
            boy_3.alpha = 1;
            break;
        case 3:
            girl_1_pic.alpha = 0;
            girl_2_pic.alpha = 0;
            girl_3_pic.alpha = 0;
            boy_1_pic.alpha = 1;
            boy_2_pic.alpha = 0;
            boy_3_pic.alpha = 0;
            girl_1.alpha = 1;
            girl_2.alpha = 1;
            girl_3.alpha = 1;
            boy_1.alpha = 0;
            boy_2.alpha = 1;
            boy_3.alpha = 1;
            break;
        case 4:
            girl_1_pic.alpha = 0;
            girl_2_pic.alpha = 0;
            girl_3_pic.alpha = 0;
            boy_1_pic.alpha = 0;
            boy_2_pic.alpha = 1;
            boy_3_pic.alpha = 0;
            girl_1.alpha = 1;
            girl_2.alpha = 1;
            girl_3.alpha = 1;
            boy_1.alpha = 1;
            boy_2.alpha = 0;
            boy_3.alpha = 1;
            break;
        case 5:
            girl_1_pic.alpha = 0;
            girl_2_pic.alpha = 0;
            girl_3_pic.alpha = 0;
            boy_1_pic.alpha = 0;
            boy_2_pic.alpha = 0;
            boy_3_pic.alpha = 1;
            girl_1.alpha = 1;
            girl_2.alpha = 1;
            girl_3.alpha = 1;
            boy_1.alpha = 1;
            boy_2.alpha = 1;
            boy_3.alpha = 0;
    }
}

function enterGame(){
        name = input_name.value;

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
