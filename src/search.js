const food = require(`./food.json`);

const searchfunc = (request) => {
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
  return resultArr;
}

const finalSearchFunc = (request) => {
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

  return JSON.stringify(finalResultArr);
}

module.exports = {
  searchfunc,
  finalSearchFunc
};
