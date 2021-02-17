class Hammer {
  constructor(x, y) {
    var options = {
        'restitution':0.5,
        'friction':1.0,
        'density':2
    }
    this.body = Bodies.rectangle(x, y, 100, 10, options);
    this.width = 100;
    this.height = 10;
    World.add(world, this.body);
  }
  display(){
    this.body.position.x = mouseX;
      this.body.position.y = mouseY;
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    strokeWeight(2);
    stroke("yellow");
    fill("red");
    rect(0, 0, this.width, this.height);
    pop();
    
  }
};
