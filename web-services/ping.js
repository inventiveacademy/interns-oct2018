const ha = require('./handler.js');

var str;

function ping() {
	return(ha.ping());	
}

module.exports = ping;
