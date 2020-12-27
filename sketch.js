
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world
var ground,ball
var binImg,bin;

function preload(){
	binImg=loadImage("G:\RISHABH\Pictures\dustbingreen.png")
	}

function setup() {
var canvas=	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine)

	ground=new Ground();
	crumpledPaper=new Paper()

	bin=createSprite(964,520,20,20)
	bin.addImage(binImg)
	bin.scale=0.45

	//Create the Bodies Here.
binPart1=new Dustbin(902,505,10,120)
binPart2=new Dustbin(962,565,130,10)
binPart3=new Dustbin(1024,505,10,120)

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  ground.display();
 binPart1.display();
 binPart2.display();
 binPart3.display();
 crumpledPaper.display();
  drawSprites();
 }
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:85,y:85});
		}
}


}
