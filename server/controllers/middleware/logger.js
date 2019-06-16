const color = require('colors');

module.exports = function(request, _response, next) {
	const keys = ['method', 'hostname', 'ip', 'body', 'params', 'path', 'protocol', 'route', 'query'];

	keys.forEach (key => {
		const data = request[key];

		if (data) {
			
			if (typeof data === 'object') {
			
				if (Object.keys(data).length) {
					console.log(color.magenta(`The request ${key} object has these properties: `));
					
					for (const [k, v] of Object.entries(data)) {
						console.log(color.yellow(`\t${k} => ${v}`));
					}
				} 
			} else {
				console.log(color.cyan(`The request ${key} is ${data}`));
			}
		}
	});

	next();
};