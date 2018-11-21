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
            key: '52687c4e55d86179f5a1fbf7902a3f5e',
            token: '6d8003663b4bca9ae82d8c2e9de8ab0ffb790da952d9897fd6277691b25009dd'
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
  for(var i = 0; i < tb.data.length; i++){  
    
    if(tb.data[i].name.indexOf('Inter') >= 0){
        return {
          status: 200,
          body: JSON.stringify(tb.data[i])            
        }
    }  
  }
};
  
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };



