function startGame() {
    let start = document.getElementById("game-area");
    let game = document.getElementsByClassName("game-intro");
    for (let i = 0; i < game.length; i++) {
        game[i].style.display = "none";
    }
    start.style.display = "block"; 
}

