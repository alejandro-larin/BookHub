import { Router } from 'express'
import {
  postReqBooks,
  getResBooks,
  getBookById,
  putBookById,
  deleteBookById
} from '../controllers/books.controllers'

export const router = Router()

router.post('/books', postReqBooks)
router.get('/books', getResBooks)
router.get('/books/:id', getBookById)
router.put('/books/:id', putBookById)
router.delete('/books/:id', deleteBookById)
