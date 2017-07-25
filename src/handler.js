// const handler = (request, response) => {
//   const url = request.url;
//   console.log("we made it: " + url);
// }
//
// module.exports = handler;



// const repos = require('../lib/repos.json');
// const handleStaticFiles = require('../lib/handleStatic.js').handleStaticFiles;
// const handleFile = require('../lib/handleStatic.js').handleFile;
// const handleApi = require('../lib/handleApi.js').handleApi;

const handler = (req, res) => {
  const url = req.url;

  console.log('URL: ', url);

  const staticRoute = {
    '/': '../public/index.html',
    '/script': '../logic/script.js',
    '/css': '/public/style.css'
  }[url];

  // const apiRoute = {
  //   // '/api/repos/fac': repos.fac,
  //   // '/api/repos/dwyl': repos.dwyl
  // }[url];

  // if (staticRoute) {
  //   handleFile(res, staticRoute);
  // } else if (apiRoute){
  //   handleApi(res, apiRoute);
  // } else {
  //   handleStaticFiles(res, url);
  // }
}

module.exports = handler;
