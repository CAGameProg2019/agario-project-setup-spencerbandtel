let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = innerWidth-5;
canvas.height = innerHeight-5;

const FOOD_COUNT = 100;
let mpos;

let player;
let chaser;
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
    let dx = (Math.random() - 0.5) * 2;
    let dy = (Math.random() - 0.5) * 2;
    foods.push(new Food(x,y,10,color,dx,dy));
}

function init() {

    mpos = new Vector(canvas.width/2, canvas.height/2);
    name = prompt("What's Your Name?");
    alert("Goal: Grow to 200 before getting caught");
    let color = randomColor();
    let stroke = strokeColors[colors.indexOf(color)];
    player = new Player(canvas.width/2,canvas.height/2, 25, color, stroke,name,4);
    chaser = new Chaser(canvas.width/5,canvas.height/5, 40, color + '', stroke + '',.5);
    for(var i = 0; i <= FOOD_COUNT; i++){
        generateFood();
    }
    update();
}


function update() {
    if(player.radius >= 201){
        alert("You win!");
    } else{
        let caught = player.intersects(chaser);
        if(caught){
            alert("You Lose");
        } else{

            c.clearRect(0,0,canvas.width,canvas.height);
            player.draw(c);
            chaser.draw(c);

            player.update(mpos);
            chaser.update(player);

            for(let i = 0; i < foods.length; i++){
                let eaten = player.intersects(foods[i]);
                if(!eaten){
                    foods[i].draw(c);
                    foods[i].move();
                }else{
                    player.addMass(foods[i].mass);
                    foods.splice(i,1);
                    i--;
                }
            }
            while(foods.length < FOOD_COUNT){
                generateFood();
            }

            requestAnimationFrame(update);
        }
    }
}

window.addEventListener('load', function() {
    init();

    window.addEventListener('mousemove', function(event){
        mpos.x = event.clientX - canvas.offsetLeft;
        mpos.y = event.clientY - canvas.offsetTop;
    });
});
