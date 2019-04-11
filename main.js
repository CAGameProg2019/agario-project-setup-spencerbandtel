let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = innerWidth-5;
canvas.height = innerHeight-5;

const FOOD_COUNT = 100;
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

name = prompt("What's Your Name?");

function randomColor(){
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function generateFood(){
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let color = randomColor();
    foods.push(new Food(x,y,10,color));
}

function init() {

    mpos = new Vector(canvas.width/2, canvas.height/2);

    player = new Player(canvas.width/2,canvas.height/2, 25, randomColor());

    for(var i = 0; i <= FOOD_COUNT; i++){
        generateFood();
    }
    update();
}

function update() {
    c.clearRect(0,0,canvas.width,canvas.height);

    player.x = mpos.x;
    player.y = mpos.y;

    for(let i = 0; i < foods.length; i++){
        let eaten = player.intersects(foods[i]);
        if(!eaten){
            foods[i].draw(c);
        }else{
            player.addMass(foods[i].mass);
            foods.splice(i,1);
            i--;
        }
    }
    while(foods.length < FOOD_COUNT){
        generateFood();
    }
    player.draw(c,name);


    requestAnimationFrame(update);
}

window.addEventListener('load', function() {
    init();

    window.addEventListener('mousemove', function(event){
        mpos.x = event.clientX - canvas.offsetLeft;
        mpos.y = event.clientY - canvas.offsetTop;
    });
});
