
// Author: Benjamin Böhm und Giuseppe Teresi
// Dieser Code implementiert das grundlegende Verhalten eines Snake-Spiels in JavaScript. 
// Es definiert Variablen für die Spielfeldgröße, die Schlangenposition, die Apfelposition, die Geschwindigkeit und den Punktestand. 
// Funktionen werden verwendet, um das Spiel zu zeichnen, die Schlange zu steuern, die Kollisionen zu überprüfen und den Spielstatus anzuzeigen. 
// Der Code enthält auch Tastaturereignislistener für die Steuerung der Schlange und einen Startknopf, um das Spiel zu beginnen.

/*

Die Umsetzung der Canvas-Zeichenoberfläche ähnelt dem grafischen Benutzerinterface (GUI) von Microsoft Windows 
(Quelle: https://wiki.selfhtml.org/wiki/JavaScript/Canvas)

und lässt sich in folgende Schritte gliedern:

Jedes Mal, wenn der Inhalt der Canvas neu gezeichnet werden soll, muss eine eigens dafür konzipierte Funktion manuell aufgerufen werden. 
Dies kann entweder innerhalb einer anderen Funktion oder durch einen Event-Handler wie beispielsweise "load", "DOMContentLoaded" oder "click" geschehen. 
Es ist zu beachten, dass andernfalls kein Inhalt in das Canvas-Element gezeichnet wird. 
Die Funktion wird nicht automatisch aufgerufen, weder beim Laden der Seite noch zu einem anderen Zeitpunkt.

Innerhalb der Funktion wird zu Beginn ein sogenanntes Kontext-Objekt angefordert. 
Dieses Objekt dient als Schnittstelle und stellt Funktionen zum Zeichnen von Linien, Rechtecken, Kreisen, Bögen, Texten, Bildern usw. bereit. 
Der konkrete Funktionsumfang und die Benennung hängen vom Typ des Kontext-Objekts ab. 
Es gibt beispielsweise ein Kontext-Objekt für die Zeichnung von zweidimensionalen Figuren sowie eines für die Arbeit mit 3D-Objekten. 
In den folgenden Abschnitten wird jedoch ausschließlich das 2D-Kontext-Objekt vom Typ "2d" behandelt, 
und alle vorgestellten Funktionen und Membervariablen beziehen sich auf diesen Kontext.

*/


let canvas = document.getElementById("gameCanvas"); // Initialisiere die Canvas-Element-Referenz
let ctx = canvas.getContext("2d"); // Erstelle den 2D-Kontext des Canvas-Elements
let speed = 5; // Setze die Anfangsgeschwindigkeit des Spiels

let tileCount = 10; // Setze die Anzahl der Kacheln auf dem Spielfeld
let tileSize = canvas.width / tileCount; // Berechne die Größe jeder Kachel basierend auf der Anzahl der Kacheln und der Breite des Canvas-Elements

// Setze die Anfangsposition des Schlangenkopfs
let headX = 5; // Passe die Startposition an
let headY = 5; // Passe die Startposition an

// Setze die Anfangsposition des Apfels
let appleX = 2; // Passe die Startposition des Apfels an
let appleY = 2; // Passe die Startposition des Apfels an

// Initialisiere die Geschwindigkeit des Schlangenkopfs in X- und Y-Richtung
let xVelocity = 0;
let yVelocity = 0;

let score = 0; // Initialisiere den Punktestand des Spielers

// Initialisiere ein Array zur Speicherung der Schlangenteile und die Länge des Schwanzes
let snakeParts = [];
let tailLength = 2;

// Funktion zum Zeichnen des Spiels
function drawGame() {

    changeSnakePosition(); // Ändere die Position der Schlange

    // Überprüfe, ob das Spiel vorbei ist
    let result = isGameOver();
    if(result) {
        return;
    }
    
    clearScreen(); // Lösche den Bildschirm
    
    checkAppleCollision(); // Überprüfe Kollision mit dem Apfel

    drawApple(); // Zeichne den Apfel
    drawSnake(); // Zeichne die Schlange
    drawScore(); // Zeichne den Punktestand
    
    setTimeout(drawGame, 1000/speed); // Setze die Funktion für das nächste Bildschirm-Update nach einer bestimmten Zeit
}

