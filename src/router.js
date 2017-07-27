const handlers = require(`./handlers.js`)
const search = require(`./search.js`)

const router = (request, response) => {
  const url = request.url;
  if (url === `/`) {
    handlers.handleHomeRoute(response)
  } else if (url.indexOf(`/public/`) === 0) {
    handlers.handlePublic(response, url)
  } else if (url.indexOf(`&submit=`) !== -1) {

    const finalSearchSubmit = request.url.split(`search=`)[1];
    const finalSearch = finalSearchSubmit.split(`&submit`)[0];
    console.log("Search:"+finalSearch);
    var finalResult = JSON.stringify(search.finalSearchFunc(finalSearch));
    response.writeHead(200, {"Location": "../"});
    response.end(`<h1>You looked for: </h1>` + finalResult)
  } else if (url.indexOf(`/?search=`) === 0) {
    var partialSearch = request.url.split(`search=`)[1];
    var resultSearch = JSON.stringify(search.searchfunc(partialSearch));
    response.end(resultSearch)
  }  else {
    response.writeHead(404)  //Header of HTTP request
    response.end(`<h1>404 File not found</h1>`)
  }
}

module.exports = router;
