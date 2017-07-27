var input = document.querySelector("#search");
var searchTerm ;
var results = document.querySelector(".result");
var form = document.querySelector("#form");
var api = new XMLHttpRequest();


input.addEventListener("keyup", function(event) {
  searchTerm = input.value.trim();
  //console.log(searchTerm);

    var url = "/?search=" + searchTerm;


    api.onreadystatechange = function() {
      if (api.readyState == 4 && api.status == 200) {
        //console.log(api);
        var resultList = JSON.parse(api.response);

        showResults(resultList, searchTerm);

      };
    };
    api.open("GET", url, true);
    api.send();

});

const showResults = (resultList, searchTerm) => {
  var foodResults = document.createElement('ul');
  //console.log(foodResults);
  if (searchTerm.length !== 0) {
    resultList.forEach(function(element){
      var foodNode = document.createElement('li');
      foodNode.innerText = element;
      foodResults.appendChild(foodNode);
    });
     //console.log(foodResults);
  } else {
    while (foodResults.firstChild) {
      // console.log(foodResults);
      foodResults.removeChild(foodResults.firstChild)
    }
  }
  results.replaceChild(foodResults, results.firstChild);
}

form.addEventListener("submit", function(event) {
    //event.preventDefault();
    var userSearch = input.value;
    //form.reset();
    foodSearch(userSearch);
});

function foodSearch(userSearch) {
  searchTerm = input.value.trim();
  var url = "/?search=" + searchTerm + "&submit=";

  api.onreadystatechange = function() {
    if (api.readyState == 4 && api.status == 200) {
      console.log("Api response: " + api.response);
      var result = JSON.parse(api.response);
      console.log(JSON.parse(api.response));

    //  finalResult(result);

    }
    else {
      results.innerText = "What you are looking for is not available."
    }
  };

  api.open("GET", url, true);
  api.send();
}
