class Launcher{

    constructor(bodyA,pointB){

        var options = {
            'bodyA': bodyA,
            'pointB': pointB,
            'length': 15,
            'stiffness': 0.04
        }
       this.launch = Constraint.create(options) 
       this.bodyA = bodyA;
       this.pointB = pointB;
       World.add(world,this.launch);
    }

    display(){
        if(this.launch.bodyA){  
        strokeWeight(8);
        line (this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
    }

    fly(){
    
    this.launch.bodyA = null;

   }

}