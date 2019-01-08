import { ObjectSchema } from 'yup'
import { pick } from 'ramda'
import { error } from './payload'
export const validateSchema = <T extends Object>(
  schema: ObjectSchema<T>,
  object: object
) => {
  return schema
    .validate(object, { abortEarly: false, stripUnknown: true })
    .catch(catchError)
}

const parseError = pick(['errors'])
const catchError = e => {
  throw error(400, parseError(e))
}
