import { ObjectSchema, ValidateOptions } from 'yup'
import { pick } from 'ramda'
import { error } from './payload'
export const validateSchema = <T extends object>(
  schema: ObjectSchema<T>,
  object: object,
  options?: ValidateOptions
) => {
  return schema
    .validate(object, { abortEarly: false, stripUnknown: true, ...options })
    .catch(catchError)
}

const parseError = pick(['errors'])
const catchError = e => {
  throw error(400, parseError(e))
}
