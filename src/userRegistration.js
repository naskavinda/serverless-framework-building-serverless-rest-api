const AWS = require('aws-sdk');
const DynamoDB = require('serverless-dynamodb-client');

const dynamoDb = DynamoDB.doc;

exports.handler = async (event) => {
  console.log(event)
  console.log(event.body)
  let userDetails = JSON.parse(event.body)
  const params = {
    TableName: 'serverless-rest-api',
    Item: userDetails
  };

  await dynamoDb.put(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify('Record created successfully')
  };
};
