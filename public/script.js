var input = document.querySelector("#search");
var searchTerm ;
var results = document.querySelector(".result");


input.addEventListener("keyup", function(event) {
  searchTerm = input.value.trim();
  console.log(searchTerm);

    var url = "/?search=" + searchTerm;

    var api = new XMLHttpRequest();
    api.onreadystatechange = function() {
      if (api.readyState == 4 && api.status == 200) {
        //console.log(api);
        var resultList = JSON.parse(api.response);
        showResults(resultList);

      };
    };
    api.open("GET", url, true);
    api.send();

});

const showResults = (resultList) => {
  var foodResults = document.createElement('ul');
  resultList.forEach(function(element){
    var foodNode = document.createElement('li');
    foodNode.innerText = element;
    foodResults.appendChild(foodNode);
  })
  results.replaceChild(foodResults, results.firstChild);
}
