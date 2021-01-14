
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground1;
var dustbin1, dustbin2, dustbin3, dustbinMain, dustbinImage;

function preload()
{
	dustbinImage = loadImage("dustbin.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	
	paper1 = new Paper(50,350,40);
	ground1 = new Ground(400,500,800,20);
	dustbin1 = new Dustbin(602,415,15,100);
	dustbin2 = new Dustbin(700,415,15,100);
	dustbin3 = new Dustbin(650,483,110,15);
	// dustbinMain.addImage(dustbinImage);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ground1.display();
  paper1.display();
  dustbin3.display();
  dustbin1.display();
  dustbin2.display();
  imageMode(CENTER); 
  image(dustbinImage,650,426,130,130);
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:58, y:-58});
	}
}

