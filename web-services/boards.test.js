var request = require('./request');
//url is contained /boards endpoint that deployed on AWS lambda 
var url = 'https://mpau0ppws1.execute-api.us-east-1.amazonaws.com/dev/boards';

test('Number of boards are greater than or equal 1', () => {
    request(url).then(function(value) {
        var boards = JSON.parse(value);
        var nb = boards.data.length;
        expect(nb).toBeGreaterThanOrEqual(1);
    });   
});  
