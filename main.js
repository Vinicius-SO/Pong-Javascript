const canvas = document.getElementById("pong")

const ctx = canvas.getContext("2d")

let rectX = 0

const framerPerSecond = 50

const user = {
    x: 0,
    y: canvas.height/2 - 100/2,
    width:10,
    height: 100,
    color: 'WHITE',
    score: 0,
}
const com = {
    x: canvas.width -10,
    y: canvas.height/2 - 100/2,
    width:10,
    height: 100,
    color: 'WHITE',
    score: 0,
}
const net = {
    x: canvas.width/2 - 2/2,
    y: 0,
    width: 2,
    height: 10,
    color: "WHITE",
}

const ball = {
    x: canvas.width/2,
    y: canvas.height/2,
    radius: 10,
    color: "WHITE"
}


function drawNet(){
    for(let i=0; i<= canvas.height; i+= 15){
        drawRect(net.x, net.y + i, net.width, net.height, net.color)
    }
}

function drawRect(x, y, w, h, color){
    ctx.fillStyle = color;
    ctx.fillRect(x,y,w,h)

}

function drawCircle(x, y, r, color){
    ctx.fillstyle = color
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2,false);
    ctx.closePath();
    ctx.fill();
}

function drawText(text, x, y, color){
    ctx.fillStyle = color;
    ctx.font = "75px fantasy";
    ctx.fillText(text, x, y)
}

function render() {
    drawRect( 0, 0, canvas.width, canvas.height, "black" );
    drawText(user.score, canvas.width/4, canvas.height/5, "WHITE")
    drawText(com.score, 3*canvas.width/4, canvas.height/5, "WHITE")
    drawNet();
    drawRect(user.x, user.y, user.width, user.height, user.color)
    drawRect(com.x, com.y, com.width, com.height, com.color)
    drawCircle(ball.x, ball.y, ball.radius, ball.color);

}
function game(){

    render();
}


setInterval( game, 1000/framerPerSecond)