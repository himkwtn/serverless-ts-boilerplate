import dynamoose from '../config/db'
const { Schema } = dynamoose
const CatSchema = new Schema({
  name: {
    type: String
  },
  breed: {
    type: String
  }
})
interface CatDataSchema {
  name: string
  breed: string
}
interface CatKeySchema {
  name: string
}
export const CatModel = dynamoose.model<CatDataSchema, CatKeySchema>(
  'Cat',
  CatSchema
)
