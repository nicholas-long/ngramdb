const express = require('express');
const app = express();
const path = require('path');
const port = 9000;
var child_process = require('child_process')

const filepathsdatafile = '../20240710064155-0821472a1c9188ae741f/filepaths.json'
var filedata = require(filepathsdatafile) // this is a link to the other data set

// watch file for changes
// TODO: this will work on mac and BSD, use inotifywait on linux
var p = child_process.spawn('fswatch', [filepathsdatafile])
p.stdout.on('data', ( data ) => {
  console.log(`detected file changes, closing: ${data}`)
  app.close();
});

for (const fp of filedata) {
  const id_path = fp.replace('../', '/api/')
  console.log(`serving ${fp} -> ${id_path}`)
  app.use(id_path, express.static(path.join(__dirname, fp)));
}

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
