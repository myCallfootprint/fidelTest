'use strict';

module.exports.fidelTest = async (event, context) => {
// DEPENDENCIES
  const lookUp = require('binlookup')();
// VALIDATION OF BODY OBJECT
  if (event.httpMethod === "POST" && event.body) {
    let json = JSON.parse(event.body)
    let firstNumbers = json.fisrtNumbers;
    let newCard = Object.assign({}, json, { firstNumbers: 46590136 }); // INSERT LIVE CARD BIN

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

};
