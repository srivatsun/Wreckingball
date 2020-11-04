const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,wreckingball;
var band;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,550,1200,20);
    

    
    



// // first column
    box1 = new Box(700,500);
    box2 = new Box(700,450);
    box3 = new Box(700,400);
    box4 = new Box(700,350);
    box5 = new Box(700,300);
    box6 = new Box(700,250);
    box7 = new Box(700,200);
    box8 = new Box(700,150);
    box9 = new Box(700,100);
    box10 = new Box(700,50);   
    
    //2nd column
    box11 = new Box(750,500);
    box12 = new Box(750,450);
    box13 = new Box(750,400);
    box14 = new Box(750,350);
    box15 = new Box(750,300);
    box16 = new Box(750,250);
    box17 = new Box(750,200);
    box18 = new Box(750,150);
    box19 = new Box(750,100);
    box20 = new Box(750,50);   
    
    box21 = new Box(800,500);
    box22 = new Box(800,450);
    box23 = new Box(800,400);
    box24 = new Box(800,350);
    box25 = new Box(800,300);
    box26 = new Box(800,250);
    box27 = new Box(800,200);
    box28 = new Box(800,150);
    box29 = new Box(800,100);
    box30 = new Box(800,50);   


    wreckingball = new Wreckingball(600,400);

    band = new Sling(wreckingball.body,{x:400,y:50})

}

function draw(){
    background("black");
    Engine.update(engine);

    ground.display();
    

    wreckingball.display();
console.log(wreckingball);

    band.display();
console.log(band);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    


   


    
}


function mouseDragged(){
    Matter.Body.setPosition(wreckingball.body,{x:mouseX,y:mouseY})
}
