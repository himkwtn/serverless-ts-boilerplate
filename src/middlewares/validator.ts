import { IMiddyMiddlewareObject, IHandlerLambda } from 'middy'
import { Event } from '../types'
import { validateSchema } from '../utils'
import { ObjectSchema, ValidateOptions } from 'yup'

const dataPath = {
  QUERY: 'queryStringParameters',
  BODY: 'data'
}

const validator = (path: string) => <T extends object>(
  schema: ObjectSchema<T>,
  options?: ValidateOptions
): IMiddyMiddlewareObject => ({
  before: async (handler: IHandlerLambda<Event>, next) => {
    handler.event[path] = await validateSchema(
      schema,
      handler.event[path],
      options
    )
    next()
  }
})

export const queryValidator = validator(dataPath.QUERY)

export const bodyValidator = validator(dataPath.BODY)
