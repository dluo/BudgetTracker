var mysql = require('mysql');

/* load main page */
module.exports.index = function(app) {
	app.get('/', function(req, res) {
		res.render('index');
	});
};

/* login check */
module.exports.login = function(app, sql, config) {
	app.post('/login', function(req, res) {
		sql.connect(config, function(err){
		var request = new sql.Request();
		request.query("SELECT password FROM Credentials", function(err, password) {
			console.log(password)
			if (password) {

				/*if (password != null && password[0] === req.body.password) {
					app.render('index');
					console.log('Login successful!');
				} else {
					app.render('index');
					console.log('Login failed.');
				}*/
				console.log("asdfasdf");
			} else {
				console.log('Error retrieving information: ' + err);
			}
		});
		res.render('index');
		console.log(req.body.username + ' ' + req.body.password);
		});

	});
};