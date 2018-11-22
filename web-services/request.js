//request.js
//this function use https get method to get API data
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
