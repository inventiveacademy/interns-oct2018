'use strict';

module.exports.ping = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'pong',
      input: event,
    }),
  };
};
//--------------------------------------------------
//This function uses axios to get Trello API boards
//--------------------------------------------------

const axios = require('axios');

const getData = async () => {
  try {
    return await axios.get('https://api.trello.com/1/members/me/boards?', {
        params: {
            key: '96e992b35b800ab9db9dc719439519f0',
            token: '3c50380995f42d4fd2818dc2cdb95aae20c98c1a9231ea037df806ccd4f56898',
            fields: 'name,id'
        }
    });
  } catch (error) {
    console.error(error);
  }
} 
//--------------------------------------------------
//The below function will process the API data and
//put them back to the Board endpoint 
//--------------------------------------------------
module.exports.getBoard = async (event, context) => {
  const tb = await getData();
  //no processing in phase6, just return list of all boards
 
  return {
    statusCode: 200,
    body: JSON.stringify({
      data: tb.data,
      input: event, 
    }),            
  };    
};
  
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };



