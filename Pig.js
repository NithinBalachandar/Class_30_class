class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visiblity = 255;// Fully Visible
  }
  display(){
    console.log(this.body.speed)
    if(this.body.speed < 3){
      //pig is idle on the screen
      super.display();//this line of code is going to call the display function in the BaseClass
    } else{
      //bird attacking the pig
      push();
      World.remove (world, this.body);
      tint(255,this.visiblity);
      image(this.image,this.body.position.x, this.body.position.y, 50,50);
      this.visiblity = this.visiblity -5;
      pop();
    }
  }
};