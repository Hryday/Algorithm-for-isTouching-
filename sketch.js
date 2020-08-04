var msprite, nmsprite;
function setup() {
  createCanvas(800,400);
  msprite=createSprite(400, 200, 50, 50);
  nmsprite=createSprite(400, 200, 50, 50);
  msprite.shapeColor="green";
  nmsprite.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  msprite.x=mouseX;
  msprite.y=mouseY;
  isTouching();
  drawSprites();
}
function isTouching(){
  if(msprite.x - nmsprite.x < msprite.width/2 + nmsprite.width/2 
    && nmsprite.x - msprite.x< nmsprite.width/2 + msprite.width/2 
    && msprite.y - nmsprite.y < msprite.height/2 + nmsprite.height/2 
    && nmsprite.y - msprite.y < nmsprite.height/2 + msprite.height/2){
      msprite.shapeColor="red";
  nmsprite.shapeColor="red";
    }
    else {
      msprite.shapeColor="green";
      nmsprite.shapeColor="green";
    }
}