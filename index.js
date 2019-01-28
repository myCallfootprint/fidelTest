
//DEPENDENCIES 
const axios = require("axios");

//CREATE RANDOM 3 DIGIT NUMBER TO APPEND CARD NUMBER
const randomThree = Math.floor(Math.random() * (999 - 1 + 1) + 1).toString()

// FIEDL CARD DATA REQUIRED TO GENERATE TEST CARD OBJ FROM FIDEL API
const fidelCardData = {
  "number": `4444000000004${randomThree}`, // DECREMENT BY 1 EVERYTIME A POST REQUEST IS MADE TO FIDEL API
  "expMonth": 10,
  "expYear": 2019,
  "countryCode": "GBR",
  "termsOfUse": true
};


//CREATE A PAYLOAD USING THE FIDEL API
function createCard(cardData) {

  const headers = {
    "Content-Type": "application/json",
    "Fidel-Key": "pk_test_50d09432-6aad-4999-944d-00f7b3b6ce19" //(SDK TEST KEY)
  }
  //POST TO FIDEL API
  return axios.post("https://api.fidel.uk/v1/programs/af31b47b-ec3c-4795-93ac-0843564daf98/cards", cardData, { "headers": headers })
    .then(res => res)
    .then(data => (data.data.items[0])) //FIDEL API PAYLOAD
    .catch(err => console.log("ooops"));
}

//CALL FUNCTION THAT RETURNS A PROMISE
createCard(fidelCardData).then(res => res)
  .then(createdCard => {

    //POST TO AWS LAMBDA USING GATEWAY ENDPOINT CREATED FROM SLS DEPLOYMENT
    axios.post("https://axoo3orrdk.execute-api.eu-west-2.amazonaws.com/dev/frist-endpoint", createdCard)
      .then(res => res)
      .then(result => console.log(result.data))
      .catch(err => console.log(err));

  })






