import { APIGatewayProxyEvent } from 'aws-lambda'

export interface Event extends APIGatewayProxyEvent {
  data?: {
    [key: string]: any
  }
}

export { Context } from 'aws-lambda'
