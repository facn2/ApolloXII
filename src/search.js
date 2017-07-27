const food = require(`./food.json`);

const searchfunc = (request, response) => {
  var partialSearch = request.url.split(`search=`)[1];
  let resultArr = [];
  let counter = 0;
  food.forEach(function(obj) {
    let name = obj.nm.toLowerCase();
    if ((name.indexOf(partialSearch.toLowerCase()) === 0) && counter < 10 ) {
      resultArr.push(name);
      counter ++;
    }
  });

  response.end(JSON.stringify(resultArr));
}

const finalSearchFunc = (request, response) => {
  const finalSearchSubmit = request.url.split(`search=`)[1];
  const finalSearch = finalSearchSubmit.split(`&submit`)[0];
  let finalResultArr = [];
  let counter = 0;
  food.forEach(function(obj) {
    let name = obj.nm.toLowerCase();
    if ((name.indexOf(finalSearch.toLowerCase()) === 0) && counter < 1 ) {
      finalResultArr.push(obj);
      counter++;
    }
  });
  var finalResult = JSON.stringify(finalResultArr);
  response.writeHead(200, {"Location": "../"});
  response.end(`<h1>You looked for: </h1>` + finalResult)
}

module.exports = {
  searchfunc,
  finalSearchFunc
};
