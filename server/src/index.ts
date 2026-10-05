import express from 'express'
const app = express()
import cors from 'cors'
import {env} from './config/env'
import { apiRouter } from './routes/api'

app.use(cors())
app.use(express.json())

app.use("/api",apiRouter)

app.listen(env.PORT, () => {
    console.log(`Server listening on http://localhost:${env.PORT}`)
})