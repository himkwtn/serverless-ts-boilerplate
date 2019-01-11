import * as dynamoose from 'dynamoose'
import * as dotenv from 'dotenv'
dotenv.config()
if (process.env.NODE_ENV === 'development') {
  console.log('using local db')
  dynamoose.local('http://localhost:8000')
}

export default dynamoose
