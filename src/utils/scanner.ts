import { map, isNil } from 'ramda'
export const scanner = (obj: any): Object =>
  isNil(obj) ? {} : map(v => ({ eq: v }), obj)
