import dynamoose from '../config/db'
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
export const CatModel = dynamoose.model<CatDataSchema, CatKeySchema>(
  'Cat',
  CatSchema
)
