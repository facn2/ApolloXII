const food = require(`./food.json`);

const searchfunc = (partialSearch) => {
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

const finalSearchFunc = (finalSearch) => {
  let finalResultArr = [];
  let counter = 0;
  food.forEach(function(obj) {
    let name = obj.nm.toLowerCase();
    if ((name.indexOf(finalSearch.toLowerCase()) === 0) && counter < 1 ) {
      finalResultArr.push(obj);
      counter++;
    }
  });
  return finalResultArr;
}

module.exports = {
  searchfunc,
  finalSearchFunc
};
