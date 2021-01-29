$(window).on("resize", resizeCanvas());
$(window).on("load", resizeCanvas());

function resizeCanvas() {
    let canvas = $("#canvas");
    let canvas2 = $("#canvas2");
    canvas.css("width", $(window).width());
    canvas.css("height", $(window).height());
    canvas2.css("width", $(window).width());
}

document.getElementById("game-area").classList.toggle("hidden");

let canvas = document.getElementById("canvas");
let canvas2 = document.getElementById("canvas2");
let ctx = canvas.getContext("2d");
let ctx2 = canvas2.getContext("2d");
let r = 5;
let fireBalls = [];
let fireBallSpeed = .5;
let fireBallRate = 2000;
let lastFireBall = -1;
let colors = ["red", "green", "orange", "Blue", "Purple", "Pink"];
let warriorx = (canvas.width - 64) / 2;
let rightPressed = false;
let leftPressed = false;
let lives = 3;
let score = 0;

function eventListeners() {
    document.getElementById("start-game").addEventListener("click", startGame);
    document.getElementById("start-game").addEventListener("click", draw);
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    document.getElementById("move-right").addEventListener("click", moveright);
    document.getElementById("move-left").addEventListener("click", moveleft);
    document.getElementById("reset").addEventListener("click", tryAgain);
}

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
        status: 1,
    }
    fireBalls.push(fireBall);
}

function fireBallsDrop() {
    for (let i = 0; i < fireBalls.length; i++) {
        let fireBall = fireBalls[i];
        if (fireBalls[i].status == 1) {
            fireBall.y += fireBallSpeed;
            ctx.beginPath();
            ctx.arc(fireBall.x, fireBall.y, r, 0, Math.PI * 2);
            ctx.fillStyle = fireBall.c;
            ctx.fill();
            ctx.closePath();
        }
    }
}

function speedup() {
    if (score > 2) {
        //fireBallSpeed += .001;
        //fireBallRate -= 1;
    }
}

function isFireBallAlive(fireBall, fireBallSpeed, canvas) {
    return (fireBall.y + fireBallSpeed > canvas.height - 50);
}

function didNinjaStrike(fireBall, warriorx, fireBall, warriorx) {
    return (fireBall.x > warriorx && fireBall.x < warriorx + 64);
}

function updateScore() {
        fireBalls.splice(0,1);
        score ++;
        document.getElementById("score-count").innerHTML = score;
}

function updateLives() {
    //fireBall.status = 0;
    fireBalls.splice(0,1);
    lives -= 1;
    document.getElementById("live-count").innerHTML = lives;
    return lives;
}

function gameOver() { 
    //alert("Game Over");
    document.getElementById("game-area").classList.toggle("hidden");
    document.getElementById("home-header").classList.toggle("hidden");
    document.getElementById("home-footer").classList.toggle("hidden");
    document.getElementById("game-intro").classList.toggle("hidden");
    document.getElementById("reset").classList.toggle("hidden");
    document.getElementById("start-game").classList.toggle("hidden");
    document.getElementById("intro").classList.toggle("hidden");
    document.getElementById("controls").classList.toggle("hidden");
    document.getElementById("game-over").innerHTML = "GAME OVER!!!!!";
    document.getElementById("end-score").innerHTML = "You Scored " + score + "!! Better luck next time!! ";

    //document.location.reload();
    //clearInterval(interval);
}

function tryAgain() {
    location.reload();
}

function strike() {
    for (let s = 0; s < fireBalls.length; s++) {
        let fireBall = fireBalls[s];
        //fireBall.y += fireBallSpeed;
        //fireBall.x = fireBall.x;
               
                
        if (fireBall.status != 1) {
            return false;
        }

        if (!isFireBallAlive(fireBall, fireBallSpeed, canvas)) {
            return false;
        }
        
        if (didNinjaStrike(fireBall, warriorx, fireBall, warriorx)) {
            console.log("Collide"); 
            //fireBalls.splice(s,1);
            updateScore();
        }
        
        else {
            if (!updateLives()) {
                gameOver();
            }            
        } 
    } 
} 

        


/*
function strike() {
    for (let s = 0; s < fireBalls.length; s++) {
        let fireBall = fireBalls[s];
        fireBall.y += fireBallSpeed;
        fireBall.x = fireBall.x;
        if (fireBall.status == 1) {
            if (fireBall.y + fireBallSpeed > canvas.height - 50) {
                if (fireBall.x > warriorx && fireBall.x < warriorx + 64) {
                    fireBall.status = 0;
                    score += 1;
                    document.getElementById("score-count").innerHTML = score;
                }
                else {
                    fireBall.status = 0;
                    lives -= 1;
                    document.getElementById("live-count").innerHTML = lives;


                    if (!lives) {
                        alert("Game Over");
                        document.location.reload();
                        clearInterval(interval);
                    }
                }
            }
        }
    }
}
*/

function warrior() {
    img = new Image();
    img.onload = function () {
        ctx2.clearRect(0, 0, canvas.width, canvas.height);
        ctx2.drawImage(img, warriorx, -20, 64, 256);
    }
    img.src = "assets/images/defender.png"
}

function moveright() {
    warriorx += 40;
    if (warriorx + 64 > canvas.width) {
        warriorx = canvas.width - 45;
    }
}

function moveleft() {
    warriorx -= 40;
    if (warriorx < 0) {
        warriorx = -20;
    }
}

function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function draw() {
    let timeStamp = Date.now();
    if (timeStamp > (lastFireBall + fireBallRate)) {
        lastFireBall = timeStamp;
        createFireBalls();
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fireBallsDrop();
    warrior();
    strike();
    speedup();

    if (rightPressed) {
        warriorx += 7;
        if (warriorx + 64 > canvas.width) {
            warriorx = canvas.width - 45;
        }
    }
    else if (leftPressed) {
        warriorx -= 7;
        if (warriorx < 0) {
            warriorx = -20;
        }
    }
    requestAnimationFrame(draw);
}
eventListeners();
