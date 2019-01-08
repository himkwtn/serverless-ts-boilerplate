import { APIGatewayProxyResult } from 'aws-lambda'
import { is } from 'ramda'
import * as createError from 'http-errors'

export const payload = (
  statusCode: number,
  body: { [key: string]: any } | string
): APIGatewayProxyResult => {
  return {
    statusCode,
    body: stringify(body)
  }
}

export const error = (
  statusCode: number,
  body: { [key: string]: any } | string
) => createError(statusCode, stringify(body))

const stringify = (body: { [key: string]: any } | string) =>
  is(Object, body) ? JSON.stringify(body) : (body as string)
