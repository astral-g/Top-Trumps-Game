//Pool of cards
const cards = [
    {index: 1,name: "BMW M3 F80", to60: 4.1, newPrice: 59860, coolFactor: 8, topSpeed: 189, img: 'F80M3.jpg'},
    {index: 2,name: "BMW M4 F82", to60: 3.8, newPrice: 62300, coolFactor: 6, topSpeed: 190, img:'F82M4.jpg'},
    {index: 3,name: "Alfa Romeo Giulia Quadrifoglio", to60: 3.6, newPrice: 62924, coolFactor: 10, topSpeed: 190.8, img: 'ALFAGIULIA.jpg' },
    {index: 4,name: "Fiesta ST MK8", to60: 6.5, newPrice: 23000, coolFactor: 5, topSpeed: 144, img:'MK8ST.jpg'},
    {index: 5,name: "Audi RS3 8", to60: 4.1, newPrice: 45290, coolFactor: 3, topSpeed: 180, img:'RS38V.jpg'},
    {index: 6,name: "Nissan GT-R V Spec", to60: 2.9, newPrice: 81505, coolFactor: 10, topSpeed: 200, img: 'R35.jpg'},
    {index: 7,name: "Honda NSX", to60: 4.1, newPrice: 1430000, coolFactor: 8, topSpeed: 191.4, img:'NSX.jpg'},
    {index: 8,name: "Golf R", to60: 4.5, newPrice: 35125, coolFactor: 6, topSpeed: 168, img:'GOLFR.jpg' },
    {index: 9,name: "Mercedes A35 AMG", to60: 4.6, newPrice: 35920, coolFactor: 5, topSpeed: 155.3, img:'A35AMG.png'},
    {index: 10,name: "Mercedes C63 AMG", to60: 3.8, newPrice: 78023, coolFactor: 7, topSpeed:190, img:'C63AMG.jpg'},
    {index: 11,name: "Mitsubishi Evo X", to60: 4.4, newPrice: 35000, coolFactor: 4, topSpeed: 146, img: 'EVOX.jpeg' },
    {index: 12,name: "Subaru Impreza Final Edition", to60: 5.2, newPrice: 34000, coolFactor: 8, topSpeed: 158, img: 'IMPREZA.jpg' },
    {index: 13,name: "Ford Mustang 5.0", to60: 4.1, newPrice: 40830, coolFactor: 1, topSpeed:180, img: 'MUSTANG.jpeg'},
    {index: 14,name: "Ford Focus RS MK3", to60: 4.5, newPrice: 35000, coolFactor: 4.5, topSpeed:165, img:'FOCUSRS.jpg'},
    {index: 15,name: "Abarth 500 695 Biposto", to60: 4.1, newPrice: 33055, coolFactor: 4, topSpeed: 151, img:'695BIPOSTO.jpg'},
    {index: 16,name: "Volkswagen Polo GTI", to60: 6.7, newPrice: 21660, coolFactor: 2.5, topSpeed: 147, img: 'POLOGTI.jpg' },
    {index: 17,name: "Vauxhall Astra GTC VXR", to60: 5.9, newPrice: 26995, coolFactor: -1, topSpeed:155, img: 'GTCVXR.jpg' },
    {index: 18,name: "Vauxhall Corsa VXR", to60: 7.1, newPrice: 20600, coolFactor: 0.5, topSpeed:143, img:'CORSAVXR.jpg'},
    {index: 19,name: "Landrover Rangerover SVR", to60: 4.3, newPrice: 99620, coolFactor: 10, topSpeed:175.8, img: 'SVR.jpg'},
    {index: 20,name: "Honda Civic Type R", to60: 5.2, newPrice: 29985, coolFactor: 3.5, topSpeed:169, img: 'CIVIC.jpg'},
    {index: 21,name: "Jaguar F-Pace R", to60: 4.3, newPrice: 73145, coolFactor: 5, topSpeed:175.8, img: 'FPACE.jpg' },
    {index: 22,name: "Jaguar F-Type R", to60: 3.6, newPrice: 111115, coolFactor: 8.5, topSpeed:200, img:'FTYPER.jpg'},
    {index: 23,name: "Alfa Romeo Mito Cloverleaf", to60: 7.5, newPrice: 17895, coolFactor: 6, topSpeed: 136, img: 'MITO.jpg' },
    {index: 24,name: "BMW M2 Competition Pack", to60: 4.4, newPrice: 49805, coolFactor: 8.5, topSpeed: 170, img:'M2COMP.jpg'},
    {index: 25,name: "Peugeot 208 GTI", to60: 6.5, newPrice: 22184, coolFactor: 2, topSpeed: 143, img:'208GTI.jpg'},
    {index: 26,name: "Volkswagen Golf GTI Clubsport", to60: 5.9, newPrice: 30875, coolFactor: 4, topSpeed: 156, img:'GTICLUBSPORT1.jpg'},
    {index: 27,name: "Kia Stinger GT", to60: 4.7, newPrice: 30970, coolFactor: 4, topSpeed: 167, img:'STINGERGT.jpg'},
    {index: 28,name: "Mercedes G Class AMG", to60: 4.4, newPrice: 140520, coolFactor: 1, topSpeed: 186, img:'G62AMG.jpg'},
    {index: 29,name: "Porsche 718 Cayman", to60: 4.9, newPrice: 53746, coolFactor: 5.5, topSpeed: 170, img:'718CAYMAN.jpg'},
    {index: 30,name: "Toyota GR Supra", to60: 3.8, newPrice: 51384, coolFactor: 10, topSpeed: 163, img: 'GRSUPRA.jpg'}
];

