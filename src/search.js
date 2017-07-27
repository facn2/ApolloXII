const food = require(`./food.json`);

const searchfunc = (partialSearch) => {
  //console.log("We are looking for: " + partialSearch);
  let resultArr = [];
  // var resultObj = {};
  let counter = 0;
  food.forEach(function(obj) {
    let name = obj.nm.toLowerCase();
    if ((name.indexOf(partialSearch.toLowerCase()) === 0) && counter < 10 ) {
      //console.log(JSON.stringify(name));
      resultArr.push(name);
      //resultObj. = JSON.stringify(name);
      counter ++;
    }
  });
  return resultArr;
}

const finalSearchFunc = (finalSearch) => {
  //console.log("We are looking for: " + partialSearch);
  let finalResultArr = [];
  // var resultObj = {};
  let counter = 0;
  food.forEach(function(obj) {
    let name = obj.nm.toLowerCase();
    if ((name.indexOf(finalSearch.toLowerCase()) === 0) && counter < 1 ) {
      //console.log(JSON.stringify(obj));
      finalResultArr.push(obj);
      //resultObj. = JSON.stringify(name);
      counter++;
    }
  });
  console.log(finalResultArr);
  return finalResultArr;
}

module.exports = {
  searchfunc,
  finalSearchFunc
};
