var bullet,wall;
var speed, weight, thickness;
var deformation;


function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50, 200, 50, 20);
  wall=createSprite(1500,200,thickness,height/2);
  bullet.velocityX = speed;
 thickness=random(22,83);

}

function draw() {
  background(255,255,255);  
  wall.shapeColor=("blue");
  var deformation = 0.5*weight*speed*speed/thickness*thickness*thickness;
  if( bullet.x-wall.x<bullet.width/2+wall.width/2
    && wall.x-bullet.x<bullet.width/2+wall.width/2){
      bullet.velocityX = 0;
     
     if(deformation>10){
       bullet.shapeColor=("red");
     }
    if(deformation<10){
wall.shapeColor=("green");
    }
    }
  drawSprites();
}