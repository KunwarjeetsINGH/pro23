var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxBottom = createSprite(width/2,650,200,20)
	boxBottom.shapeColor = color(255,0,0)
	
	boxSide1 = createSprite(490,600,20,100)
	boxSide1.shapeColor = color(255,0,0)
	
	boxSide2 = createSprite(310,600,20,100)
	boxSide2.shapeColor = color(255,0,0)

    engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	boxBbody = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true});
	World.add(world, boxBottom)

	boxSideBody = Bodies.rectangle(500, 650, width,10 , {isStatic:true})
	
	World.add(world, boxSide1)
	
	boxsideBody = Bodies.rectangle(400, 650, width,10 , {isStatic:true})

	World.add(world, boxSide2)
	
	Engine.run(engine);
}
	
	


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, {isStatic:false});
    
  }
}