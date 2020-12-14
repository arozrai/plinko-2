const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Contraint=Matter.Contraint;

var plinkos = [];
var divisions = []
var particles = []

var count=0

var particle=null

var gameState="play"

var turn=0

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score: "+score,20,30)

  text("100",340,600)
  text("100",420,600)
  text("500",260,600)
  text("100",500,600)
  text("500",180,600)
  text("200",580,600)
  text("500",100,600)
  text("200",660,600)
  text("500",20,600)
  text("200",740,600)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
    
  }

  if (particle!=null){
    particle.display()
     
    if (particle.body.position.y>760){
      if (particle.body.position.x<300){
        count=count+1
        score=score+500;
        particle=null;
        if (count >= 10) gameState = "end";
      }else {
        if (particle.body.position.x>300 && particle.body.position.x<540){
          count=count+1;
          score=score+100;
          particle=null;
          if (count >= 10) gameState = "end"
        }else {
          count=count+1;
          score=score+200;
          particle=null;
          if (count >= 10) gameState = "end"
        }
      }
    }
  }

  if (count>=10){
    text("GAME OVER",350,400)
  }
   
   //if(frameCount%60===0){
     //particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   //}
 
  //for (var j = 0; j < particles.length; j++) {
   
     //particles[j].display();
   //}
   //for (var k = 0; k < divisions.length; k++) {
     
     //divisions[k].display();
   //}
}

function mousePressed(){
  if(gameState!=="end"){
    count++;
    particle=new Particle(mouseX, 10, 10, 10)
    textSize(30)
    text("GAME OVER",350,400)
  }
}