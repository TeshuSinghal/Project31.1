const Engine = Matter.Engine; 
const World= Matter.World; 
const Bodies = Matter.Bodies; 

var particles = []; 
var plinkos = []; 
var divisions = []; 

var ground; 
var divisionHeight = 300; 


function setup() { 
  createCanvas(480,800); 
  engine = Engine.create(); 
  world = engine.world; 
  
  ground = new Ground(240, 790, 480, 20); 
  
  for(var k = 0; k <= width; k = k+ 80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 40; j<= width; j = j+50){ 
    plinkos.push(new Plinko(j, 75, 20)); 
  } 
  for(var j = 15; j<= width-10; j = j+50){ 
    plinkos.push(new Plinko(j, 175, 20)); 
  } 
  for(var j = 40; j<= width; j = j+50){ 
    plinkos.push(new Plinko(j, 275, 20)); 
  } 
  for(var j = 15; j<= width-10; j = j+50){ 
    plinkos.push(new Plinko(j, 375, 20)); 
  } 
  
  
  
  
  Engine.run(engine); 
} 

function draw() { 
  background(0); 
  Engine.update(engine); 
  
  ground.display(); 
  
  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 20, 20));
  }

  
  
  drawSprites(); 
}

