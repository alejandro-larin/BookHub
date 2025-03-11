import { Router } from 'express'
import { getAcceptBooks } from '../controllers/books.controllers'
export const router = Router()

router.post('/books', getAcceptBooks)

router.get('/books', (_req, res) => {
  res.send('Book list')
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
