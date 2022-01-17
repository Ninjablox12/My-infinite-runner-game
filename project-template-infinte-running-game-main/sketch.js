var obstacle1
var obstacle2
var obstacle3
var Endscreen
function preload(){
    billy_running=loadAnimation("Runner.png")
    obstacle1=loadImage=("building.png");
    obstacle2=loadImage=("building.png");
    }
    obstacle1=createSprite(250,200,90,50);
    obstacle1.addImage("building.png");
    obstacle2=createSprite(220,200,90,50)
    obstacle2.addImage("building.png");
    Endscreen.addImage("GameOver.png");
ground=createSprite(150,180,400,20);
ground.addImage("ground.png");

function setup() {
    createCanvas(600, 200);

    if(gameState === PLAY){
        billy.velocityX=0.5}
  Billy = createSprite(40,140,25,40);
  Billy.addAnimation("running",Billy_running);
Billy.scale = 0.5;

  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;

 
  if(gameState === END) {
      Billy.velocityX = 0;
      Endscreen.loadImage("GameOver.png");
  }
  if(obstacle1,obstacle2.isTouching(Billy)){
    gameState = END;
    
  }
}
