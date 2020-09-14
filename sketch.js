const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    
    //layer1
    box1 = new Box(925,392,50,50);
    box2 = new Box(1075,392,50,50);
    pig1= new Pig(1000,392);
    log1 = new Log(1000,370,210,PI/2);

    //layer2
    box3 = new Box(930,367,50,50);
    box4 = new Box(1075,367,50,50);
    pig2 = new Pig(1000,367,50,50);
    log2 = new Log(1004,345,210,PI/2);

    //layer3
    box5 = new Box(1000,342,50,50);
    log3 = new Log(940,342,80,PI/7);
    log4 = new Log(1065,342,80,-PI/7);

    //bird
    bird = new Bird(100,300,40,40);

    

}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    
    //layer1
    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    //layer2
    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    //layer3
    box5.display();
    log3.display();
    log4.display();

    //bird
    bird.display();


}




