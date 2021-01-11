document.getElementById("game-area").classList.toggle("hidden");
document.getElementById("start-game").addEventListener("click", startGame);

function startGame() {
    document.getElementById("game-area").classList.toggle("hidden");
    document.getElementById("home-header").classList.toggle("hidden");
    document.getElementById("game-intro").classList.toggle("hidden");
}