const to60Btn     = document.getElementById("to60-btn");
const topSpeedBtn = document.getElementById("top-speed-btn");
const coolBtn     = document.getElementById("cool-factor-btn");
const priceBtn    = document.getElementById("price-btn");
const resetBtn    = document.getElementById("reset-btn");

const msgDisplay = document.getElementById("message-display");

const p1ScoreDisplay = document.getElementById("p1-score");
const p2ScoreDisplay = document.getElementById("p2-score");

const p1CardDisplay  = document.getElementById("p1-card-pic");
const cpuCardDisplay = document.getElementById("cpu-card-pic");

// Player cards
const p1Cards = [];
const p2Cards = [];

// Player 1 & 2 score 
let p1Score = 0; 
let p2Score = 0; 

// Current cards in play
const p1Current = [];
const p2Current = [];

// Randomly distribute cards to each player
function shuffle() {
    let deckLength  = cards.length;
    let p1CardCount = 0;
    let p2CardCount = 0;

    for(let i = deckLength; i > 0; i--) {
        // console.log("i equals: ", i)
        let cardIdx = Math.floor(Math.random() * i );
        // console.log("card idx is: ", cardIdx)
        let randomisedCard = cards.splice(cardIdx, 1);

        if(p1CardCount > p2CardCount) {
            p2Cards.push(randomisedCard[0]);
            p2CardCount +=1;
        } else if(p1CardCount === p2CardCount) {
            p1Cards.push(randomisedCard[0]);
            p1CardCount +=1;
        }
    }
    console.log("p1 cards", p1Cards);
    console.log("p2 cards", p2Cards);
}

function compareStat(stat) {

    const p1Stat = p1Current[0][stat];
    const p2Stat = p2Current[0][stat];

    switch(stat) {
        case "newPrice":
        case "coolFactor":
        case "topSpeed":
            if (p1Stat > p2Stat) {
                processRoundOutcome("p1-win");
            } else if (p2Stat > p1Stat){
                processRoundOutcome("p2-win");
            } else {
                processRoundOutcome("stalemate");
            }
        case "to60":
            if(p1Stat < p2Stat){
                processRoundOutcome("p1-win");
            } else if (p2Stat < p1Stat){
                processRoundOutcome("p2-win");
            } else {
                processRoundOutcome("stalemate");
            }
    }
}

function processRoundOutcome(outcome) {
    const isP1Win = outcome === "p1-win";
    const isP2Win = outcome === "p2-win";
 
    if(isP1Win) {
        p1Score+=1;
        p1ScoreDisplay.textContent = `Player one score: ${p1Score}`;

        p1Cards.push(p2Current.splice(0,1)[0]);
        p1Cards.push(p1Current.splice(0,1)[0]);
    } else if(isP2Win) {
        p2Score+=1;
        p2ScoreDisplay.textContent = `Player two score: ${p2Score}`;

        p2Cards.push(p1Current.splice(0,1)[0]);
        p2Cards.push(p2Current.splice(0,1)[0]);
    } else {
        p1Cards.push(p1Current.splice(0,1)[0]);
        p2Cards.push(p2Current.splice(0,1)[0]);
    }

    const winnerText = isP1Win ? "one" : "two";
    const tieMessage = "This round is a tie!";
    const winnerMessage = `Player ${winnerText} wins the round`
   
    if(isP1Win || isP2Win) {
        msgDisplay.textContent = winnerMessage;
    } else {
        msgDisplay.textContent = tieMessage;
    }
    resetMsgDisplay();

    setTimeout( () => {msgDisplay.style.display = "none"}, 2000);
    playGame();
}

const resetMsgDisplay = () => msgDisplay.style.display = "inline-block";

function playGame() {
    // If both players have less than 30 cards in their deck (meaning one player has not acquired the other's cards)
    // Then put a random card from each player's deck, into play
    if(p1Cards.length < 30 && p2Cards.length < 30 ){ 
        currentCard();
        return
    }

    const isP1Win = p1Cards.length === 30;
    const isP2Win = p2Cards.length === 30;
    const winnerText = isP1Win ? "one" : "two";
    const winnerMessage = `Player ${winnerText} wins the game`;

    if (isP1Win || isP2Win){
        msgDisplay.textContent = winnerMessage; 
        hideButtons();
    }
}

function hideButtons() {
    resetBtn.style.display = "block";
    to60Btn.style.display = "none";
    topSpeedBtn.style.display = "none";
    coolBtn.style.display = "none";
    priceBtn.style.display = "none";
}

// Current card function which is going to be called back in the top comparison function
function currentCard() {
    // Select a random card from both player's deck
    const p1 = Math.floor((Math.random()* p1Cards.length));
    const p2 = Math.floor((Math.random()* p2Cards.length));

    // Put both of the randomly selected cards of each player, into play
    p1Current.push(p1Cards.splice(p1, 1)[0]);
    p2Current.push(p2Cards.splice(p2, 1)[0]);

    p1CardDisplay.src  = `images/${p1Current[0].img}`;
    cpuCardDisplay.src = `images/${p2Current[0].img}`;
}

resetBtn.addEventListener("click", () => {
    p1Score = 0;
    p2Score = 0;

    msgDisplay.style.display="none";
    currentCard();
});  

to60Btn.addEventListener("click", () => {
    compareStat("to60");
});

topSpeedBtn.addEventListener("click", () => {
    compareStat("topSpeed");
});

coolBtn.addEventListener("click", () => {
    compareStat("coolFactor");
});

priceBtn.addEventListener("click", () => {
    compareStat("newPrice");
});

shuffle();
currentCard();