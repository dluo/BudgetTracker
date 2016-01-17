var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
	res.render('index');
});

app.listen(app.get('port'), function() {
	console.log('Server up at port 3000');
});