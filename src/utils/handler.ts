import { Handler, APIGatewayProxyResult } from 'aws-lambda'
import { Event } from '../types'
import * as createError from 'http-errors'

export const handler = (
  proxyHandler: Handler<Event, APIGatewayProxyResult>
): Handler<Event, APIGatewayProxyResult> => async (event, context) => {
  try {
    return (await proxyHandler(
      event,
      context,
      undefined
    )) as APIGatewayProxyResult
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({ error: err.message })
    }
  }
}
