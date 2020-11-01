
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	bobobj1=new Paper(100,390,60,60);
	bobobj2=new Paper(140,390,60,60);
	bobobj3=new Paper(180,390,60,60);
	bobobj4=new Paper(220,390,60,60); 
	bobobj5=new Paper(260,390,60,60);
	top=new Paper(200,290,10,80);  
	rope1=new Rope(bobobj1.body,roofObject.body,-bobDiameter*2,0);  
	rope2=new Rope(bobobj2.body,roofObject.body,-bobDiameter*2,0);
	rope3=new Rope(bobobj3.body,roofObject.body,-bobDiameter*2,0);
	rope4=new Rope(bobobj4.body,roofObject.body,-bobDiameter*2,0);
	rope5=new Rope(bobobj5.body,roofObject.body,-bobDiameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



