import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'

import config from './config'

import cors from 'cors'

export const app = express()

app.disable('x-powered-by')
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/test', (req, res) => {
  res.json({
    message: 'init endpoints from node'
  })
})

export const start = () => {
  app.listen(config.port, () => {
    console.log(`REST API on http://localhost:${config.port}/api`)
  })
}
