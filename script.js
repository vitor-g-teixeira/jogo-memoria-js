const cardList = [];
const cardColor = [];

function createGame(){
    const board = document.querySelector('div#game-board');
    const cardColorOptions = [
                                'red', 'red', 
                                'blue', 'blue', 
                                'yellow', 'yellow', 
                                'orange', 'orange',
                                'brown', 'brown',
                                'purple', 'purple'
                            ];

    function selectCardColor(colorOptions){
        let max = colorOptions.length - 1;
        const min = 0;

        let randomPosition = Math.floor(Math.random() * (max - min + 1) + min);

        return randomPosition;
    }

    for(i = 0; i < 12; i++){
        const cardHTML = `<div class="card" id="${i}" onclick="showCardColor(this)">CARTA</div>`
        let selectedCardColor = null;
        selectedCardColor = cardColorOptions.splice(selectCardColor(cardColorOptions), 1)[0];

        cardList[i] = cardHTML;
        cardColor[i] = selectedCardColor;
    }

    board.innerHTML = cardList.toString().replaceAll(',', '');
    for(let card in cardList){
        cardList[card] = document.getElementById(i);
    }
}

document.addEventListener('DOMContentLoaded', createGame());

let currentCards = [];

function addCard(card){
    console.log(currentCards.length);
    if(currentCards.length !== 0){
        currentCards[1] = card;

        if(currentCards[0].style.backgroundColor !== currentCards[1].style.backgroundColor){
            setTimeout(() => {turnCardsBack(currentCards); currentCards = [];}, 1000);
        }else{
            currentCards = [];
        }
    }else if(currentCards.length === 0){
        currentCards[0] = card;
    }
}

function showCardColor(card){
    if(!currentCards.length || currentCards.length === 1 && card !== currentCards[0]){
        card.style.backgroundColor = cardColor[card.id];
        addCard(card);
    }
}


function turnCardsBack(currentCards){
    for(let card in currentCards){
        currentCards[card].style.backgroundColor = 'grey';
    }
}