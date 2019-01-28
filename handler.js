'use strict';

module.exports.fidelTest = async (event, context) => {

  const lookUp = require('binlookup')();

  if (event.httpMethod === "POST" && event.body) {
    let json = JSON.parse(event.body)
    let firstNumbers = json.fisrtNumbers;
    let newCard = Object.assign({}, json, { firstNumbers: 46590136 });

    return lookUp(newCard.firstNumbers)
      .then(res => {

        let resultObj = {
          bankName: res.bank.name,
          scheme: res.scheme,
          type: res.type,
          prepaid: res.prepaid,
          country: res.country.name

        }
        return {
          statusCode: 200,
          body: JSON.stringify(resultObj),

        }
      })
      .catch(err => console.log(err, "An error occurred"))



  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
