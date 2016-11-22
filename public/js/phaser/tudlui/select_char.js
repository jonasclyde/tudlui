/**
 * Created by JONAS on 10/5/2016.
 */


var selectChar = function(game){
};

var boy_1, boy_2, boy_3, girl_1, girl_2, girl_3, enter, help3;
var girl_1_pic, girl_2_pic , girl_3_pic, boy_1_pic, boy_2_pic, boy_3_pic;
var selected, choose, input_name, name, code, error, helper3, arr21, name_bg;

selectChar.prototype = {
    init: function(bool_music) {

    },
    preload: function(){
        this.load.spritesheet('girl_1','../images/phaser/girl_1_sheet.jpg', 150, 150 );
        this.load.spritesheet('girl_2','../images/phaser/girl_2_sheet.jpg', 150, 150 );
        this.load.spritesheet('girl_3','../images/phaser/girl_3_sheet.jpg', 150, 150 );
        this.load.spritesheet('boy_1','../images/phaser/boy_1_sheet.jpg', 150, 150 );
        this.load.spritesheet('boy_2','../images/phaser/boy_2_sheet.jpg', 150, 150 );
        this.load.spritesheet('boy_3','../images/phaser/boy_3_sheet.jpg', 150, 150 );
        this.load.spritesheet('enter','../images/phaser/button_enter_sprite.jpg', 150, 50);
        this.load.audio('error', '../music/error.mp3');
        this.load.image('helper3','../images/phaser/select_help.png');
        this.load.image('arr21','../images/phaser/select_arrow.png');


    },
    create: function(){

        game.background = this.game.add.sprite(0,0, 'background');
        game.add.plugin(Fabrique.Plugins.InputField);

        input_name = game.add.inputField(780, 190, {
            font: '18px Varela',
            fill: '#34486b',
            fontWeight: 'bold',
            width: 220,
            height: 20,
            padding: 10,
            borderWidth: 3,
            borderColor: '#34486b',
            placeHolder: 'Enter your nickname.'
        });

        if(bool_music){
            sound = game.add.sprite(1060, 30, 'sounds');
        }else{
            sound = game.add.sprite(1060, 30, 'mute');
        }


        sound.inputEnabled = true;
        sound.events.onInputDown.add(toggleSound, this);

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

        enter = game.add.button(830, 320, 'enter', enterGame, this, 1, 0, 1, 1);

        girl_1.variable = 0;
        girl_1.code = 'girl_1';
        girl_1.inputEnabled = true;
        girl_1.events.onInputDown.add(selectAvatar, this);


        girl_2.variable =  1;
        girl_2.code = 'girl_2';
        girl_2.inputEnabled = true;
        girl_2.events.onInputDown.add(selectAvatar, this);


        girl_3.variable =  2;
        girl_3.code = 'girl_3';
        girl_3.inputEnabled = true;
        girl_3.events.onInputDown.add(selectAvatar, this);


        boy_1.variable =  3;
        boy_1.code = 'boy_1';
        boy_1.inputEnabled = true;
        boy_1.events.onInputDown.add(selectAvatar, this);


        boy_2.variable =  4 ;
        boy_2.code = 'boy_2';
        boy_2.inputEnabled = true;
        boy_2.events.onInputDown.add(selectAvatar, this);


        boy_3.variable =  5 ;
        boy_3.code = 'boy_3';
        boy_3.inputEnabled = true;
        boy_3.events.onInputDown.add(selectAvatar, this);

        help3 = game.add.button(1010, 30, 'help', helpTwo, this, 1, 0, 1);
        error = game.add.audio('error');

        helper3 = game.add.sprite(780, 420, 'helper3');
        helper3.alpha = 0;

        arr21 = game.add.sprite(295, 450, 'arr21');
        arr21.alpha = 0;

        choose = game.add.text(750, 80, 'Select your character and\n'+
            'enter your name.',  { font: "24px Varela", fill: "#34486b", align: 'center', stroke: "#E9FBE9", strokeThickness:.5, fontWeight: '900'  });

    },
    update: function(){

    },
    render: function(){

    }
}

function helpTwo(){
    help_sound.play();
    showHelp();
}

function showHelp(){
    help3.inputEnabled = false;
    enter.inputEnabled = false;

    game.add.tween(helper3).to({ alpha: 1 }, 1000, "Linear", true);
    setTimeout(function(){
        game.add.tween(helper3).to({ alpha: 0 }, 1000, "Linear", true);
    },4000)

    game.add.tween(arr21).to({ alpha: 1 }, 1000, "Linear", true, 0, 0, true);

    setTimeout(function(){
        game.add.tween(arr21).to({ alpha: 1 }, 1000, "Linear", true);
    },2000)

    setTimeout(function(){
        game.add.tween(arr21).to({ alpha: 0 }, 1000, "Linear", true);
        help3.inputEnabled = true;
        enter.inputEnabled = true;
    },3000)

}

function selectAvatar(char){
    click.play();
    selected = char.variable;
    code = char.code;
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
    if(name && selected != undefined) {
        music.stop();
        game.state.start('part_1', true, false,code,name);
    }else if(!name){
        showHelp();
        input_name = game.add.inputField(780, 190, {
            font: '18px Varela',
            fill: '#34486b',
            fontWeight: 'bold',
            width: 220,
            height: 20,
            padding: 10,
            borderWidth: 3,
            borderColor: '#8b0000',
            placeHolder: 'Enter your nickname.'
        });
        error.play();
    }else if(selected == undefined){
        showHelp();
        input_name = game.add.inputField(780, 190, {
            font: '18px Varela',
            fill: '#34486b',
            fontWeight: 'bold',
            width: 220,
            height: 20,
            padding: 10,
            borderWidth: 3,
            borderColor: '#34486b',
            placeHolder: 'Re-enter your nickname.'
        });
        error.play();
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
