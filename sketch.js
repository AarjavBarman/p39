 var Playground,Redbaloon,Bluebaloon,Pinkbaloon,Greenbaloon,Bow,arrowImage,arrowGroup;
 var redB, pinkB, greenB ,blueB;



function preload(){
 //load your images here 
 Playground = loadImage("background0.png") ;//loading the background image
 arrowImage = loadImage("arrow0.png");//loading te arrow image
 Bow = loadImage("bow0.png") //loading the bow image
 Redbaloon = loadImage("red_balloon0.png");//loading the redbaloon image
 Bluebaloon = loadImage("blue_balloon0.png");//loading the bluebaloon image
 Pinkbaloon = loadImage("pink_balloon0.png");//loading the pinkbaloon image
 Greenbaloon = loadImage("green_balloon0.png"); //loading the green baloon image
  
}

function setup() {
  createCanvas(600, 600);
  
  //add code here
playground = createSprite(200,180,400,20);//creating the sprite for the background
playground.addImage(Playground);//inserting the image in the sprite
playground.scale = 2.5;
bow = createSprite(350,500,10,10);
bow.addImage(Bow);
bow.scale = 1;
  
arrowGroup = new Group();  
redB = new Group();
pinkB = new Group();
greenB  = new Group();
blueB = new Group();  
//arrow = createSprite(350,500,10,10);
//arrow.addImage(Arrow);
//arrow.scale = 0.4;

  
  
  
  
//for(var  i=60;i<360;i=i+60) {
//redbaloon = createSprite(20,i,10,10);
//redbaloon.addImage(Redbaloon);
//redbaloon.scale = 0.1;
//}
  
  
//for(var  i=120;i<300;i=i+60){
//greenbaloon = createSprite(60,i,10,10);
//greenbaloon.addImage(Greenbaloon);
//greenbaloon.scale = 0.1;
//}
  
//for(var  i=130;i<240;i=i+60){
//bluebaloon = createSprite(100,i,10,10);
//bluebaloon.addImage(Bluebaloon);
//bluebaloon.scale = 0.1;
//}
  
//pinkbaloon = createSprite(140,160,10,10);
//pinkbaloon.addImage(Pinkbaloon);

//bluebaloon = createSprite(400,300,10,10);
//bluebaloon.addImage(Bluebaloon);
//bluebaloon.scale = 0.1;  
  
//redbaloon = createSprite(500,200,10,10);
//redbaloon.addImage(Redbaloon);
//redbaloon.scale = 0.1; 
  
//greenbaloon = createSprite(100,100,10,10);
//greenbaloon.addImage(Greenbaloon);
//greenbaloon.scale = 0.1;    
  
////bluebaloon = createSprite(550,50,10,10);
////bluebaloon.addImage(Bluebaloon);
////bluebaloon.scale = 0.1;    
  
////greenbaloon = createSprite(100,350,10,10);
////greenbaloon.addImage(Greenbaloon);
////greenbaloon.scale = 0.1;  
playground.x = playground.width/2;
  
////pinkbaloon = createSprite(300,160,10,10);
////pinkbaloon.addImage(Pinkbaloon);  
  
  
  
  
}

function draw() {

//add code here
if (keyDown("space")) {
    createArrow();  
  }
  redBalloon();
  blueBalloon();
  greenBalloon();
  pinkBalloon();
  
  

 bow.x = World.mouseX; 
// arrow.x = bow.x; 
  
 
   
  
  if (playground.x<0){
   playground.x=playground.width/2 
  }
  
  if(arrowGroup.isTouching(redB)){
    redB.destroyEach();
      arrowGroup.destroyEach();
      disappear();
      //score=score+1;   
      }
    
      if (arrowGroup.isTouching(greenB)){
      greenB.destroyEach();
      arrowGroup.destroyEach();
      //score=score+2;   
      }
 
      if(arrowGroup.isTouching(blueB)){
      blueB.destroyEach();
      arrowGroup.destroyEach();
      //score=score+3;   
      }    

      if(arrowGroup.isTouching(pinkB)){
      pinkB.destroyEach();
      arrowGroup.destroyEach();
      //score=score+4;   
      }    
  
  
  
  drawSprites();
  
  

}
function redBalloon() {
redbaloon = createSprite(500,200,10,10);
redbaloon.addImage(Redbaloon);
redbaloon.scale = 0.1;
redB.add(redbaloon);
}

function blueBalloon() {
bluebaloon = createSprite(400,300,10,10);
bluebaloon.addImage(Bluebaloon);
bluebaloon.scale = 0.1;  
blueB.add(bluebaloon); 
}

function greenBalloon() {
greenbaloon = createSprite(100,100,10,10);
greenbaloon.addImage(Greenbaloon);
greenbaloon.scale = 0.1;
greenB.add(greenbaloon);
}

function pinkBalloon() {
  pinkbaloon = createSprite(140,160,10,10);
  pinkbaloon.addImage(Pinkbaloon);
  pinkB.add(pinkbaloon);
}
function createArrow() {
  var arrow= createSprite(500, 500, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.x=bow.x;
  arrow.velocityY = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
}

function disappear(){
redbaloon = createSprite(1000,1000,10,10);
redbaloon.addImage(Redbaloon);  
}
