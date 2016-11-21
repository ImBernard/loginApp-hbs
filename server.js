var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
var app = express();




app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index');
});



app.listen(3000)