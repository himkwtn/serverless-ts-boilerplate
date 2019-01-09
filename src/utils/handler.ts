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
    const error = {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    }
    if (err instanceof createError.HttpError) {
      error.statusCode = err.statusCode
    }
    return error
  }
}
