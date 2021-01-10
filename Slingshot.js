class SlingShot{
    constructor(bodyAObj, pointBObj){
        var options = {
            bodyA: bodyAObj,
            pointB: pointBObj,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointBObj
        this.sling = Constraint.create(options);
        this.slingImg1 = loadImage("sprites/sling1.png");
        this.slingImg2 = loadImage("sprites/sling2.png");
        this.slingImg3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.slingImg1,200,20);
        image(this.slingImg2,170,20);

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke("#301608");    
            if(pointA.x<220){
                strokeWeight(7);
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
                image(this.slingImg3,pointA.x-30,pointA.y-8,15,30);
            }else{
                strokeWeight(3);
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);
                image(this.slingImg3,pointA.x+25,pointA.y-10,15,30);
            }
            pop();
        }
    }
    
}