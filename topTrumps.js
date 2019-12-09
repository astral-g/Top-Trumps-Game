let cards = [ 
]


let p1Cards = [ 
    {index: 2,name: "BMW M4 F82", to60: 3.8, newPrice: 62300, coolFactor: 6, topSpeed: 190},
    {index: 4,name: "Fiesta ST MK8", to60: 6.5, newPrice: 23000, coolFactor: 5, topSpeed: 144},
    {index: 5,name: "Audi RS3 8", to60: 4.1, newPrice: 45290, coolFactor: 3, topSpeed: 180},
    {index: 7,name: "Honda NSX", to60: 4.1, newPrice: 1430000, coolFactor: 8, topSpeed: 191.4},
    {index: 9,name: "Mercedes A35 AMG", to60: 4.6, newPrice: 35920, coolFactor: 5, topSpeed: 155.3},
    {index: 10,name: "Mercedes C63 AMG", to60: 3.8, newPrice: 78023, coolFactor: 7, topSpeed:190},
    {index: 14,name: "Ford Focus RS MK3", to60: 4.5, newPrice: 35000, coolFactor: 4.5, topSpeed:165},
    {index: 18,name: "Vauxhall Corsa VXR", to60: 7.1, newPrice: 20600, coolFactor: 0.5, topSpeed:143},
    {index: 22,name: "Jaguar F-Type R", to60: 3.6, newPrice: 111115, coolFactor: 8.5, topSpeed:200},
    {index: 24,name: "BMW M2 Competition Pack", to60: 4.4, newPrice: 49805, coolFactor: 8.5, topSpeed: 170},
    {index: 25,name: "Peugeot 208 GTI", to60: 6.5, newPrice: 22184, coolFactor: 2, topSpeed: 143},
    {index: 26,name: "Volkswagen Golf GTI Clubsport", to60: 5.9, newPrice: 30875, coolFactor: 4, topSpeed: 156},
    {index: 27,name: "Kia Stinger GT", to60: 4.7, newPrice: 30970, coolFactor: 4, topSpeed: 167},
    {index: 28,name: "Mercedes G Class AMG", to60: 4.4, newPrice: 140520, coolFactor: 1, topSpeed: 186},
    {index: 29,name: "Porsche 718 Cayman", to60: 4.9, newPrice: 53746, coolFactor: 5.5, topSpeed: 170},
]; 

let p2Cards = [
    {index: 1,name: "BMW M3 F80", to60: 4.1, newPrice: 59860, coolFactor: 8, topSpeed: 189},
    {index: 3,name: "Alfa Romeo Giulia Quadrifoglio", to60: 3.6, newPrice: 62924, coolFactor: 10, topSpeed: 190.8},
    {index: 6,name: "Nissan GT-R V Spec", to60: 2.9, newPrice: 81505, coolFactor: 10, topSpeed: 200},
    {index: 8,name: "Golf R", to60: 4.5, newPrice: 35125, coolFactor: 6, topSpeed: 168},
    {index: 11,name: "Mitsubishi Evo X", to60: 4.4, newPrice: 35000, coolFactor: 4, topSpeed: 146},
    {index: 12,name: "Subaru Impreza Final Edition", to60: 5.2, newPrice: 34000, coolFactor: 8, topSpeed: 158},
    {index: 16,name: "Volkswagen Polo GTI", to60: 6.7, newPrice: 21660, coolFactor: 2.5, topSpeed: 147},
    {index: 21,name: "Jaguar F-Pace R", to60: 4.3, newPrice: 73145, coolFactor: 5, topSpeed:175.8},
    {index: 30,name: "Toyota GR Supra", to60: 3.8, newPrice: 51384, coolFactor: 10, topSpeed: 163},
    {index: 23,name: "Alfa Romeo Mito Cloverleaf", to60: 7.5, newPrice: 17895, coolFactor: 6, topSpeed: 136},
    {index: 19,name: "Landrover Rangerover SVR", to60: 4.3, newPrice: 99620, coolFactor: 10, topSpeed:175.8},
    {index: 17,name: "Vauxhall Astra GTC VXR", to60: 5.9, newPrice: 26995, coolFactor: -1, topSpeed:155},
    {index: 20,name: "Honda Civic Type R", to60: 5.2, newPrice: 29985, coolFactor: 3.5, topSpeed:169},
    {index: 13,name: "Ford Mustang 5.0", to60: 4.1, newPrice: 40830, coolFactor: 1, topSpeed:180},
    {index: 15,name: "Abarth 500 695 Biposto", to60: 4.1, newPrice: 33055, coolFactor: 4, topSpeed: 151},
];

const to60Btn = document.getElementById("to60-btn");
const topSpeedBtn = document.getElementById("top-speed-btn");
const coolBtn = document.getElementById("cool-factor-btn");
const priceBtn = document.getElementById("price-btn");
const msgDisplay = document.getElementById("message-display");
const reset = document.getElementById("reset-btn");
const p1ScoreDisplay = document.getElementById("p1-score");
const p2ScoreDisplay = document.getElementById("p2-score");

// Player 1 & 2 score 
let p1Score = 0; 
let p2Score = 0; 

// Array of cards for each player
let p1Current = []
let p2Current = []


