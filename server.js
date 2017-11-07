const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'app/public')));

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
