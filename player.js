class Player extends Food {

    constructor(x,y,radius,color) {
        super(x,y,radius,color);
    }
    draw(c,name){
        c.fillStyle = this.color;
        c.strokeStyle = "#9932CD";
        c.lineWidth = 4;
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        c.closePath();
        c.fill();
        c.stroke();

        c.fillStyle = "black";
        c.fillText(name,this.x-15,this.y+3,50);
    }

}
Object.assign(Player, Food);
