import {
  map,
  isNil,
  compose,
  split,
  fromPairs,
  adjust,
  prop,
  __,
  aperture
} from 'ramda'
export const scanner = (obj: any): object =>
  isNil(obj) ? {} : map(mapToQuery, obj)

const queryOperator = {
  '=': 'eq',
  '>': 'gt',
  '>=': 'ge',
  '<': 'lt',
  '<=': 'le',
  contains: 'contains',
  beginsWith: 'beginsWith'
}

const mapToQuery = compose(
  fromPairs,
  aperture(2),
  adjust(0, prop(__, queryOperator)),
  split(':')
)
