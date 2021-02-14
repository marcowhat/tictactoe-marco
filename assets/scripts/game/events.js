
const api = require('./api')
const ui = require('./ui')
// const formFields = require('../../../lib/get-form-fields')
const onStartGame = function () {
  event.preventDefault()
  // create a new game
  console.log('it started the game.')
  // display the game board
  $('#game-board').show()
  // start player as X
  const player = 'X'
  console.log('let player start with ' + player)
  api.startGame()
    .then(ui.startGameSucess)
    .catch(ui.startGameFailure)
}

module.exports = {
  onStartGame
}
