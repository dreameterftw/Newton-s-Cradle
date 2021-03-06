
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var roof, rope;
var bob;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//roof1 = new Roof (400,150,80,10);
	//rope1 = new Rope()
	
	 bob1 = new Bob (300,300);
	 bob2 = new Bob (330,300);
	 bob3 = new Bob (360,300);
	 bob4 = new Bob (270,300);
	 bob5 = new Bob (240,300);

	
	ground = new Roof (400,690,800,10);
	
	roof = new Roof (350,150,500,10);

	rope1 = new Rope (bob5.body,roof.body,10,10);
	rope2 = new Rope (bob4.body,roof.body,30,10);
	rope3 = new Rope (bob3.body,roof.body,110,10);
	rope4 = new Rope (bob2.body,roof.body,80,10);
	rope5 = new Rope (bob1.body,roof.body,60,10);
}

function draw() {
	Engine.update(engine);
  //rectMode(CENTER);
  background("lightyellow");
  
//roof1.display();

  //drawSprites();
 
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();

roof.display();

ground.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
}



