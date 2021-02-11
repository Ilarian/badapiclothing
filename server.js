const express = require('express')
const app = express()
const port = 3000

app.use(express.static('./dist/badapiclothing'));
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/badapiclothing/'}
);
});
app.listen(process.env.PORT || 8080);
