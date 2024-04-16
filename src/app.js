import express from "express"
import router from "./router/index.js"
import 'dotenv/config'
import cors from "cors"
import sequelize from "./database/sequelize.js"

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api', router)

app.listen(process.env.PORT, () => {
  console.log("app is listening on port", process.env.PORT)
})

console.log(process.env.NODE_ENV)

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.')
}).catch((error) => {
  console.error('Unable to connect to the database: ', error)
});
