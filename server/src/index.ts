import express from 'express'
const app = express()
import cors from 'cors'
import {env} from './config/env'

app.use(cors())
app.use(express.json())


app.listen(env.PORT, () => {
    console.log(`Server listening on http://localhost:${env.PORT}`)
})