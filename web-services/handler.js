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
const getData = async (urlPath, params) => {
    return await axios.get(urlPath, {
        params: params
    });  
};
//--------------------------------------------------
//creat obj contain date only
//--------------------------------------------------
function dateOnly(d){
  this.cDate = d;
}

//----------------------------------------------------------
// function return array of date objects for chartdb endpoint
//----------------------------------------------------------
var processDB = (jsdb, field) => {
  var dateArr = [];
  var i;
  switch(field){
      case 'cc':
        for (i = 0; i < jsdb.length; i++)
            dateArr[i] = new dateOnly(jsdb[i].date);
        break;
      default:
        for (i = 0; i < jsdb.length; i++)
          dateArr[i] = new dateOnly(jsdb[i].dateLastActivity);
  } 
  return dateArr;
};

//--------------------------------------------------
//The below function will process the API data and
//put them back to the Board endpoint 
//--------------------------------------------------
module.exports.getBoard = async (event, context) => {
  try{
    var urlPath = 'https://api.trello.com/1/members/me/boards?';
    var params = {
      key: process.env.KEY,
      token: process.env.TOKEN,            
      fields: 'name,id'
    } 
    var tb = await getData(urlPath,params);      
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
  
//--------------------------------------------------
//The function will get card data from Trello, 
//and put them back to the /chardb endpoint 
//--------------------------------------------------
module.exports.getAction = async (event, context) => {
  var hasError = false;
  
  try{ 
    var urlPath = 'https://api.trello.com/1/boards/5b33a8f601c94a9c9b0e71d8/actions?';
    var params = {                  
      limit: 1000,
      since: '2018-10-01',
      fields: 'date',
      filter: 'createCard',
      memberCreator: false,
      key: process.env.KEY,
      token: process.env.TOKEN
    }
    //get created cards info from Trello API   
    var tb1 = await getData(urlPath, params);
    
    urlPath = 'https://api.trello.com/1/lists/5b33d1f83c2f9cf65b0d80dd/cards?'
    params = {                  
      fields: 'dateLastActivity',
      key: process.env.KEY,
      token: process.env.TOKEN
    }
    //get resolved cards info from Trello API  
    var tb2 = await getData(urlPath, params);     
  }catch (error){
    console.log();
    hasError = true;
  } 
  //process and return data for chartdb endpoint 
  return {
    headers:{
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credential': true,
    },
    statusCode: hasError? 500 : 200,
    body: JSON.stringify({
      created: processDB(tb1.data,'cc'),          
      resolved: processDB(tb2.data,'rc'),     
    }),        
  };  
}; 
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };



