let cards = []
let sum = 0
let hasBlackJack = false;
let isAlive = true;
let message = ""
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let player = {
    name: "",
    chips: 145
}

player.name= prompt("Enter your Name: ")

playerEl.textContent = player.name + " : $" + player.chips


function getRandomCard(){
    return Math.floor((Math.random()*13)+1);
}

function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame(){
    cardsEl.textContent = "Cards : "
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += 
        cards[i] + " - "
    }
    sumEl.textContent = "Sum : "+sum
    if(sum<21){
        message= "Do you want to draw a another card?"
        isAlive = true 
        hasBlackJack = false
     }
     else if(sum === 21){
        message="You;ve got a Black Jack"
        hasBlackJack = true
     }
     else{
        message="You're out of the game"
        isAlive = false
        hasBlackJack = false
     }
     messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card;
        cards.push(card);
        renderGame()
    }
}

