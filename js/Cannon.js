class Cannon{
    constructor(x, y, width, height, angle){
   
    this.x = x;
    this.y = y;

    this.width = width;
    this.angle = angle;
    this.height = height;
    this.cannonImg = loadImage("assets/CANON.png")
    this.cannonBase = loadImage("assets/cannon_base.png")
    //this.body = Bodies.rectangle(x, y, this.width, this.height, options);
   // World.add (world, this.body);

    }

    display(){
       if(keyIsDown(RIGHT_ARROW)&&this.angle<0.1){
           this.angle+=0.01
       }

       if(keyIsDown(LEFT_ARROW)&&this.angle>-1.45){
        this.angle-=0.01
    } 
       fill(103, 110, 106)
        push();
        translate(this.x, this.y)
        rotate(this.angle)
        imageMode(CENTER) 
        image(this.cannonImg, 0, 0, this.width, this.height)
        pop();
        image(this.cannonBase, 70, 20, 200, 200, PI,TWO_PI )
        noFill();
    }
}