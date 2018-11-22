var request = require('./request');
var url = 'https://qz9vhk352b.execute-api.us-east-1.amazonaws.com/dev/boards';

test('Number of boards are greater than or equal 1', () => {
    request(url).then(function(value) {
        var obj1 = JSON.parse(value);
        var nb = obj1.data.length;
        expect(nb).toBeGreaterThanOrEqual(1);
    });   
});  
