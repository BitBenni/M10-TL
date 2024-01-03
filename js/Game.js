import { level1 } from "./levels/level1.js";
import { level2 } from "./levels/level2.js";
import { level3 } from "./levels/level3.js";
import { writeInfo } from "./info.js";

const levelCount = document.getElementById("levelCount");

export class Game {
    constructor(levelList) {
        this.levelList = [];
        for (const lev of levelList) {
            this.levelList.push(lev);
            lev.game = this;
            lev.index = this.levelList.length;
        }
        this.currentLevelIndex = 1;
    }

    get currentLevel() {
        return this.levelList[this.currentLevelIndex - 1];
    }

    start() {
        if (this.levelList.length === 0) return;
        this.currentLevel.drawObjects();
        this.currentLevel.addControls();
        writeInfo(
            "Drücke die 'Leertaste' um das Spiel zu beginnen.<br>" +
            "Nutze die 'Pfeiltasten' um dich zu bewegen.<br>"+
            "Drücke 'r' um den Level neu zu laden."
        );
    }

    switchToNextLevel() {
        this.currentLevelIndex++;
        if (this.currentLevelIndex > this.levelList.length) {
            writeInfo("You won the game!");
            return;
        }
        this.currentLevel.addControls();
        this.currentLevel.start();
    }
}

export const game = new Game([level1, level2, level3]);