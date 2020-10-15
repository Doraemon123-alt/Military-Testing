var wall,thickness
var bullets,speed,weight

function setup() {
  createCanvas(800,400);

bullets=createSprite(50,200,50,50)
wall = createSprite(700,200,thickness,height/2)

  wall .shapeColor = color(80, 80, 80)

 thickness = random(22, 83)

  speed=random(223,321 )
  weight= random(30, 52)
  
  bullets.velocityX = speed;


}

function draw() {
  background(255,255,255);  
  bullets.velocityX =speed
if(hasCollided(bullets,wall))
{
bullets.velocityX=0

var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
if (damage>10)
{

wall.shapeColor=color(255,0,0)
 
} 

if(damage<10)
{

  wall.shapeColor = color(0,255, 0)
 
}

}


  drawSprites();


}


function hasCollided(lbullets,lwall)
{

  bulletsRightEdge = lbullets.x + lbullets.width
wallLeftEdge=lwall.x

  if (bulletsRightEdge >=wallLeftEdge)
{

    return true


}

return false;


}
