export * from './bodyParser'
export * from './payload'
export * from './handler'
export * from './validateSchema'
export * from './scanner'
import { string } from 'yup'

const queryRegex = /(=|>|>=|<|<=|contains|beginsWith)[\S].*/
export const queryString = string().matches(queryRegex)
