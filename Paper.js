class Paper {
    constructor(x,y,width,height) {
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density: 1.2
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.body.position.x=mouse.position.x;
    this.body.position.y=mouse.position.y; 
}
    display(){
        var pos =this.body.position;
         rectmode(center);
         fill(225);
         rect(pos.x,pos.y,this.width,this.height);
    }
} 
