class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png")
      this.visiblity = 255
    }
    display(){
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
      console.log(this.body.speed);
      if(this.body.speed<3)
      {
       super.display(); 
      }else{
        push();
        this.visiblity-this.visiblity-5
        World.remove(world, this.body);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        tint(255,this.visiblity);
        pop();
      }
    }
}