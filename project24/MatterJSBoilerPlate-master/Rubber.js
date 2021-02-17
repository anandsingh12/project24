class Rubber{
  constructor(x,y,radius){
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1
      }
      this.body = Bodies.circle(x, y,radius);
  World.add(world,this.body);
  }

  display(){
      var pos =this.body.position;
      var radius = this.body.radius;
      push();
      ellipseMode("center");
      strokeWeight(4);
      stroke("white");
      fill("red");
      pop();
    }
}
