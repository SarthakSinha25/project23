class Redzone {
constructor(x,y,width,height){
    var options={
        'restitution':0.5,
        'friction':1.5
    }
    this.Body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,Body);
}
display(){
    
    var pos = this.Body.position;
        
    push();
    fill("red");
    rectMode(CENTER);
    translate(pos.x, pos.y);
    rect(0, 0, this.width, this.height);
    pop();


}
}