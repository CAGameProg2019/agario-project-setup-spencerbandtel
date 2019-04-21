class Player extends Food {

    constructor(x,y,radius,color,stroke,name) {
        super(x,y,radius,color);
        this.stroke = stroke;
        this.name = name;
    }
    draw(c){
    c.lineWidth = this.radius*.075;
    c.strokeStyle = this.stroke;
    super.draw(c);
    c.stroke();
    c.fillStyle='#ffffff';
    c.textAlign = 'center';
    c.textBaseline='middle';
    c.lineWidth = Math.round(this.radius*.015);
    let fontSize = Math.round(this.radius*.3);
    c.font = fontSize + 'px Arial';
    c.strokeStyle = 'black';
    c.strokeText(this.name, this.x,this.y);
    c.fillText(this.name,this.x,this.y);
    }

}
Object.assign(Player, Food);
