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
  // console.log('signed In')
  $('#sign-success').text('Signed In')
  $('#sign-up').trigger('reset')
  $('#heading-pw').show()
  $('#change-pw').show()
  $('#heading-signout').show()
  $('#sign-out').show()
}
const signInFailure = function (response) {
  $('#sign-failure').text('Failed, try again')
}
const signOutSuccess = function (response) {
  $('#sign-success').text('Signed Out')
  $('#heading-pw').hide()
  $('#change-pw').hide()
  $('#heading-signout').hide()
  $('#sign-out').hide()
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
