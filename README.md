# fidelTest
REST API AWS Lambda with Node JS

FIDEL AWS Serverless Test
Objective
The objective of this test is to verify your skills working with our backend stack in a serverless architecture on AWS.

Requirements
The objective is to build a serverless RESTful JSON API using AWS that receives a Fidel Card object and returns the name of the issuer bank, scheme, type and prepaid properties. You should create your own test cards using the Fidel API.

Example
Do a POST request with the following payload

{
    "scheme": "visa",
    "accountId": "3693ac7e-3e2b-432c-8c60-2b786453ca9b",
    "countryCode": "GBR",
    "created": "2018-09-10T10:30:50.494Z",
    "expYear": 2019,
    "expDate": "2019-10-01T00:00:00.000Z",
    "live": false,
    "lastNumbers": "4222",
    "expMonth": 10,
    "updated": "2018-09-10T10:30:50.494Z",
    "programId": "f76ed1be-e434-480b-aa1d-ff48f548f62a",
    "firstNumbers": "465943",
    "id": "612ff311-dc0c-448d-8199-5a371f07433d",
    "type": "visa"
}
return the following object

{
    "bankName" : "HSBC", 
    "scheme": "visa",
    "type": "debit",
    "prepaid": false,
    "country" : "United Kingdom"
}
Info
In test environment, since you can only create cards with defined firstNumbers (e.g. 444400), to get results from the binlist API you will need to edit the payload with firstNumbers from a real card.

Stack
API Gateway + Lambda written in Node.js

Fidel Docs: https://reference.fidel.uk

Fidel API Reference: https://reference.fidel.uk

Binlist.net: https://binlist.net/

Serverless Framework: https://serverless.com

Unit tests with Jest (tests are optional, but valuable :))

Questions
Any questions you may have please contact us at developer@fidel.uk.
