curl "https://tic-tac-toe-api-production.herokuapp.com/sign-out" \
--include \
--request DELETE \
--header "Content-type: application/json" \
--header "Authorization: Bearer ${TOKEN}"
