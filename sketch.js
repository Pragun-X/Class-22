const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;

var ground;
var ball;
var ball1;

function setup() {
  createCanvas(400,400);

  engine= Engine.create();
  world= engine.world;

  var gOptions = { isStatic : true  }

  ground=Bodies.rectangle(200,380,400,30,gOptions);
  World.add(world,ground);

  ball=Bodies.circle(200,100,50,{restitution :1});
  World.add(world,ball);

  ball1=Bodies.circle(100,50,45,{restitution :1});
  World.add(world,ball1);
  
}

function draw() {
  background(0); 

  Engine.update(engine);
  
  fill("aqua");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,30);
  
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,50);

  ellipse(ball1.position.x,ball1.position.y,45);

}