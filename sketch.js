var fixedRect,movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;
  //distance between centers of 2 rectangles = movingRect.x-fixedRect.x(for x axis) 
  //horizontal distace between 2 rectangles = fixedRect.width/2+movingRect.width/2(for x axis)
  //if collision happens cange color to redor else keep it green
  if(movingRect.x-fixedRect.x <fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 && 
    movingRect.y-fixedRect.y <fixedRect.height/2+movingRect.height/2 &&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";

  }
  drawSprites();
}