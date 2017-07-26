const handlers = require(`./handlers.js`)

const router = (request, response) => {
  const url = request.url;
  console.log('URL: ', url);

  switch (url) {
    case `/`:
      handlers.handleHomeRoute(response)
      break;
    case url.indexOf(`/public/`) !== -1:
      handlers.handlePublic(response, url)
      break;
    default:
      response.writeHead(404)  //Header of HTTP request
      response.end(`<h1>404 File not found</h1>`)
  }

  
}

module.exports = router;
