import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import path from 'path'
// import v1RouterXnet from './v1/routes/xnetRoutes'
import { router } from './v1/routes'
import { routerV2 } from './routes/v2'

import compression from 'compression'

const app = express()
app.use(express.json())
app.use(compression())
app.use(cors())

const indexPath = path.resolve(__dirname, '../dist', 'index.html')
console.log(indexPath)

const API = process.env.API

// app.use(express.static(path.resolve(__dirname, 'dist')))
app.use(express.static(path.resolve(__dirname, '../dist')))
console.log(API)

app.get('/config/front.env.js', (_req, res) => {
  res.set('Content-Type', 'application/javascript')
  res.send(API as string)
})
// app.use('/api/v1/', v1RouterXnet)
app.use('/api/v1/', router)
app.use('/api/v2/', routerV2)

app.use('*', (_req, res) => {
  res.sendFile(indexPath)
})

app.listen(process.env.APP_PORT, () => {
  console.log('Running.....')
  console.log(`Conectado en ambiente de: ${process.env.ENV_TYPE as string}`)
  console.log(`Server running on port ${process.env.APP_PORT as string}`)
})
