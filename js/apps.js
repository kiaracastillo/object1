//Create variables


let shape = {
    x:0, 
    y:300, 
    r:50,
    speed: 5,
}

//Create canvas
function setup() {


createCanvas(800,600); 
background(129, 203, 196); //background white

 }


function draw() {

shape.x += shape.speed;

if(shape.x > width+shape.r )
{ 

   shape.x = -shape.r;
}


 ellipse(shape.x, shape.y, shape.r);
fill(50, 164, 168);
}

