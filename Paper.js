class Paper {

constructor (x,y,radius){

    var options = {
        isStatic: false,
        restitution: 0.3,
        friction: 0.5,
        density:1.2,
        render: {opacity: 0}

    }

    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    World.add(world,this.body);
    this.paper_img = loadImage("PAPER.png");
    console.log(this.body);
}


 

display(){

    fill(255);
    imageMode(CENTER);
   image(this.paper_img,this.body.position.x,this.body.position.y,45,45);
    this.body.density = 0.9
}

}