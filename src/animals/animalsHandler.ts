import { CatModel, CatDataSchema, CatKeySchema } from '../models/cat/cat.model'
import { payload, scanner, handler } from '../utils'
import * as middy from 'middy'
import {
  bodyParser,
  httpErrorHandler,
  queryValidator,
  bodyValidator
} from '../middlewares'
import {
  createCatSchema,
  findCatSchema,
  updateCatSchema
} from '../models/cat/cat.validations'
import { updater } from '../utils/updater'

export const getCat = middy(
  handler(async (event, context) => {
    const input: CatKeySchema = event.pathParameters as any
    const cat = await CatModel.get(input)
    return payload(200, { payload: cat })
  })
).use(httpErrorHandler())

export const getManyCats = middy(
  handler(async (event, context) => {
    const input = event.queryStringParameters as any
    const cat = await CatModel.scan(scanner(input)).exec()
    return payload(200, { payload: cat })
  })
)
  .use(queryValidator(findCatSchema))
  .use(httpErrorHandler())

export const createCat = middy(
  handler(async (event, context) => {
    const input = event.data as CatDataSchema
    const cat = new CatModel(input)
    const result = await cat.save()
    return payload(201, { payload: result })
  })
)
  .use(bodyParser())
  .use(bodyValidator(createCatSchema))
  .use(httpErrorHandler())

export const updateCat = middy(
  handler(async (event, context) => {
    const cat = event.data as CatDataSchema
    const { key, data } = updater<CatKeySchema>(cat, 'name')
    const result = await CatModel.update(key, data)
    return payload(200, { payload: result })
  })
)
  .use(bodyParser())
  .use(bodyValidator(updateCatSchema))
  .use(httpErrorHandler())

export const deleteCat = middy(
  handler(async (event, context) => {
    const cat = event.pathParameters as any
    await CatModel.delete(cat)
    return payload(200, cat)
  })
).use(httpErrorHandler())
