const handlers = require(`./handlers.js`)
const search = require(`./search.js`)

const router = (request, response) => {
  const url = request.url;
  if (url === `/`) {
    handlers.handleHomeRoute(response)
  } else if (url.indexOf(`/public/`) === 0) {
    handlers.handlePublic(response, url)
  } else if (url.indexOf(`&submit=`) !== -1) {
    var finalResult = search.finalSearchFunc(request);
    response.writeHead(200, {"Location": "../"});
    response.end(`<h1>You looked for: </h1>` + finalResult)
  } else if (url.indexOf(`/?search=`) === 0) {
    response.end(JSON.stringify(search.searchfunc(request)))
  }  else {
    response.writeHead(404)  //Header of HTTP request
    response.end(`<h1>404 File not found</h1>`)
  }
}

module.exports = router;
