const AWS = require('aws-sdk');
const DynamoDB = require('serverless-dynamodb-client');

const dynamoDb = DynamoDB.doc;

exports.handler = async (event) => {
  try {
    const data = await dynamoDb.scan({ TableName: 'serverless-rest-api' }).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(data.Items)
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error retrieving users' })
    };
  }
};
