class Plinko {
    constructor(x, y, radius) {
        var options = {
            restitution:0.8,
            friction:1.0,
            density:1.0,
            isStatic:true
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);

        fill("white");
        ellipseMode(RADIUS);
        ellipse(0, 0, 8);
        pop();
      }
}