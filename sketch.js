
var bg, backgroundImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironImg = loadImage("images/iron.png");
 
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg)
  iron = createSprite(200,500,20,50);
  iron.addImage(ironImg); 
  iron.scale = 0.3;
  ground = createSprite(200,585,400,10);
  ground.visible = false
 
}

function draw() {
  
  if (keyDown("space")){
    iron.velocityY = -15
  } 
  if (keyDown("up")){
    iron.velocityY = -10
  }
  if (keyDown("left")){
    iron.x = iron.x  -5
  }
  if (keyDown("right")){
    iron.x = iron.x  +5
  }
  iron.velocityY += 0.5 
iron.collide(ground)

 
    
    drawSprites();
   
}

