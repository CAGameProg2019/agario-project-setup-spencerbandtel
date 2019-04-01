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

    scale(radius){
        // change size of vector
        this.radius += radius;
        return this;
    }

    toString() {
        return '<'+this.x+','+this.y+'>'
    }
    print(){
        console.log(this.toString());
    }

}
