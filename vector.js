class Vector {

    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    addVector(vec){
        this.x += vec.x;
        this.y += vec.y;
        return this;
    }

    // For hw
    subVector(vec){
        // subtract instead of addvector
        this.x -= vec.x;
        this.y -= vec.y;
        return this;
    }

    scale(s){
        // change size of vector
        this.s = s;
        pos.x *= this.s;
        pos.y *= this.s;
    }

    dist(vec){
        let x = vec.x-this.x;
        let y = vec.y-this.y
        return Math.sqrt((x*x)+(y*y));
    }

    toString() {
        return '<'+this.x+','+this.y+'>'
    }
    print(){
        console.log(this.toString());
    }

}
