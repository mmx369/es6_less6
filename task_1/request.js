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
  const res = await getUrl('http://nodejs.org/dist/index.json');
  return res;
}

getIt()
.then(res => console.log(res))
.catch (reason => console.error (`There was an error: ${reason}`))
