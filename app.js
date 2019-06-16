const express = require('express');
const parser = require('body-parser');
const path = require('path');
const logger = require('./server/controllers/middleware/logger');
const port = process.env.PORT || 8000;
const app = express();

require('./server/config/database');

app.use(logger);
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(function (request, response, next) {
	next();
})
app.use(function (error, request, response, next) {
	console.log('log error to data', error.message);
});
app.use(function (error, request, response, next) {
	response.send('something went wrong:' + error.message);
}); 
app.use(express.static(__dirname + '/dist/anonymousNotesApp'));
app.use(require('./server/routes'));

app.listen(port, () => console.log(`listening on port ${port}`));