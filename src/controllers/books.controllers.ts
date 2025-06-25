import { Request, Response } from 'express'
import * as BookService from '../services/books.services'

export const postReqBooks = async (req: Request, res: Response): Promise<void> => {
  try {
    const newBook = await BookService.createBook(req.body)
    res.status(201).json(newBook)
  } catch (error) {
    res.status(500).json({ message: 'Error creating book', error })
  }
}

export const getResBooks = async (_req: Request, res: Response): Promise<void> => {
  try {
    const books = await BookService.getAllBooks()
    res.json(books)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books', error })
  }
}

export const getBookById = async (req: Request, res: Response): Promise<void> => {
  try {
    const book = await BookService.getBookById(req.params.id)
    if (!book) {
      res.status(404).json({ message: 'Book not found' })
      return
    }
    res.json(book)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching book', error })
  }
}

export const putBookById = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedBook = await BookService.updateBook(req.params.id, req.body)
    if (!updatedBook) {
      res.status(404).json({ message: 'Book not found' })
      return
    }
    res.json(updatedBook)
  } catch (error) {
    res.status(500).json({ message: 'Error updating book', error })
  }
}

export const deleteBookById = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedBook = await BookService.deleteBook(req.params.id)
    if (!deletedBook) {
      res.status(404).json({ message: 'Book not found' })
      return
    }
    res.json({ message: 'Book deleted' })
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book', error })
  }
}
