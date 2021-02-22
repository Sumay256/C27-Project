class Rope{
    constructor(bodyA,pointB){
        var options1 = {
            bodyA:bodyA,
            pointB:pointB,
            length:300,
            stiffness:0.03
        }
        this.pointB=pointB;
        this.bodyA=bodyA;
        this.convar=Con.create(options1);
        World.add(world,this.convar);
    }
    display(){
        
       
            var pointA = this.convar.bodyA.position;
            var pointB = this.pointB;
           push();
            strokeWeight(4);
            line(pointA.x, pointA.y-25, pointB.x, pointB.y);
            pop();
            
    }
}