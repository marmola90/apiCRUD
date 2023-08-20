import express from 'express'
import cors from 'cors'
import 'dotenv/config'

// import v1RouterXnet from './v1/routes/xnetRoutes'
import { router } from './v1/routes'

const app = express()
app.use(express.json())
app.use(cors())

// app.use('/api/v1/', v1RouterXnet)
app.use('/api/v1/', router)

app.listen(process.env.APP_PORT, () => {
  console.log(`Server running on port ${process.env.APP_PORT as string}`)
})
