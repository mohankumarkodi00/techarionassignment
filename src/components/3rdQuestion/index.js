let url = 'https://admin.srkprojects.com/web/api/client/v1/contact-us/'
let data = {
  email: 'ramtej.j13@gmail.com',
  message: 'This is a Basic message',
  name: 'ramtejakka',
}
let options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application.json',
    Accept: 'application.json',
    Authorization: 'Bearer Access-Token',
  },
  body: JSON.stringify(data),
}
fetch(url, options)
  .then(function (response) {
    return response.json()
  })
  .then(function (jsonData) {
    let responseDate = jsonData
  })
