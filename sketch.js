
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Con = Matter.Constraint;
var roof,ground;
var b1,b2,b3,b4,b5;
var r1,r2,r3,r4,r5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof= new Plat(400,200,600,50);
b1= new Bob(240,600);
b2 = new Bob(320,600);
b3 = new Bob(400,600);
b4 = new Bob(480,600);
b5 = new Bob(560,600);
r1= new Rope(b1.body,{x:240,y:220});
r2= new Rope(b2.body,{x:320,y:220});
r3= new Rope(b3.body,{x:400,y:220});
r4= new Rope(b4.body,{x:480,y:220});
r5= new Rope(b5.body,{x:560,y:220});
ground= new Plat(400,690,800,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(120);
  
  roof.display();
  b1.display();
  r1.display();
  b2.display();
  r2.display();
  b3.display();
  r3.display();
  b4.display();
  r4.display();
  b5.display();
  r5.display();
  //ground.display();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode===32){
   Body.applyForce(b1.body,b1.body.position,{x:-75,y:-50})
 // console.log("hello")
  }
}

