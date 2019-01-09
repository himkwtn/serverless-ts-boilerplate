import { object, string } from 'yup'
import { CatDataSchema, CatKeySchema } from './cat.model'

export const createCatSchema = object().shape<CatDataSchema>({
  name: string()
    .trim()
    .required(),
  breed: string()
    .trim()
    .required()
})

export const findCatSchema = object()
  .shape<CatDataSchema>({
    name: string().trim(),
    breed: string().trim()
  })
  .nullable(true)

export const findUniqueCatSchema = object().shape<CatKeySchema>({
  name: string()
    .trim()
    .required()
})
