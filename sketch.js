
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var grd
function preload()
{
	
}

function setup() {
	createCanvas(1000, 900);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
ball=Bodies.circle(300,100,20,ball_options)
World.add(world,ball)
grd=new ground(500,690,1000,20)
leftSide=new ground (500,620,20,120)
rightSide=new ground (700,620,20,120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  grd.display()
  ellipse(ball.position.x,ball.position.y,40,40)
 leftSide.display()
	 rightSide.display()
 
}
function keyPressed (){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}


