const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const movies = [{title: 'Mean Girls', watched: 'false'},
        {title: 'Hackers', watched: 'false'},
        {title: 'The Grey', watched: 'false'},
        {title: 'Sunshine', watched: 'false'},
        {title: 'Ex Machina', watched: 'false'},]


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });

// use app.get to the end path to send movies in the response object
app.get('/movies', function(req, res) {
  res.send(movies);
});

