$(function () {
    resizeCanvas();
});

$(window).on("resize", function () {
    resizeCanvas();
});

function resizeCanvas() {
    let canvas = $("#canvas");
    canvas.css("width", $(window).width());
    canvas.css("height", $(window).height());
}

document.getElementById("game-area").classList.toggle("hidden");
document.getElementById("start-game").addEventListener("click", startGame);

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let x = Math.floor(Math.random() * (canvas.width - 5));
let y = 5;
let r = 5;
let fy = .2;


function startGame() {
    document.getElementById("game-area").classList.toggle("hidden");
    document.getElementById("home-header").classList.toggle("hidden");
    document.getElementById("game-intro").classList.toggle("hidden");
}


function drawFireBall() {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFireBall();
    y += fy;
    requestAnimationFrame(draw);
}

draw();





