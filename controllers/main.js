/* load main page */
module.exports.index = function(app) {
	app.get('/', function(req, res) {
		res.render('index');
	});
};

/* login info */
module.exports.login = function(app) {
	app.post('/login', function(req, res) {
		res.render('index');
		console.log(req.body.username + ' ' + req.body.password);
	});
};