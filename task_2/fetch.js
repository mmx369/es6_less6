const fetch = require('node-fetch');
const fs = require('fs');

async function getIt() {

  try {
    let res1 = await fetch('http://nodejs.org/dist/index.json');
    res1 = await res1.json();
    console.log (res1);
    fs.writeFile("nodejs.txt", res1);

    let res2 = await fetch('https://github.com/bitinn/node-fetch');
    res2 = await res2.text();
    console.log (res2);
    fs.writeFile("github_2.txt", res2);

    let res3 = await fetch ('https://lenta.ru/');
    res3 = await res3.text();
    console.log (res3);
    fs.writeFile("lenta.txt", res3);
  } catch (err) {
    console.error (`There was an error: ${err}`)
  }
}

getIt()
