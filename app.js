var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var main = require('./controllers/main');
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'budgettrackerserver.database.windows.net',
	user: 'shinigami',
	password: 'Davidluo!',
	database: 'BudgetTrackerDatabase'
});

var app = express();

app.engine('ejs', require('ejs').__express);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());

main.index(app);
main.login(app, connection);

app.listen(app.get('port'), function() {
	console.log('Server up at port 3000');
});