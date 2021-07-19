class Boat{
    constructor(x, y, width, height, boatPos, boatAnimation){
    var options = {
       restitution:0.8,
       friction:1.0,
       density:1.0,
       label:"boat"    
    }

    this.animation = boatAnimation;
    this.speed = 0.05;
    this.boatPosition = boatPos;
    this.isBroken = false

    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    World.add (world, this.body);

    }
    animate(){
        this.speed += 0.05% 1.1;       
    }

    remove(index){
        this.animation = brokenBoatAnimation;
        this.speed = 0.05;
        this.width = 300;
        this.height = 300;
        this.isBroken = true;
        setTimeout(()=>{
            Matter.World.remove(world,boats[index].body);
            boats.splice(index,1)
        },2000);
        
    }

    display(){
        var pos = this.body.position
        var angle = this.body.angle
        var index = floor(this.speed%this.animation.lenght)
        push();
        translate(pos.x, pos.y)
        rotate(angle);
        imageMode(CENTER); 
        image(this.animation[index], 0, this.boatPosition, this.width, this.height);
        noTint();
        pop();
    }
}