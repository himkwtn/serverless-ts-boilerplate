import { IMiddyMiddlewareObject, IHandlerLambda } from 'middy'
import { Event } from '../types'
import { parseBody } from '../utils'

export const bodyParser = (): IMiddyMiddlewareObject => ({
  before: (handler: IHandlerLambda<Event>, next) => {
    handler.event.data = parseBody(handler.event)
    next()
  }
})
