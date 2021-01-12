document.getElementById("game-area").classList.toggle("hidden");
document.getElementById("start-game").addEventListener("click", startGame);

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let x = 5;
let y = 5;
let r = 5;
let fy = 2;

function startGame() {
    document.getElementById("game-area").classList.toggle("hidden");
    document.getElementById("home-header").classList.toggle("hidden");
    document.getElementById("game-intro").classList.toggle("hidden");
}

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

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
    y += fy;
}
setInterval(draw, 100);




