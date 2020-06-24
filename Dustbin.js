class Dustbin {

    constructor(x,y,width,height){

      var options = {
          isStatic: true,
          render: {opacity:0}
      }
        
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world,this.body);
      this.dustbin_img = loadImage("DUSTBIN.png")
      console.log(this.dustbin_img);
    }

    display(){

    var pos = this.body.position; 
   //fill(246,195,204);
   // rectMode(CENTER);
   // rect(pos.x,pos.y,this.width,this.height);
   imageMode(CENTER);
    image(this.dustbin_img,600,572,162,155)

    }
 
 }