let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 28;
let snake = [];
snake[0] = {
    x: 6 * box,
    y: 6 * box
}

function criarBG() {
    context.fillStyle = "black";
    context.fillRect(0 , 0, 16 * box, 16 * box);
}

function criarCobrinha() {
    for(i=0; i < snake.length; i++ ){
        context.fillStyle = "write";
        context.fillRect(snake[1].x);
    }
}

criarBG();