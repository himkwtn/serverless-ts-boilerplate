import { object, string } from 'yup'
import { CatDataSchema } from './cat.model'
import { queryString } from '../../utils'

export const createCatSchema = object().shape<CatDataSchema>({
  name: string()
    .trim()
    .required(),
  breed: string()
    .trim()
    .required()
})

export const findCatSchema = object()
  .shape({
    name: queryString,
    breed: queryString
  })
  .nullable(true)

export const updateCatSchema = object().shape<CatDataSchema>({
  name: string()
    .trim()
    .required(),
  breed: string().trim()
})
