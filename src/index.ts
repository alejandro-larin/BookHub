import express from 'express'

import diaryRouter from './routes/diaries'
const app = express()
app.use(express.json())
const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('Ping here!!')
  res.send('ping')
})
app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`)
  console.log('http://localhost:3000')
})