// Funktion zum Löschen des Bildschirms
function clearScreen() {
    ctx.fillStyle = '#eee';
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

// Funktion zum Zeichnen der Schlange
function drawSnake() {
    
    ctx.fillStyle = '#73a0ee'; // Setze die Farbe für die Schlange

    // Iteriere durch die Schlangenteile und zeichne sie
    for(let i = 0; i < snakeParts.length; i++) {
        let part = snakeParts[i];
        ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize,tileSize);
    }
    
    snakeParts.push(new SnakePart(headX, headY)); // Füge ein neues Schlangenteil am Ende hinzu

    // Entferne das älteste Schlangenteil, wenn die Länge größer als der Schwanz ist
    if(snakeParts.length > tailLength){
        snakeParts.shift(); 
    }

    ctx.fillStyle = '#303179'; // Setze die Farbe für den Schlangenkopf
    ctx.fillRect(headX * tileCount, headY * tileCount, tileSize,tileSize); // Zeichne den Schlangenkopf
    
}

// Funktion zum Ändern der Position der Schlange basierend auf der Geschwindigkeit
function changeSnakePosition(){
    headX = headX + xVelocity;
    headY = headY + yVelocity;
}

// Funktion zum Zeichnen des Apfels
function drawApple() {
    ctx.fillStyle = "red";
    ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize);
}

// Funktion zur Überprüfung der Kollision mit dem Apfel
function checkAppleCollision() {

    if(appleX === headX && appleY == headY) {
        // Platziere den Apfel an einer zufälligen Position
        appleX = Math.floor(Math.random() * tileCount);
        appleY = Math.floor(Math.random() * tileCount);

        // Erhöhe die Länge des Schwanzes und den Punktestand
        tailLength++;
        score++;
    }
}

// Funktion zum Zeichnen des Punktestands
function drawScore() {
    ctx.fillStyle = "#141850";
    ctx.font = "24px Roboto"; // Aendere die Schriftgröße auf 24px oder eine andere gewünschte Größe
    ctx.fillText("Score " + score, canvas.width - 100, 30); // Passe die Position nach Bedarf an
}

// Funktion zur Überprüfung, ob das Spiel vorbei ist
function isGameOver() {
    let gameOver = false;
    
    // Überprüfe, ob die Schlange steht und es keine Geschwindigkeitsänderung gibt
    if(yVelocity === 0 && xVelocity === 0){
        return false;
    }
    
    // Überprüfe Kollision mit den Wänden des Spielfelds
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

    // Überprüfe Kollision mit den eigenen Schlangenteilen
    for(let i = 0; i < snakeParts.length; i++) {
        let part = snakeParts[i];
        if(part.x === headX && part.y === headY) {
            gameOver = true;
            break;
        }
    }
    
    // Zeige "Game Over!" Nachricht und beende das Spiel, wenn gameOver true ist
    if(gameOver) {
        ctx.fillStyle = "#476074";
        ctx.font = "50px Verdana";
        
        ctx.fillText("Game Over!", canvas.width / 6.5, canvas.height / 2);
    }
    
    return gameOver;
}

// Funktion zum Reagieren auf Tastendrücke (Steuerung der Schlange)
function keyDown(event) {
    
    // Bewegung nach oben
    if(event.keyCode == 38) {
        if(yVelocity == 1)
            return;
        yVelocity = -1;
        xVelocity = 0;
    }

    // Bewegung nach unten
    if(event.keyCode == 40) {
        if(yVelocity == -1)
            return;
        yVelocity = 1;
        xVelocity = 0;
    }

    // Bewegung nach Links
    if(event.keyCode == 37) {
        if(xVelocity == 1)
            return;
        yVelocity = 0;
        xVelocity = -1;
    }

    // Bewegung nach Rechts
    if(event.keyCode == 39) {
        if(xVelocity == -1)
            return;
        yVelocity = 0;
        xVelocity = 1;
    }
}

// Event-Listener für Tastendrücke registrieren
document.body.addEventListener("keydown", keyDown);

// Konstruktor für ein Schlangenteil
function SnakePart(x, y) {
    this.x = x;
    this.y = y;
}

// Starte das Spiel mit dem Startknopf / Event-Listener für den Startknopf hinzufügen
document.getElementById("startButton").addEventListener("click", function(){

    // Setze die Geschwindigkeit und andere Variablen zurueck, um das Spiel neu zu starten.
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
    // Starte das Spiel
    drawGame();
});

