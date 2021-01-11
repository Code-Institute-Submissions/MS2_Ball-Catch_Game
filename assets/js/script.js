document.getElementById("game-area").classList.toggle("hidden");
document.getElementById("start-game").addEventListener("click", startGame);

function startGame() {
    document.getElementById("game-area").classList.toggle("hidden");
    document.getElementById("home-header").classList.toggle("hidden");
    document.getElementById("game-intro").classList.toggle("hidden");
}

$(function(){
    resizeCanvas();
});

$(window).on("resize", function(){
    resizeCanvas();
});

function resizeCanvas()
{
    let canvas = $("#canvas");
    canvas.css("width", $(window).width());
    canvas.css("height", $(window).height());
}


