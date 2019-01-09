import { IMiddyMiddlewareObject, IHandlerLambda } from 'middy'
import { Event } from '../types'
import { validateSchema } from '../utils'
import { ObjectSchema } from 'yup'

const dataPath = ({ event: { httpMethod } }: IHandlerLambda<Event>): string => {
  const requestType = {
    GET: 'queryStringParameters',
    POST: 'data'
  }
  return requestType[httpMethod]
}

export const validator = <T extends Object>(
  schema: ObjectSchema<T>
): IMiddyMiddlewareObject => ({
  before: async (handler: IHandlerLambda<Event>, next) => {
    handler.event[dataPath(handler)] = await validateSchema(
      schema,
      handler.event[dataPath(handler)]
    )
    next()
  }
})
