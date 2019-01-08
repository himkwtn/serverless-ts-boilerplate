import dynamoose from '../config/db'
import { object, string } from 'yup'
const { Schema } = dynamoose
const CatSchema = new Schema({
  name: {
    type: String,
    hashKey: true
  },
  breed: {
    type: String
  }
})

export interface CatDataSchema {
  name: string
  breed: string
}

export interface CatKeySchema {
  name: string
}

export const CatValidator = object().shape<CatDataSchema>({
  name: string()
    .trim()
    .required(),
  breed: string()
    .trim()
    .required()
})

export const CatModel = dynamoose.model<CatDataSchema, CatKeySchema>(
  'Cat',
  CatSchema
)
