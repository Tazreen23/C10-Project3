var sea,seaImg,ship,shipImg;
function preload(){
  seaImg= loadImage("sea.png");
  shipImg= loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  //spriteName.addImage(seaImg); 

}


function setup(){
  createCanvas(400,400);
 sea=createSprite(200,200,50,50) ;
 sea.addImage(seaImg);
 sea.velocityX=-1;
 sea.scale=0.3;
 ship=createSprite(100,250,50,50);
 ship.addAnimation("ship",shipImg)
 ship.scale=0.2
}

function draw() {
  background("blue");
  if(sea.x<0){
    sea.x=sea.width/4;
  }
  drawSprites()
}