const { CubeTexture } = require("three");

const canvas = document.getElementById("pong")

const ctx = canvas.getContext("2d")

let rectX = 0

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
    drawRect( 0, 0, 600, 400, "black" );
    drawRect(rectX, 100, 100, 100, "red");
    rectX = rectX + 100;
}

setInterval( render, 1000)