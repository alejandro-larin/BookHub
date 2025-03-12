import express from 'express'
import { router } from './routes/books.routes'
import { connectDB } from './services/db.services'
connectDB('mongodb://127.0.0.1:27017/bookhub').catch(error => console.error('Error conection database', error))

export const app = express()
app.use(express.json())

app.use('/api', router)

export default app
