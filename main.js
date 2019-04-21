let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = innerWidth-5;
canvas.height = innerHeight-5;

const FOOD_COUNT = 100;
let mpos;

let player;
let foods = [];

let colors = [
    '#7D6AF8',
    '#F36C91',
    '#E76262',
    '#46DBE5',
    '80F2DA',
    '#B56FEC',
    '#F398E0'
];

let strokeColors = [
    '#4937BB',
    '#CF4B6F',
    '#C74040',
    '#1EA3AB',
    '#32C0A2',
    '#8F46C8',
    '#F120C5'
];


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
    name = prompt("What's Your Name?");
    let color = randomColor();
    let stroke = strokeColors[colors.indexOf(color)];
    player = new Player(canvas.width/2,canvas.height/2, 25, color, stroke,name);
    if(name == "Gregory" || name == "gregory"){
        alert("You dare to challenge me again Gregory?");
    }

    for(var i = 0; i <= FOOD_COUNT; i++){
        generateFood();
    }
    update();
}


function update() {
    if(name == "Gregory" || name == "gregory"){
        c.fillStyle = "red";
        c.fillRect(0,0,canvas.width,canvas.height);
        c.fillStyle = "black";
        c.textAlign = 'center';
        c.textBaseline='middle';
        c.font = '100px Arial';
        c.fillText("Never Again",canvas.width/2,canvas.height/2);
        for(let i = 0; i < foods.length; i++){
            foods[i].color = "darkRed";
            foods[i].y +=3;
        }
    } else{
        c.clearRect(0,0,canvas.width,canvas.height);
    }
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
    player.draw(c);


    requestAnimationFrame(update);
}

window.addEventListener('load', function() {
    init();

    window.addEventListener('mousemove', function(event){
        mpos.x = event.clientX - canvas.offsetLeft;
        mpos.y = event.clientY - canvas.offsetTop;
    });
});
