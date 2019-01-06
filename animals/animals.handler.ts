import { APIGatewayProxyHandler } from 'aws-lambda'
import { CatModel } from '../models/cat.model'

export const getCat: APIGatewayProxyHandler = async (event, context) => {
  // const Ash = new CatModel({ name: 'Ash', breed: 'Siamese' })
  // Ash.save()
  //   .then(console.log)
  //   .catch(console.log)
  const Ash = await CatModel.get({ name: 'Ash' })
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: Ash
    })
  }
}
