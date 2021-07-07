class ground{
    constructor(x,y,width,height ){
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        var options={
            isStatic:true
        }
this.body=Bodies.rectangle (x,y,width,height,options)
World.add(world,this.body)
    }
    display(){
        var grd=this.body.position
        fill("purple")
        rect(grd.x,grd.y,this.width,this.height)
    }
}