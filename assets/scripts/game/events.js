
const onStartGame = function (event) {
  event.preventDefault()
  // create a new game
  console.log('it started the game.')
  // display the game board
  $('#game-board').show()
  // start player as X
}

module.exports = {
  onStartGame
}
