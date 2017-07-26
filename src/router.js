const handlers = require(`./handlers.js`)
const search = require(`./search.js`)

const router = (request, response) => {
  const url = request.url;
  console.log(url.indexOf(`&submit=`));
  if (url === `/`) {
    handlers.handleHomeRoute(response)
  } else if (url.indexOf(`/public/`) === 0) {
    console.log("URL:" + url);
    handlers.handlePublic(response, url)
  } else if (url.indexOf(`&submit=`) !== -1) {
    //var actualSearch = request.url.split(`search=`)[1];
    response.writeHead(500, `Content-Type: text/html`);
    response.end(`<h1>You still can't look for anything</h1>`)
  } else if (url.indexOf(`/?search=`) === 0) {
    var partialSearch = request.url.split(`search=`)[1];
    console.log(partialSearch);
    var resultSearch = JSON.stringify(search.searchfunc(partialSearch));
    response.end(resultSearch)
  }  else {
    response.writeHead(404)  //Header of HTTP request
    response.end(`<h1>404 File not found</h1>`)
  }
}

module.exports = router;
