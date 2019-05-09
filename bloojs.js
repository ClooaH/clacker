let gameButton = document.getElementById("game");
let bankElement = document.getElementById("bank");
let powerUpsDiv = document.getElementById("powerups");
/* variabel för att spara bank */
let bank = 0;
let pupCost = 10;
let pupCost2 = 30;
let pupCost3 = 1;
let clickpower = 1;
let overtimeclickpower = 0;
/* lyssna på knappen efter click event */
gameButton.addEventListener('click', function() {
    bank += clickpower;
    gameButton.textContent = Math.floor(bank);
});
/* skapa ett powerup-element */
let powerUp = document.createElement("button");
powerUp.textContent = "Furrybones! " + pupCost;
powerUp.addEventListener('click', function() {
    if (bank >= pupCost) {
        bank = bank - pupCost;
        pupCost = pupCost * 2;
        clickpower = clickpower * 1.3;
        gameButton.textContent = Math.floor(bank);
        powerUp.textContent = "Furrybones! " + pupCost;
        bankElement.textContent = "Du köpte ett furrybone!";
    } else
        bankElement.textContent = "Du har inte råd med furrybones!";
});
powerUpsDiv.appendChild(powerUp);

let powerUmp = document.createElement("button");
powerUmp.textContent = "Gratis kaka för 1 krona! " + pupCost3;
powerUmp.addEventListener('click', function() {
    if (bank >= pupCost3) {
        bank = bank - pupCost3;
        pupCost3 = pupCost3 + 9999999999999;
        clickpower = clickpower * 0.12;
        gameButton.textContent = Math.floor(bank);
        powerUmp.textContent = "Gratis kaka för NaN krona! " + pupCost3;
        bankElement.textContent = "Jebait!";
    } else
        bankElement.textContent = "Du kommer aldrig hit...";
});
powerUpsDiv.appendChild(powerUmp);

/* skapa ett powerup-element */
let powerUrp = document.createElement("button");
powerUrp.textContent = "Autoclickarn! " + pupCost2;
powerUrp.addEventListener('click', function() {
    if (bank >= pupCost2) {
        bank = bank - pupCost2;
        pupCost2 = pupCost2 * 2;
        overtimeclickpower += 0.09;
        gameButton.textContent = Math.floor(bank);
        powerUrp.textContent = "Autoclickarn! " + pupCost2;
        bankElement.textContent = "Du köpte autoclickarn!";
    } else
        bankElement.textContent = "Du har inte råd med autoclickarn, stackare.";
});

/* skapa en funktion till en autoklicker */
function spep () {
    bank += overtimeclickpower;
    gameButton.textContent = Math.floor(bank);
    window.requestAnimationFrame(spep);
}

window.requestAnimationFrame(spep);

powerUpsDiv.appendChild(powerUrp);