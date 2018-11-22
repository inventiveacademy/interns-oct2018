//request.js
const https = require('https');
function request(url){
    return new Promise(resolve => {
        https.get(url, (resp) => {
            let data = '';
            resp.on('data', (chunk) => { data += chunk; });
            resp.on('end', () => { resolve(data); });
        });
    });
}
module.exports = request;
