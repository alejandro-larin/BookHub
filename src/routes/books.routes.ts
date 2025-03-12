import { Router } from 'express'
import { postReqBooks, getResBooks } from '../controllers/books.controllers'

export const router = Router()

router.post('/books', postReqBooks)

router.get('/books', getResBooks)

router.get('/books/:id', (_req, res) => {
  res.send('Book detail')
})

router.put('/books/:id', (_req, res) => {
  res.send('Book updated')
})

router.delete('/books/:id', (_req, res) => {
  res.send('Book deleted')
})
