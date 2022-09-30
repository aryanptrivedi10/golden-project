var bgImage,bgSprite;
var spaceship;
function preload(){
  bgImage=loadImage("my game/galaxy.jpg");
  spaceShip_Img=loadImage("my game/spaceship2.jpg")
}
function setup(){
  createCanvas(windowWidth,windowHeight);
  bgSprite=createSprite(1000,300,50,50);
  bgSprite.addImage(bgImage);
  bgSprite.velocityX=-1;
  bgShip=createSprite(1000,300,10,10);
  bgShip.addImage(spaceShip_Img);

}
function draw(){
  background('white');
  drawSprites();
}































