import { APIGatewayProxyHandler } from 'aws-lambda'

export const handler = (
  proxyHandler: APIGatewayProxyHandler
): APIGatewayProxyHandler => async (event, context) => {
  try {
    return await proxyHandler(event, context, undefined)
  } catch (error) {
    return error
  }
}
