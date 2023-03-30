const AWS = require('aws-sdk');
const DynamoDB = require('serverless-dynamodb-client');

const dynamoDb = DynamoDB.doc;

exports.handler = async (event) => {
  const params = {
    TableName: 'serverless-rest-api',
    Item: {
      id: '123',
      name: 'John Doe'
    }
  };

  await dynamoDb.put(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify('Record created successfully')
  };
};
