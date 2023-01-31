let url = 'https://gorest.co.in/public/v1/todos'
let options = {
  method: 'GET',
}
fetch(url, options)
  .then(function (response) {
    return response.json()
  })
  .then(function (jsonData) {
    let responseDate = jsonData
  })
