const fetch = require('node-fetch');
const fs = require('fs');

const toText = (response) => {
  return response.text()
}

let promise_1 = fetch('http://nodejs.org/dist/index.json').then(toText);
let promise_2 = fetch('https://github.com/bitinn/node-fetch').then(toText);
let promise_3 = fetch ('https://lenta.ru/').then(toText);

const getIt =async()=> {
  try {
    const [res_1, res_2, res_3] = await Promise.all([promise_1, promise_2, promise_3]);
    fs.writeFile("nodejs.txt", res_1);
    fs.writeFile("github_2.txt", res_2);
    fs.writeFile("lenta.txt", res_3)
    console.log(res_1);
    console.log(res_2);
    console.log(res_3);
  } catch (err) {
    console.error (`There was an error: ${err}`)
  }
}

getIt()
