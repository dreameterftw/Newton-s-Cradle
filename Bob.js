class Bob{
    constructor (x,y){
        
        this.body=Bodies.circle(x,y,30);
        this.x=x;
        this.y=y;
        this.radius=30;

        World.add(world,this.body) 
    }
display(){
    var pose=this.body.position;
    push ()       
    fill ("green");
    ellipseMode(RADIUS);
    ellipse (pose.x,pose.y,this.radius,this.radius)
    pop ()
}
}