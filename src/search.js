const food = require(`./food.json`);

const searchfunc = (partialSearch) => {
  console.log("We are looking for: " + partialSearch);
  var resultObj = [];
  var counter = 0;
  food.forEach(function(obj) {
    let name = obj.nm.toLowerCase();
    if ((name.indexOf(partialSearch.toLowerCase()) === 0) && counter < 10 ) {

      resultObj.push(JSON.stringify(name));
      counter ++;


    }
    //  else if (name.indexOf(partialSearch.toLowerCase()) !== -1) {
    //   console.log(name);
    //}
    // else {
    //   console.log("Sorry NOTHING!")
    // }
  });
  console.log(resultObj);
}



module.exports = {searchfunc};
