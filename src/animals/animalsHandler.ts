import { CatModel, CatDataSchema, CatKeySchema } from '../models/cat/cat.model'
import { payload, error, scanner, handler } from '../utils'
import * as middy from 'middy'
import { bodyParser, httpErrorHandler, validator } from '../middlewares'
import {
  createCatSchema,
  findUniqueCatSchema,
  findCatSchema
} from '../models/cat/cat.validations'

export const getCat = middy(
  handler(async (event, context) => {
    const input: CatKeySchema = event.queryStringParameters as any
    if (input.name === 'Ash') {
      throw new Error('Ash!')
    }
    const cat = await CatModel.get(input)
    return payload(200, { payload: cat })
  })
)
  .use(validator(findUniqueCatSchema))
  .use(httpErrorHandler())

export const getManyCats = middy(
  handler(async (event, context) => {
    const input = event.queryStringParameters as any
    const cat = await CatModel.scan(scanner(input))
      .exec()
      .catch(err => {
        throw error(500, err.message)
      })
    return payload(200, { payload: cat })
  })
)
  .use(validator(findCatSchema))
  .use(httpErrorHandler())

export const createCat = middy(
  handler(async (event, context) => {
    const input = event.data as CatDataSchema
    const cat = new CatModel(input)
    const result = await cat.save().catch(console.log)
    return payload(200, { payload: result })
  })
)
  .use(bodyParser())
  .use(httpErrorHandler())

export const fakeCat = middy(
  handler(async (event, context) => {
    const cat = event.data as CatDataSchema
    return payload(200, { payload: cat })
  })
)
  .use(bodyParser())
  .use(validator(createCatSchema))
  .use(httpErrorHandler())
