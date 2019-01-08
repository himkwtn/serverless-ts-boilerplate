import { IMiddyMiddlewareObject, IHandlerLambda } from 'middy'
import { Event } from '../types'
import { validateSchema } from '../utils'
import { ObjectSchema } from 'yup'

export const validator = <T extends Object>(
  schema: ObjectSchema<T>
): IMiddyMiddlewareObject => ({
  before: async (handler: IHandlerLambda<Event>, next) => {
    handler.event.data = await validateSchema(schema, handler.event.data)
    next()
  }
})
