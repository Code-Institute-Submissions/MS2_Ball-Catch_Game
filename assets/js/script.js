//$(function () {
//  resizeCanvas();
//});

$(window).on("resize", resizeCanvas());
$(window).on("load", resizeCanvas());

function resizeCanvas() {
    let canvas = $("#canvas");
    let canvas2 = $("#warrior");
    canvas.css("width", $(window).width());
    canvas.css("height", $(window).height());
    canvas2.css("width", $(window).width());
}

document.getElementById("game-area").classList.toggle("hidden");
document.getElementById("start-game").addEventListener("click", startGame);

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
//let x = Math.floor(Math.random() * (canvas.width - 5));
//let y = 5;
let r = 5;
//let fy = .2;
let fireBalls = [];
let fireBallSpeed = 1;
let fireBallRate = 2000;
let lastFireBall = -1;
let colors = ["red", "green", "orange"];



function startGame() {
    document.getElementById("game-area").classList.toggle("hidden");
    document.getElementById("home-header").classList.toggle("hidden");
    document.getElementById("home-footer").classList.toggle("hidden");
    document.getElementById("game-intro").classList.toggle("hidden");
}


function createFireBalls() {
    let color = colors[Math.floor(Math.random() * colors.length)];
    let fireBall = {
        c: color,
        x: Math.random() * (canvas.width - 10) + 5,
        y: 5,
    }
    fireBalls.push(fireBall);
}

function fireballs() {
    for (let i = 0; i < fireBalls.length; i++) {
        let fireBall = fireBalls[i];
        fireBall.y += fireBallSpeed;
        ctx.beginPath();
        ctx.arc(fireBall.x, fireBall.y, r, 0, Math.PI * 2);
        ctx.fillStyle = fireBall.c;
        ctx.fill();
        ctx.closePath();

    }
}

function warrior() {
    let canvas2 = document.getElementById("warrior");
    let ctx = canvas2.getContext("2d");
    img = new Image();
    img.onload = function() {
        ctx.drawImage(img, 100, -20, 80, 200);
    }
    img.src = "assets/images/defender.png"
}

function draw() {
    let timeStamp = Date.now();
    if (timeStamp > (lastFireBall + fireBallRate)) {
        lastFireBall = timeStamp;
        createFireBalls();
    }
    requestAnimationFrame(draw);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fireballs();
    warrior();
}
draw();

/*

function dropFireBalls() {
    let timeStamp = Date.now();
    if (timeStamp > (lastFireBall + fireBallRate)) {
        lastFireBall = timeStamp;
        createFireBalls();
    }

    requestAnimationFrame(dropFireBalls);
    ctx.clearRect(0, 0, canvas.width, canvas.height);




    for (let i = 0; i < fireBalls.length; i++) {
        let fireBall = fireBalls[i];
        fireBall.y += fireBallSpeed;
        ctx.beginPath();
        ctx.arc(fireBall.x, fireBall.y, r, 0, Math.PI * 2);
        ctx.fillStyle = fireBall.c;
        ctx.fill();
        ctx.closePath();

    }
}
dropFireBalls();

*/
/*
let img = new Image();
    img.src = "../images/defender.png";
    ctx.drawImage(img, 15, 15);
*/
/*
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

*/