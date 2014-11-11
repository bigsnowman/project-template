
title('Project-Breakout');

// Variables
// Bar Coordinates
var xCoord = 0;
var yCoord = 0;
// Ball Coordinates
var xBallCoord = 0;
var yBallCoord = 0;
// Speed
var speed = 5;
// Boundries
var rBound = 400;
var lBound = 400;

// This code is executed once when the program is started
var setup = function()
{
    // set up the size of the canvas
    size(400,400);
};

// Override draw function, by default it will be called 60 times per second
var draw = function()
{
    // Clear the screen
    background(255, 255, 255);

    // Fill the objects
    fill(68, 166, 1);

    // Draw the moving bar
    rect(xCoord + 200, yCoord + 370, 45, 8);
    
    // Make the bar move
    // Left
    if(keyIsPressed && keyCode === RIGHT)
    {
    xCoord += 5;
    };
    // Right
    if(keyIsPressed && keyCode === LEFT)
    {
    xCoord -= 5;
    };

    // Make the bar tele if it moves off of screen
  //if()
  //{
    
  //}
  //if()
  //{
    
  //}

    // The ball
    ellipse(xBallCoord, yBallCoord, 10, 10);
    
    // Make the ball move
    yBallCoord = yBallCoord + 2;
    if(yBallCoord >)
    {
    
    };

//Call the functions;

