var car,wall,speed,weight;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  car  = createSprite(50,200,50,50);
  wall = createSprite(1300,200,30,height/2);
}

function draw() {
  background("pink");
   car.velocityX = speed;
   
  if(hasCollided(car,wall))
  {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/(22500);
    if(deformation<100){
      car.shapeColor=("green");
    }
    if(deformation<100){
      car.shapeColor=("yellow");
    }
    if(deformation>180){
      car.shapeColor=("red")
    }
  }
  drawSprites();
}
function hasCollided(car,wall){
  carRightEdge=car.x+car.width;
  wallLeftEdge=wall.x;
  if(carRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}
