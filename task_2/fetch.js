const fetch = require('node-fetch');
const fs = require('fs');

const toText = (response) => {
  return response.text()
}

const getIt = async()=> {
  await fetch('http://nodejs.org/dist/index.json')
  .then(toText)
  .then(data => {
    fs.writeFile("nodejs.txt", data);
    console.log('data', data);
  })
  await fetch('https://github.com/bitinn/node-fetch')
  .then(toText)
  .then(data => {
   fs.writeFile("github_2.txt", data);
   console.log('data', data);
 })
  await fetch ('https://lenta.ru/')
  .then(toText)
  .then(data => {
   fs.writeFile("lenta.txt", data);
   return console.log('data', data);
 })
  .catch(error => {
    console.log(error);
  })
}

getIt()

