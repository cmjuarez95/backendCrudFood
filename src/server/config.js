import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import './dbConfig.js'

export default class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT || 3001
    this.middlewares()
  }

  middlewares() {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(morgan('dev'))

    // Archivos estáticos (por si los necesitas en local)
    const __dirname = dirname(fileURLToPath(import.meta.url))
    this.app.use(express.static(join(__dirname, '../../public')))
  }

  // Solo se usa en desarrollo local
  listen() {
    if (process.env.VERCEL) {
      console.log('Ejecutando en entorno Vercel, sin this.app.listen()')
    } else {
      this.app.listen(this.port, () =>
        console.info(`Servidor local en: http://localhost:${this.port}`)
      )
    }
  }
}