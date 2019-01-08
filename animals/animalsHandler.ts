import { CatModel, CatDataSchema } from '../models/cat.model'
import { payload, error } from '../utils'
import * as middy from 'middy'
import { Event, Context } from '../utils/interfaces'
import { bodyParser, httpErrorHandler } from '../middlewares'

export const getCat = middy(async (event: Event, context: Context) => {
  const input = event.queryStringParameters as any
  const cat = await CatModel.get(input).catch(err => {
    throw error(500, err)
  })
  return payload(200, { message: cat })
}).use(httpErrorHandler())

export const createCat = middy(async (event: Event, context: Context) => {
  const input = event.data as CatDataSchema
  const cat = new CatModel(input)
  const result = await cat.save().catch(console.log)
  return payload(200, { message: result })
})
  .use(bodyParser())
  .use(httpErrorHandler())
