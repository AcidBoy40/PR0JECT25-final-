class Ground
{
    constructor(x,y,width,height)
    {
        var options={
            isStatic:true
        }

        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = x,
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display()
    {
        var groundpos = this.body.position;

        push();
        rectMode(CENTER);
        fill("white");
        rect(groundpos.x,groundpos.y,this.width,this.height);
        pop();

    }
}