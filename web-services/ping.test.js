const ping = require('./ping');

test('ping endpoint returns .body.message equal to "pong"', () => {
  //expect.assertions(1);  //don't seem to need this one; not sure what it does
  return ping().then(data => {
  var a = data.body;
  var b = JSON.parse(a); // this step is requred as data.body.message does not work (returns undefined)
  expect(b.message).toBe("pong");
  });
});

