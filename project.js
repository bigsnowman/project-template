
title('Project - Breakout');

// Variables
var xCoord = 100;
var yCoord = 350
var xSpeed = 0.5;
var ySpeed = 2.50;
var leftB = 5;
var rightB = 395;
var topB = 5;
var barX = 100;
var barY = 380;
var blocknum = 40;
var aliveB = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // (40 here)
var blockW = 400 / blocknum;
var blockH = 10;

// This code is executed once when the program is started
var setup = function()
{
    // Set the stroke
    noStroke();
    // set up the size of the canvas
    size(400,400);    
};

// Override draw function, by default it will be called 60 times per second
var draw = function()
{
    // Clear the screen
    background(16, 16, 16);

    // Draw the bar
    rect(barX, barY, 45, 10);
    
    // Make the bar move
    if(keyIsPressed && keyCode === RIGHT)
    {
	barX = barX + 5;
    }
    if(keyIsPressed && keyCode === LEFT)
    {
	barX = barX - 5;
    }

    // Make the bar move to the other side when it moves off the edge
    if(barX > 400)
    {
	barX = 0;
    }
    if(barX < -40)
    {
	barX = 360;
    }

    // Draw the ball
    fill(68, 166, 1);
    ellipse(xCoord, yCoord, 10, 10);

    // Make the ball move
    xCoord = xCoord + xSpeed;
    yCoord = yCoord + ySpeed;

    // The Boundries For The ball's X Coordinate
    if(xCoord > rightB)
    {
	xSpeed = -2.5 - Math.random() * 2.5;
    }
    if(xCoord < leftB)
    {
	xSpeed = 2.5 + Math.random() * 2.5;
    }

    // The boundries for the ball's Y coordinate
    if(yCoord < topB)
    {
	ySpeed = 2.5 + Math.random() * 2.5;
    }

    // Make the ball bounce off the bar
    if(yCoord > barY && xCoord > barX && xCoord < barX + 45)
    {
	ySpeed = ySpeed * -1;
    }

    // Now da blocks
    for(var i = 0; i < aliveB.length; i++)
    {
	if(aliveB[i] === 0)
	{
	    fill(68, 166, 1);
	    stroke(0,0,0);
	    rect(i * blockW, 0, blockW, blockH);
	}
    }
};
