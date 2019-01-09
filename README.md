## Requirements

- nodejs
- docker & docker-compose

## Setup

```bash
$ yarn setup
```

## Running locally

```bash
$ yarn dev
```

## Based on the following tools and libraries

- [`aws-nodejs-typescript`](https://github.com/serverless/serverless/tree/master/lib/plugins/create/templates/aws-nodejs-typescript): template for serverless aws lambda in Typescript
- [`serverless-offline`](https://github.com/dherault/serverless-offline): Emulate AWS λ and API Gateway locally when developing your Serverless project
- [`dwmkerr/dynamodb`](https://github.com/dwmkerr/docker-dynamodb) docker image for local dynamoDB
- [`dynamoose`](https://github.com/dynamoosejs/dynamoose): modeling tool for Amazon's DynamoDB
- [`middy`](https://github.com/middyjs/middy): Node.js middleware engine for AWS Lambda
