class Dustbin
{
    constructor(x,y,width,height)
    {
        var options={
            isStatic:true,
        }
        
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        this.x = x,
        this.y = y;
        this.width = width;
        this.height = height;
        // this.image = loadImage("dustbin.png");
        World.add(world, this.body);
    }

    display()
    {
        var dustbinpos = this.body.position;

        push();
        rectMode(CENTER);
        // imageMode(CENTER);
        // image(this.image,dustbinpos.x,dustbinpos.y,this.width,this.height);
        rect(this.x,this.y,this.width, this.height);
        // fill("black");
        pop();

    }
}