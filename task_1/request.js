const request = require("request");

const getUrl =(url)=> {
  return new Promise(
    (resolve, reject) => {
      request.get(url, (error, res, body) => {
        if (error) {
          reject(new Error(error));
        } else {
          resolve(body);
        }
      });
    });
}

const getIt = async ()=> {
  try {
  let res = await getUrl('http://nodejs.org/dist/index.json');
   console.log (res);
} catch (err) {
    console.error (`There was an error: ${err}`)
  }
}

getIt()
