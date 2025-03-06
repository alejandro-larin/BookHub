import express from 'express'
const router = express.Router()

router.post('/books', (_req, res) => {
  res.send('Book created')
})

router.get('/books', (_req, res) => {
  res.send('Books list')
})

router.get('/books/:id', (_req, res) => {
  res.send('Book detail')
})

router.put('/books/:id', (_req, res) => {
  res.send('Book updated')
})

router.delete('/books/:id', (_req, res) => {
  res.send('Book deleted')
})
