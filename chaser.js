class Chaser extends Food {

    constructor(x,y,radius,color,stroke,maxSpeed) {
        super(x,y,radius,color);
        this.stroke = stroke;
        this.maxSpeed = maxSpeed;
    }

    update(player){
        let vel = new Vector(player.x,player.y);
        vel.subVector(this);
        let dist = vel.magnitude();
        if(dist > 0){
            vel.toDirVec();
            vel.scale(this.maxSpeed);
            if(dist > this.radius){
                vel.scale(dist/this.radius);
            }
            this.addVector(vel);
        }
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
        c.strokeText("Chaser", this.x,this.y);
        c.fillText("Chaser",this.x,this.y);
    }

}
Object.assign(Chaser, Food);
