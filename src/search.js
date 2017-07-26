const food = require(`./food.json`);

const searchfunc = (partialSearch) => {
  console.log("We are looking for: " + partialSearch);
  var resultArr = [];
  var resultObj = {};
  var counter = 0;
  food.forEach(function(obj) {
    let name = obj.nm.toLowerCase();
    if ((name.indexOf(partialSearch.toLowerCase()) === 0) && counter < 10 ) {
      console.log(JSON.stringify(name));
      resultArr.push(name);
      //resultObj. = JSON.stringify(name);
      counter ++;


    }
    //  else if (name.indexOsf(partialSearch.toLowerCase()) !== -1) {
    //   console.log(name);
    //}
    // else {
    //   console.log("Sorry NOTHING!")
    // }
  });

 //console.log(resultArr);
//  console.log(resultObj);
  return resultArr;
  // response.writeHead(200, `Content-Type: JSON`);
  // response.end(resultArr)
}



module.exports = {searchfunc};
