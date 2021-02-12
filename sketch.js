var thickness,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  
  bullet = createSprite(50,200,50,50)
  bullet.velocityX=speed;
  wall = createSprite(1200,200,thickness,height/2)


  thickness = random(22,83);
speed= random(223,331);
weight= random(30,52);

}

function draw() {
  background("black");  


 
if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5*speed*speed*speed/(thickness*thickness*thickness);
  if (damage>10)
  {
    bullet.shapeColor=color("yellow")
   
  }
  if(damage<10){
    bullet.shapeColor=color("green")

  }



}




  drawSprites();


}

function hasCollided(Lbullet,Lwall){
 bulletRightEdge=Lbullet.x + Lbullet.width;
 wallLeftEdge = Lwall.x;
 if(bulletRightEdge>=wallLeftEdge){
   return true
 }
 return false;

}
