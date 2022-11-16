// The DOM isn't a great place to store information
// The DOM isn't great as a "source of truth"
// Instead we should have a concept of "state"
// State is just what is currently happening in our program
// It's the current "state of the things"
// Think what has been done already, is there any score, is anything selected, etc. etc. etc

// When we click on a card, we need to store it 

const gameState = {
    selectedCards: [],
    chooseCard: function(card) {
        this.selectedCards.push(card)
        if (this.selectedCards.length === 2) {
        this.checkForMatch()
        }
    },
    checkForMatch: function() {
        const $cardOne = $(this.selectedCards[0])
        const $cardTwo = $(this.selectedCards[1])
        const rankOne = $cardOne.children().eq(1).text()
        const rankTwo = $cardTwo.children().eq(1).text()
        if( rankOne === rankTwo) {
            alert(`It's a match!`)
            this.selectedCards = []
        }else {
            alert('No match this time')
            setTimeout(() => {
                $cardOne.toggleClass('card-back')
                $cardTwo.toggleClass('card-back')
            }, 900)
            $cardOne.on('click', handleClick)
            $cardTwo.on('click', handleClick)
            this.selectedCards = []
        }
    }

}

const handleClick = e => {
        // console.log('Event fired!')
    // We need to remove the card-back class on click
    const $card = $(e.currentTarget)
    $card.off()     // we can remove event listeners in jQuery by calling .off()
    $card.toggleClass('card-back')
    gameState.chooseCard(e.currentTarget)
}

$('.card').on('click', handleClick)



