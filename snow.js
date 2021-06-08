class Snow{
constructor(x, y, width, height, angle) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("snow4.webp");
    World.add(world, this.body);
}

display(){
    super.display();

    for(var i=0; i<this.trajectory.length; i++){
        image(this.image, this.trajectory[i][0], this.trajectory[i][1]);
      }
}
}