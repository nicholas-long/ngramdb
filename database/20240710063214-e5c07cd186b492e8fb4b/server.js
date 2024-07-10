const express = require('express');
const app = express();
const path = require('path');
const port = 9000;

app.use('/api', express.static(path.join(__dirname, '..')));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
