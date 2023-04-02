var path,boy, leftBoundary,rightBoundary, topBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  
}

function setup(){
  
  createCanvas(400,400);
 


  // Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(200,200,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  


leftBoundary=createSprite(0,0,100,800);

// leftBoundary.invisible = false;
// leftBoundary.visible = true;
// leftBoundary.invisible = true;
 leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;


topBoundary = createSprite(0,-60,800);
topBoundary.visible = false;


}

function draw() {
    background(0);
    path.velocityY = 4;

    
    edges= createEdgeSprites();
    boy.collide(edges[3]);
    boy.collide(leftBoundary);
    boy.collide(rightBoundary);
    boy.collide(topBoundary);
   

    
    
    
    if(keyIsDown(RIGHT_ARROW)){
  boy.x = boy.x + 3;
    }
    
    
    if(keyIsDown(LEFT_ARROW)){
      boy.x = boy.x - 3;
      }
      
      if(keyIsDown(UP_ARROW)){
        boy.y = boy.y - 3;
        }
        
        if(keyIsDown(RIGHT_ARROW)){
          boy.x = boy.x + 3;
         }
          
         if(keyIsDown(DOWN_ARROW)){
          boy.y = boy.y + 3;
           }
           
  
        
    //code to reset the background

    /*if(path.y > 400 ){
      path.y = height/2;
    }*/

    if(path.y > 400 ){
    
    path.y = height/2;
    }

    /*if(path.y > 400 ){
  path.y = height/2;}*/

  /*if(path.y > 400 ){path.y = height/2;}*/
    
    drawSprites();
  }
