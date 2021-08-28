var plane,bird,bg;
var planeImg,birdImg,bgImg;
var score = 0;
var birdGroup;
var endImg;
var score=0;


//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  planeImg = loadImage("plane.png");
  birdImg = loadAnimation("Bird1.png","Bird2.png");
  endImg =loadImage("GameOver.png");
  bgImg =loadImage("Background.png")
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
// Moving background
bg=createSprite(width/2,500);
bg.addImage(bgImg);
bg.velocityX = -2;
bg.scale = 3


//creating plane flying
plane = createSprite(230,400);
plane.addImage("PlaneFlying",planeImg);
plane.scale=0.3;

birdGroup=new Group();


}

function draw() {
  background(600,600);
  if(gameState===PLAY){
  plane.y = World.mouseY;
  
  score = score + Math.round(getFrameRate()/10);
   
 
  
  //code to reset the background
  if(bg.x < width/3 ){
    bg.x = width/1.5
   
  }
  
  spawnBird()

  if (frameCount % 300===0) {
    bird.velocityX=bird.velocityX-5
    bg.velocityX=bg.velocityX-5
  }
 


    if (birdGroup.isTouching(plane)) {
      gameState = END
    
  bg.velocityX = 0;
  plane.addAnimation("PlaneFlying",endImg);
  plane.y = height/2;
  plane.x = width/2;
  birdGroup.destroyEach();
  birdGroup.setVelocityEach(0);
  plane.scale=2;
  

  
  
    } 
}
//keypressed()

  drawSprites();
  textSize(20);
  fill(255);
  text(score +" Km",150,30);
}

  function spawnBird() {
    if (frameCount % 150===0){
      bird = createSprite(windowWidth,windowHeight);
      bird.addAnimation("flying",birdImg);
      bird.y=Math.round(random(500,100))
      bird.scale=0.12;
      bird.velocityX = -3;
      bird.lifetime = 600;
      birdGroup.add(bird);
      bird.setCollider("rectangle",5,5,5,5)
    }

  }
function keyPressed() {
  if (keyCode === 32) {
    gameState = PLAY
    plane.x = 230;
    plane.y = 400;
    plane.addImage("PlaneFlying",planeImg);
    plane.scale=0.3;
    plane.y = World.mouseY;
    bg.velocityX = -3
    score = 0
  
   
  
  }
}