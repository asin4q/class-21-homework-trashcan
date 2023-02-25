
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
let ground, leftSide,rightSide

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
      


	Engine.run(engine);

	var ball_options={

		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
		
	}

	ball = Bodies.circle(400,390,20,{ball_options})
	World.add(world,ball)

     ground = new Ground(width/2,670,width,20)
	 right = new Ground(790,200,20,8000)
     left = new Ground(10,200,20,8000)
     top_wall = new Ground(200,10,8000,20)
	leftSide = new Ground(100,600,20,120)
	rightSide = new Ground(250,600,20,120)

	keyPressed()
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground.display()
  leftSide.display()
  rightSide.display()
  right.display()
  left.display()
  top_wall.display()

  
  ellipse(ball.position.x,ball.position.y,20)
  
  
  drawSprites();
}


function keyPressed(){
	if(keyCode === UP_ARROW){
			Matter.Body.applyForce(ball,{x:0,y:0},{x:0.02,y:-0.02})
			
		  }
	}







