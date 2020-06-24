
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var side1;
var side2;
var side3;
var crumpled_ball;
var launchpad;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,675,800,50)

	side1 = new Dustbin (520,608,10,105)
	side2 = new Dustbin (600,645,150,10);
	side3 = new Dustbin (680,608,10,115);
	crumpled_ball = new Paper(70,645,15);

	launchpad = new Launcher(crumpled_ball.body,{x:169, y:147});

	Engine.run(engine);

}


function draw() {
  Engine.update(engine)
  background(159,223,220);
  ground.display();
  //side1.display();
  side2.display();
  //side3.display();
  crumpled_ball.display();//}
  launchpad.display();
  drawSprites();
  console.log(mouseX, mouseY);
}

/*function keyPressed(){

    if(keyCode === UP_ARROW){
 
      Matter.Body.applyForce(crumpled_ball.body,crumpled_ball.position,{x:45,y:-25})
 
	}
	
	else if (keyCode === DOWN_ARROW){

    Matter.Body.applyForce(crumpled_ball.body,crumpled_ball.position,{x:-15,y:-25})

	}
 
}
*/


function mouseDragged(){
	Matter.Body.setPosition(crumpled_ball.body,{ x: mouseX, y: mouseY})
}

function mouseReleased(){
	launchpad.fly();
}
