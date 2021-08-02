class paper
{
constructor(x,y,w,h)
{
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0,
        density:1.2
    }
    this.image=loadImage("paper.png")
    paperObject.x= mouseX;
    paperObject.y= mouseY;
}

display()



}
function keyPressed(){
    if (keyCode === UP_ARROW) {
      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:145})
    }


}