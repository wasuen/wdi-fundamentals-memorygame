var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
	} else {
  console.log("Sorry, try again.");
	}
};

function flipCard(cardId) {
	console.log("User flipped a " + cards[cardId]);
	cardsInPlay.push(cardId);
};

	flipCard(0);
	flipCard(2);
	checkForMatch();

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}