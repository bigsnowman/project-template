
title('Project-Breakout');

// Variables
var xCoord = 0;
var yCoord = 0;

// this code is executed once when the program is started
var setup = function() {

    // set up the size of the canvas (you probably don't want to change this!)
    size(400,400);
};

// override draw function, by default it will be called 60 times per second
var draw = function() {

    // clear the screen
    background(255, 255, 255);

    // some drawing commands; feel free to change these
    fill(255, 0, 0);

    // Make the moving bar
    rect(200, 790, 20, 20);
};
