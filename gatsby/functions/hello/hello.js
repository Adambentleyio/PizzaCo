// we're making a handler
// these serverless functions are node, but under the hood they are AWS Lambda functions
// check the AWS Lambda docs for more information

exports.handler = async (event, context) => {
  console.log(event);
  return {
    statusCode: '200',
    body: 'Hello',
  };
};
