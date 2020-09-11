class Box{
    constructor(x,y){

        this.width = 150;
        this.height = 180;
        this.thickness = 20;

        this.image = loadImage("dustbingreen.png")

        this.bottombody = Bodies.rectangle(x,y,this.width,this.thickness,{isStatic : true});
                
        World.add(world,this.bottombody);

    }

    display(){

        var pos = this.bottombody.position;

        var angle = this.bottombody.angle;
        push();
        translate(pos.x,pos.y+10);
        rotate(angle);

        imageMode(CENTER);
        image(this.image,0,-this.height/2,this.width,this.height);
        pop();

    }

}
 