'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-pw').on('submit', authEvents.onChangePassword)
  $('#heading-pw').hide()
  $('#change-pw').hide()
  $('#heading-signout').hide()
  $('#sign-out').hide()
  $('#game-button').hide()
  $('#game-button').on('click', gameEvents.onStartGame)
  $('#game-board').hide()
})
