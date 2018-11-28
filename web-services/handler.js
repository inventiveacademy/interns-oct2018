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

var getData = async () => {
    return await axios.get('https://api.trello.com/1/members/me/boards?', {
        params: {
            key: process.env.KEY,
            token: process.env.TOKEN,            
            fields: 'name,id'
        }
    });  
}; 
//--------------------------------------------------
//The below function will process the API data and
//put them back to the Board endpoint 
//--------------------------------------------------
module.exports.getBoard = async (event, context) => {
  try{ 
    var tb = await getData();      
  }catch (error){
    console.log();
  } 
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