// Current card function which is going to be called back in the top comparison function
function currentCard(){ 
    let p1 = Math.floor((Math.random()* p1Cards.length))
    let p2 = Math.floor((Math.random()* p2Cards.length))
    p1Current.push(p1Cards.splice(p1, 1)[0]);
    p2Current.push(p2Cards.splice(p2, 1)[0]);
    console.log(`My current p1Card is ${p1Current[0].name}`)
    console.log(`My current p2Card is ${p2Current[0].name}`)
    console.log(p1Cards.length)
    console.log(p2Cards.length)
};  

reset.addEventListener("click", () => {
    p1Score = 0; 
    p2Score = 0; 
    msgDisplay.style.display="none"
    currentCard();
})  

to60Btn.addEventListener("click", () => {
    console.log(p1Current[0].to60)
    console.log(p2Current[0].to60)

    if(p1Current[0].to60 < p2Current[0].to60){
        p1Score += 1 
        p1ScoreDisplay.textContent = `Player one score: ${p1Score}`
        p1Cards.push(p2Current.splice(0,1)[0])
        p1Cards.push(p1Current.splice(0,1)[0])
        msgDisplay.textContent = `Player one wins the round!`
        setTimeout( () => {msgDisplay.style.display = "none";
        }, 2000);
        playGame()
    } else if(p2Current[0].to60 < p1Current[0].to60){
        p2Score += 1 
        p2ScoreDisplay.textContent = `Player two score: ${p2Score}`
        p2Cards.push(p1Current.splice(0,1)[0])
        p2Cards.push(p2Current.splice(0,1)[0])

        playGame()
    } else {
        msgDisplay.textContent = `This round is a tie!`
        p1Cards.push(p1Current.splice(0,1)[0])
        p2Cards.push(p2Current.splice(0,1)[0])
        playGame()
    }
})

topSpeedBtn.addEventListener("click", () => {
    if(p1Current[0].topSpeed > p2Current[0].topSpeed){
        p1Score += 1 
        p1ScoreDisplay.textContent = `Player one score: ${p1Score}`
        p1Cards.push(p2Current.splice(0,1)[0])
        p1Cards.push(p1Current.splice(0,1)[0])
        playGame()
    } else if (p2Current[0].topSpeed > p1Current[0].topSpeed){
        p2Score += 1 
        p2ScoreDisplay.textContent = `Player two score: ${p2Score}` 
        p2Cards.push(p1Current.splice(0,1)[0])
        p2Cards.push(p2Current.splice(0,1)[0])
        playGame()
    } else {
        msgDisplay.textContent = `This round is a tie!`
        p1Cards.push(p1Current.splice(0,1)[0])
        p2Cards.push(p2Current.splice(0,1)[0])
        playGame()
    }
})

coolBtn.addEventListener("click", () => {
    if(p1Current[0].coolFactor > p2Current[0].coolFactor){
        p1Score += 1 
        p1ScoreDisplay.textContent = `Player one score: ${p1Score}`
        p1Cards.push(p2Current.splice(0,1)[0])
        p1Cards.push(p1Current.splice(0,1)[0])
        playGame()
        // Eliminate player two's current card and give it to player one
    } else if(p2Current[0].coolFactor > p1Current[0].coolFactor){
        p2Score += 1 
        p2ScoreDisplay.textContent = `Player two score: ${p2Score}`
        p2Cards.push(p1Current.splice(0,1)[0])
        p2Cards.push(p2Current.splice(0,1)[0])
        playGame()
        // Eliminate player one's current card and give it to player two
    } else {
        msgDisplay.textContent = `This round is a tie!`
        p1Cards.push(p1Current.splice(0,1)[0])
        p2Cards.push(p2Current.splice(0,1)[0])
        playGame()
    }
})

// CONSOLE.LOG EACH AND EVERY STEP IN THE PROCESS OF A BTN CLICK.
priceBtn.addEventListener("click", () => {
    if(p1Current[0].newPrice > p2Current[0].newPrice){
        p1Score += 1 
        p1ScoreDisplay.textContent = `Player one score: ${p1Score}`
        p1Cards.push(p2Current.splice(0,1)[0])
        p1Cards.push(p1Current.splice(0,1)[0])
        playGame()
        // Eliminate player two's current card and give it to player one
    } else if(p2Current[0].newPrice > p1Current[0].newPrice){
        p2Score += 1 
        p2ScoreDisplay.textContent = `Player two score: ${p2Score}`
        p2Cards.push(p1Current.splice(0,1)[0])
        p2Cards.push(p2Current.splice(0,1)[0])
        playGame()
        // Eliminate player one's current card and give it to player two
    } else{
        msgDisplay.textContent = `This round is a tie!`
        p1Cards.push(p1Current.splice(0,1)[0])
        p2Cards.push(p2Current.splice(0,1)[0])
        playGame()
    }
})

const playGame = () => { 
    if(p1Cards.length < 30 && p2Cards.length < 30 ){ 
        currentCard();
    } else if (p1Cards.length == 30 ){
        msgDisplay.textContent = "Player two wins!"
        reset.style.display= "block"
        to60Btn.style.display = "none"
        topSpeedBtn.style.display = "none"
        coolBtn.style.display = "none"
        priceBtn.style.display = "none"
    } else if (p2Cards.length == 30){
        msgDisplay.textContent = "Player one wins!"
        reset.style.display = "block"
        to60Btn.style.display = "none"
        topSpeedBtn.style.display = "none"
        coolBtn.style.display = "none"
        priceBtn.style.display = "none"
    } 
}

currentCard();

