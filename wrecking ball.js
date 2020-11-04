class Wreckingball {
  constructor(x,y) {
    var options = {
    'restitution':0.5,
    'friction':1,
    'density':1

      }
    
     this.body = Bodies.circle(x,y,40,options);
    this.radius = 40
    World.add(world, this.body);
  }
  display(){
  var pos =this.body.position;
  var angle = this.body.angle;

  push();
 translate(pos.x,pos.y);
 rotate(angle);
 
 ellipseMode(RADIUS);
    fill("grey");
    ellipse(0, 0,40 );
 
    pop();
  }
};