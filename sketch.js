var car,wall,speed,weight;
function setup() {
  createCanvas(1600,200);
  speed=random(55,90);
  weight=random(400,1500);  
  car=createSprite(20, 101, 60, 50);
  wall=createSprite(1400, 101, 39, 197);
  car.velocityX=speed;
  car.shapeColor="cyan"
}

function draw() {
  background(1);  
  if(car.isTouching(wall)){
    car.velocityX=0;
    var deformation=0.5*speed*weight*speed/22500;
    if(deformation <100 ){
    car.shapeColor="lime";
    }
    if(deformation >100 ){
     car.shapeColor="black";
  }}

  drawSprites();
}