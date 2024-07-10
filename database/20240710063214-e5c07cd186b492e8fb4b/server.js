const express = require('express');
const app = express();
const path = require('path');
const port = 9000;

var filedata = require('../20240710064155-0821472a1c9188ae741f/filepaths.json') // this is a link to the other data set

for (const fp of filedata) {
  const id_path = fp.replace('../', '/api/')
  console.log(`serving ${fp} -> ${id_path}`)
  app.use(id_path, express.static(path.join(__dirname, fp)));
}

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
