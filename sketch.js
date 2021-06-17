const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var snow = [];

function preload(){

  bgImg = loadImage("snow1.jpg");
  kidImg = loadImage("kid1.png");
  music = loadSound("music.mp3");
}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  //create the character
  kid = createSprite(700, 400, 50, 50);
  kid.addImage(kidImg);
  kid.scale = 0.43;

  music.play();
 
 Engine.run(engine);

}

function draw() {
  Engine.update(engine);
  background(bgImg); 
  textSize(26);
  fill("yellow");
  text("Use left & right arrows to move around", 600,70);
  
  //create snow flakes using for loops
  if (frameCount % 7 === 0){
    snow.push(new Snow(random(width/2-580, width/2+580)));
    
  }

  //display the snow 
  for (var p = 0; p < snow.length; p++){
    snow[p].display();
  }
  
  
  
  drawSprites();
}

function keyPressed(){

  if(keyCode === LEFT_ARROW){
    kid.x = kid.x - 25;
  }

  if(keyCode === RIGHT_ARROW){
    kid.x = kid.x + 25;
  }

}

function notes(){

  
  //display the paricles 
  for (var p = 0; p < snow.length; p++){
    snow[p].display();
    
  kidBody = Bodies.circle(700 , 400 , 5 ,{restitution:0.4});
	World.add(world, kidBody);

   
  kid.x = kidBody.position.x;
  kid.y = kidBody.position.y;

  }
}