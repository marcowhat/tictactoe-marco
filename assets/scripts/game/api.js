const signOut = function (gameBoard) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
