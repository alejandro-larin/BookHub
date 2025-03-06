import express from 'express'

const router = express.Router()

router.post('/books', (req, res) => {
  res.send('Book created')
})

router.get('/books', (req, res) => {
  res.send('Books list')
})

router.get('/books/:id', (req, res) => {
  res.send('Book detail')
})

router.put('/books/:id', (req, res) => {
  res.send('Book updated')
})

router.delete('/books/:id', (req, res) => {
  res.send('Book deleted')
})
