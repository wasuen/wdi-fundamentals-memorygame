var cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: "images/king-of-hearts.png"
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay.length === 2) {
		if (cards[cardsInPlay[0]].rank === cards[cardsInPlay[1]].rank) {
			alert("You found a match!");
		} else {
			alert("Sorry,try again.");
		}
	}
}

function flipCard() {
	var cardId = this.getAttribute("data-id");
	console.log("User flipped a " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cardId);
	this.setAttribute("src", cards[cardId].cardImage);
	checkForMatch();
}

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement("img");
	cardElement.setAttribute("src","images/back.png");
	cardElement.setAttribute("data-id",i);
	cardElement.addEventListener('click', flipCard);
	document.getElementById("game-board").appendChild(cardElement);
	}
}

function refresh() {
	location.reload();
}
	
var button = document.getElementById("reset");
button.addEventListener('click', refresh);

createBoard();




