let canvas = document.getElementById("Snake");
let context = canvas.getContext("2d");
let box = 32;
let Snake = [];
Snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let diretion = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarcobrinha() {
    for(i=0; i < Snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(Snake[i].x, Snake[i].y, box, box);
    }
}

function drawFood() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

function update (event){
    if(event.keyCode == 37 && diretion != "right") diretion = "left";
    if(event.keyCode == 38 && diretion != "down") diretion = "up";
    if(event.keyCode == 39 && diretion != "left") diretion = "right";
    if(event.keyCode == 40 && diretion != "up") diretion = "down";
}

function iniciarjogo() {

    if(Snake[0].x > 15 * box && diretion == "right") Snake[0].x = 0;
    if(Snake[0].x < 0 && diretion == "left") Snake[0].x = 16 * box;
    if(Snake[0].y > 15 * box && diretion == "down") Snake[0].y = 0;
    if(Snake[0].y < 0 && diretion == "up") Snake[0].y = 16 * box;

    for(i = 1; i < Snake.length; i++){
        if(Snake[0].x == Snake[i].x && Snake[0].y == Snake[i].y){
            clearInterval(jogo);
            alert('Game Over :(');
        }
    }

    criarBG();
    criarcobrinha();
    drawFood();

    let Snakex = Snake[0].x;
    let Snakey = Snake[0].y;

    if(diretion == "right") Snakex += box;
    if(diretion == "left") Snakex -= box;
    if(diretion == "up") Snakey -= box;
    if(diretion == "down") Snakey += box;

    if(Snakex != food.x || Snakey != food.y){
        Snake.pop();
    }else {
       food.x = Math.floor(Math.random() * 15 + 1) * box;
       food.y = Math.floor(Math.random() * 15 + 1) * box;
    }



    let newHead = {
        x: Snakex,
        y: Snakey,
    }

    Snake.unshift(newHead);
}

let jogo = setInterval(iniciarjogo, 100)