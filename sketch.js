const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
 
var particle;
var plinkos = [];
var divisions =[];

var divisionHeight=300;
var score =0;
var turn = 0;

var gameState = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75, 0));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175, 0));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275, 0));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375, 0));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  fill("white");
  text("Score : "+score,20,30);
  text("500", 260, 520);
  text("500", 180, 520);
  text("500", 100, 520);
  text("500", 20, 520);
  text("100", 340, 520);
  text("100", 420, 520);
  text("100", 500, 520);
  text("200", 580, 520);
  text("200", 660, 520);
  text("200", 740, 520);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
  //for (var j = 0; j < particles.length; j++) {
   
     //particles[j].display();
   //}
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle !== null) {
     particle.display();

     if(particle.body.position.y>760) {
       if(particle.body.position.x<300) {
         score = score+500;
         particle = null;
          if(count>=5) gameState = "end";
          turn = turn+1;
       }
     }
     if(particle.body.position.x>301 && particle.body.position.x<600) {
       score = score+100;
       particle = null;
       if(count>=5) gameState = "end";
       turn = turn+1;
     }

     if(particle.body.position.x>601 && particle.body.position.x<900) {
       score = score+200;
       particle = null;
       if(count>=5) gameState = "end";
       turn = turn+1;
     }
   }

   if(turn === 5) {
     gameState = "end";
     text("GAME OVER", 400, 400);
   }

}

function mousePressed() {
  if(gameState !== "end") {
    count++;
    particle = new Particle(mouseX, 10, 10);
    particle.display();
  }
}