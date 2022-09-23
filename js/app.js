// Name: Kiara Castillo Magallanes 
//Date: 09/22/2022
//Class #: 24603

var c; // current x position of the circle
var radius = 25; //radius of the circle
var direction = -1;



function setup () {

    createCanvas(800, 600);
    cX = 0
    frameRate(5);

   

}

function draw() {
    background(255, 255, 255)
    circle (cX, height/2, radius*2);
    cX = (cX + 5) %width;
    fill(50, 164, 168);
  

}