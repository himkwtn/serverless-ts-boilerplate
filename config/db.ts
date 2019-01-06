import * as dynamoose from 'dynamoose'
import * as dotenv from 'dotenv'
dotenv.config()
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
  console.log('using local db')
  dynamoose.local('http://localhost:8000')
}

export default dynamoose
