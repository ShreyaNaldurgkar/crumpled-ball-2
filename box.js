class Box {
    constructor(x,y,width,height){
    var options = {
    isStatic:true,    
    restitution:1,
    density:2
    }

    this.body =Bodies.rectangle(x,y,width,height);
    this.width = width;
    this.height = height;
    this.image = loadImage("sprites/dustbingreen.png");
    World.add(world, this.body);
    
    }
    display(){
    var pos = this.body.position;
    
    imageMode(CENTER)
    image(this.image,595,592,this.width,this.height);   
    }
}