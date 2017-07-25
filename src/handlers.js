const fs = require('fs');
const path = require('path');

const handleHomeRoute = (response) => {
  const filePath = path.join(__dirname, `..`, `public`, `index.html`);
  console.log("The filepath is: " + filePath);
  fs.readFile(filePath, (error, file) => {
    if(error) {
      console.log(error);
      response.writeHead(500, `Content-Type: text/html`);
      response.end(`<h1>Sorry, something on our server broke</h1>`)
    } else {
      response.writeHead(200, `Content-Type: text/html`);
      response.end(file);
    }
  })
}

const handlePublic = (response, url) => {
  const extension = url.split(`.`)[1];
  const extensionType = {
    html: "text/html",
    css: "text/ccs",
    js: "application/javascript",
    ico: "image/x-icon"
  }
  const filePath = path.join(__dirname, `..`, url);
  fs.readFile(filePath, (error, file) => {
    if(error) {
      console.log(error);
      response.writeHead(500, `Content-Type: text/html`);
      response.end(`<h1>Sorry, something went wrong</h1>`)
    } else {
      response.writeHead(200, `Content-Type: ${extensionType[extension]}`);
      response.end(file)
    }
  })
}

module.exports = {
  handleHomeRoute,
  handlePublic
};
