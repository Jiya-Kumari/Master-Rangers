
var canvas=document.getElementById()
var ctx=document.getElementById()
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "backg.jpg";

function new_image(get_image)
{
	block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_Y,
            left:player_X
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82')
	{
		block_x=150;
		block_y=100;
	    new_image('rrl.png');
		console.log('r');
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		block_y=150;
		new_image('gr.png');
		console.log('r');
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		block_y=200;
		new_image('yr.png');
		console.log('y');
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		block_y=250;
		new_image('pr.png');
		console.log('p');
	}
	if(keyPressed == '66')
	{
		block_x =700;
		block_y=100;
		new_image('br.png');
		console.log('b');
	}
}