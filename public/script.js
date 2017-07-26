var input = document.getElementById("search");
var searchTerm ;
input.focus();

input.addEventListener("keyup", function(event) {
  searchTerm = input.value;
  console.log(searchTerm);

  var url = "/?search=" + searchTerm;

  var api = new XMLHttpRequest();
  api.onreadystatechange = function() {
    if (api.readyState == 4 && api.status == 200) {
      //  var foodName = JSON.parse(api.responseText);
      // console.log("this is working!");
      //  linkSpace.href = userLink;
    };
  };
  api.open("POST", url, true);
  api.send();
});
