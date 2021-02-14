const store = require('../store')

const startGameSucess = function (response) {
  console.log(response)
  $('#sign-success').text('You got something to work.')
}
const startGameFailure = function (response) {
  $('#sign-success').text('failed, try again.')
}

module.exports = {
  startGameSucess,
  startGameFailure
}
