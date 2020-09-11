class Ball {
    constructor(x, y) {
      var options = {
          isStatic : false,
          restitution : 0.3,
          friction : 0.5,
          density : 0.055
      }

      this.body = Bodies.circle(x, y,70,options);
          
      this.width = 70;
      this.height = 70;
      
      this.image = loadImage("paper.png");
            
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
  
      push();
      translate(pos.x,pos.y);
        
      imageMode(RADIUS);
      image(this.image,0, 0,this.width,this.height);

      //ellipseMode(RADIUS);
      //ellipse(0, 0,this.width,this.height);

      pop();
    }
  };