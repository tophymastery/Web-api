import * as dotenv from 'dotenv'
dotenv.config()

console.log(process.env)

export default {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT || '3000'
}
