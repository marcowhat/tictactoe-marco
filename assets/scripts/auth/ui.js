const store = require('./../store')
const signUpSuccess = function (response) {
  // console.log('you got it!')
  $('#sign-success').text('Success')
  $('#sign-up').trigger('reset')
}
const signUpFail = function (response) {
  // console.log('bingo')
  $('#sign-failure').text('Failed, try again')
}
const signInSuccess = function (response) {
  store.user = response.user
  console.log(response)
  // console.log('signed In')
  $('#sign-success').text('Signed In')
  $('#sign-up').trigger('reset')
  $('#heading-pw').show()
  $('#change-pw').show()
  $('#heading-signout').show()
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#heading-signup').hide()
  $('#heading-signin').hide()
  $('#sign-in').hide()
  $('#game-button').show()
}
const signInFailure = function (response) {
  $('#sign-failure').text('Failed, try again')
}
const signOutSuccess = function (response) {
  console.log(response)
  $('#sign-success').text('Signed Out')
  $('#heading-pw').hide()
  $('#change-pw').hide()
  $('#heading-signout').hide()
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#heading-signin').show()
}
const signOutFailure = function (response) {
  $('#sign-success').text('Error, try again')
}
const changePwSucess = function (response) {
  $('#sign-success').text('Changed Password')
}
const changePwFailure = function (response) {
  $('#sign-failure').text('Failed, try again')
}
module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePwSucess,
  changePwFailure
}
