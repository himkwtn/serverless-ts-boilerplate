import * as queryString from 'query-string'
import { Event } from './interfaces'
import { APIGatewayProxyEvent } from 'aws-lambda'
import { error } from '.'

export const parseBody = (event: Event | APIGatewayProxyEvent) => {
  const { body, headers } = event
  if (body !== null && body !== undefined) {
    switch (headers['Content-Type']) {
      case 'application/x-www-form-urlencoded':
        return parseQueryString(body)
      case 'application/json':
        return parseJSON(body)
      default:
        throw error(400, JSON.stringify({ error: 'Unsupported Content Type' }))
    }
  }
  throw error(400, JSON.stringify({ error: 'Body is empty.' }))
}

const parse = (body: string, parser: (body: string) => any) => {
  try {
    return parser(body)
  } catch (err) {
    throw error(400, { error: err.message })
  }
}

const parseJSON = (body: string) => parse(body, JSON.parse)

const parseQueryString = (body: string) => parse(body, queryString.parse)
