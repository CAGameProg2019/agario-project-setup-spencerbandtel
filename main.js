let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

let pos = new Vector(5,7);
let vel = new Vector(1,1);
vel.scale(2);
vel.print();
pos.subVector(vel);
pos.print();

function init() {
    update();
}

function update() {
    c.clearRect(0,0,canvas.width,canvas.height);

    c.beginPath();
    c.arc(pos.x,pos.y,50,0,Math.PI*2,false);
    c.closePath();
    c.stroke();

    requestAnimationFrame(update);
}

window.addEventListener('load', function(event) {
    init();
});
