curl "https://tic-tac-toe-api-production.herokuapp.com/games" \
--include \
--request POST \
--header "Authorization: Bearer ${TOKEN}" \
--header "Content-Type: application/json" \
--data '{
    "game": {
      "cells": ["","","","","","","","",""],
      "over": false,
      "_id": "",
      "owner":"",
      "createdAt":"",
      "updatedAt": "",
      "__v": 0
    }
  }'

echo
