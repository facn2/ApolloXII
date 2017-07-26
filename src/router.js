const handlers = require(`./handlers.js`)
const search = require(`./search.js`)

const router = (request, response) => {
  const url = request.url;
  //console.log('URL: ', url);

  if (url === `/`) {
    handlers.handleHomeRoute(response)
  } else if (url.indexOf(`/public/`) === 0) {
    console.log("URL:" + url);
    handlers.handlePublic(response, url)
  } else if (url.indexOf(`/?search=`) === 0) {
    // console.log(request);
    var partialSearch = request.url.split(`search=`)[1];
    console.log(partialSearch);
    search.searchfunc(partialSearch)

  } else {
    response.writeHead(404)  //Header of HTTP request
    response.end(`<h1>404 File not found</h1>`)
  }
}

module.exports = router;
