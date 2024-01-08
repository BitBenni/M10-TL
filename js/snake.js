let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");
let speed = 5;
let tileCount = 10; // Reduziere die Anzahl der Kacheln entsprechend
let tileSize = canvas.width / tileCount;
let headX = 5; // Passe die Startposition an
let headY = 5; // Passe die Startposition an
let appleX = 2; // Passe die Startposition des Apfels an
let appleY = 2; // Passe die Startposition des Apfels an
let xVelocity = 0;
let yVelocity = 0;
let score = 0;

let snakeParts = [];
let tailLength = 2;

function drawGame() {
    changeSnakePosition();
    let result = isGameOver();
    if(result) {
        return;
    }
    
    clearScreen();
    
    checkAppleCollision();
    drawApple();
    drawSnake();
    drawScore();
    
    setTimeout(drawGame, 1000/speed);
}

function clearScreen() {
    ctx.fillStyle = '#eee';
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

function drawSnake() {
    
    ctx.fillStyle = '#73a0ee';
    for(let i = 0; i < snakeParts.length; i++) {
        let part = snakeParts[i];
        ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize,tileSize);
    }
    
    snakeParts.push(new SnakePart(headX, headY)); //put an item at the end of the list next to the head
    if(snakeParts.length > tailLength){
        snakeParts.shift(); //remove the furthers item from the snake parts if have more than our tail size.
    }
    
    ctx.fillStyle = '#303179';
    ctx.fillRect(headX * tileCount, headY * tileCount, tileSize,tileSize);
    
}

function changeSnakePosition(){
    headX = headX + xVelocity;
    headY = headY + yVelocity;
}

function drawApple() {
    ctx.fillStyle = "red";
    ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize);
}

function checkAppleCollision() {
    if(appleX === headX && appleY == headY) {
        appleX = Math.floor(Math.random() * tileCount);
        appleY = Math.floor(Math.random() * tileCount);
        tailLength++;
        score++;
    }
}

function drawScore() {
    ctx.fillStyle = "#141850";
    ctx.font = "24px Roboto"; // Ändere die Schriftgröße auf 24px oder eine andere gewünschte Größe
    ctx.fillText("Score " + score, canvas.width - 100, 30); // Passe die Position nach Bedarf an
}

function isGameOver() {
    let gameOver = false;
    
    if(yVelocity === 0 && xVelocity === 0){
        return false;
    }
    
    //Walls
    if(headX < 0) {
        gameOver = true;
    }
    else if(headX >= tileCount) {
        gameOver = true;
    }
    else if(headY < 0) {
        gameOver = true;
    }
    else if(headY >= tileCount) {
        gameOver = true;
    }
    
    for(let i = 0; i < snakeParts.length; i++) {
        let part = snakeParts[i];
        if(part.x === headX && part.y === headY) {
            gameOver = true;
            break;
        }
    }
    
    if(gameOver) {
        ctx.fillStyle = "#476074";
        ctx.font = "50px Verdana";
        
        ctx.fillText("Game Over!", canvas.width / 6.5, canvas.height / 2);
    }
    
    return gameOver;
}

function keyDown(event) {
    //Up
    if(event.keyCode == 38) {
        if(yVelocity == 1)
            return;
        yVelocity = -1;
        xVelocity = 0;
    }

    //Down
    if(event.keyCode == 40) {
        if(yVelocity == -1)
            return;
        yVelocity = 1;
        xVelocity = 0;
    }

    //Left
    if(event.keyCode == 37) {
        if(xVelocity == 1)
            return;
        yVelocity = 0;
        xVelocity = -1;
    }

    //Right
    if(event.keyCode == 39) {
        if(xVelocity == -1)
            return;
        yVelocity = 0;
        xVelocity = 1;
    }
}

document.body.addEventListener("keydown", keyDown);

function SnakePart(x, y) {
    this.x = x;
    this.y = y;
}

// Starte das Spiel mit dem Startknopf
document.getElementById("startButton").addEventListener("click", function(){
    // Setze die Geschwindigkeit und andere Variablen zurÃ¼ck, um das Spiel neu zu starten.
    speed = 5;
    tileCount = 20;
    tileSize = canvas.width / tileCount;
    headX = 10;
    headY = 10;
    appleX = 5;
    appleY = 5;
    xVelocity = 0;
    yVelocity = 0;
    score = 0;
    snakeParts = [];
    tailLength = 2;
    drawGame();
});

