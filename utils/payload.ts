import { APIGatewayProxyResult } from 'aws-lambda'
import * as _ from 'lodash'
import * as createError from 'http-errors'

export const payload = (
  statusCode: number,
  body: { [key: string]: any } | string
): APIGatewayProxyResult => {
  return {
    statusCode,
    body: _.isObject(body) ? JSON.stringify(body) : (body as string)
  }
}

export const error = (
  statusCode: number,
  body: { [key: string]: any } | string
) => createError(statusCode, _.isObject(body) ? JSON.stringify(body) : body)
