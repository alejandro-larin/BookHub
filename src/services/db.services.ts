import { Book, IBook } from '../models/books.models'

export const createBook = async (data: IBook): Promise<IBook> => {
  const book = new Book(data)
  return await book.save()
}

export const getAllBooks = async (): Promise<IBook[]> => {
  return await Book.find().exec()
}

export const getBookById = async (id: string): Promise<IBook | null> => {
  return await Book.findById(id).exec()
}

export const updateBook = async (id: string, data: Partial<IBook>): Promise<IBook | null> => {
  return await Book.findByIdAndUpdate(id, data, { new: true }).exec()
}

export const deleteBook = async (id: string): Promise<IBook | null> => {
  return await Book.findByIdAndDelete(id).exec()
}
