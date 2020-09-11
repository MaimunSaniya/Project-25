const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var dustbin;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = new Ball(100,645);

	box1 = new Box(660,635);
	box2 = new Box2(590,580,5,150);
	box3 = new Box2(730,580,5,150);

	ground = new Ground(400,650,800,20);

	
}


function draw() {
  background(225);

  Engine.update(engine);

  ball.display();
    
  box1.display();
  box2.display();
  box3.display();

  ground.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
  		Body.applyForce(ball.body,ball.body.position,{x:35,y:-35});
	}
}



