let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = innerWidth-5;
canvas.height = innerHeight-5;

let mpos;

let player;
let foods = [];

let colors = [
    'brown',
    'chocolate',
    'saddlebrown',
    'sienna',
    'peru',
    'tan',
    'wheat'
];
function randomColor(){
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function init() {

    mpos = new Vector(canvas.width/2, canvas.height/2);

    player = new Player(canvas.width/2,canvas.height/2, 25, randomColor());

    for(var i = 0; i <= 100; i++){
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let color = randomColor();
        foods.push(new Food(x,y,10,color));
    }
    update();
}

function update() {
    c.clearRect(0,0,canvas.width,canvas.height);

    for(var i = 0; i < foods.length; i++){
        foods[i].draw(c);
    }
    player.x = mpos.x;
    player.y = mpos.y;

    player.draw(c);

    requestAnimationFrame(update);
}

window.addEventListener('load', function() {
    init();

    window.addEventListener('mousemove', function(event){
        mpos.x = event.clientX - canvas.offsetLeft;
        mpos.y = event.clientY - canvas.offsetTop;
        mpos.print();
    });
});
