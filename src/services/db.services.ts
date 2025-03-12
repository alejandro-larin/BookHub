import { connect } from 'mongoose'
import { Book, IBook } from '../models/books.models'

export const connectDB = async (uri: string): Promise<void> => {
  await connect(uri)
  console.log('Database Successfully connect')
}

export const createBook = async (language: IBook): Promise<void> => {
  const book = new Book(language)
  await book.save()
  console.log('Collectios save Succes!')
}
export const listBook = async (): Promise<void> => {
  const books = await Book.find({}).exec()
  console.log(books)
}
// async find (query: Record<string, any> = {}): Promise<T[]> {
//   return await this.Model.find(query).exec()
// }
// async findOne (query: Record<string, any>): Promise<T | null> {
//   return await this.Model.findOne(query).exec()
// }
// async update (id: string, data: Partial<T>): Promise<T | null> {
//   return await this.Model.findByIdAndUpdate(id, data, { new: true }).exec()
// }
// async delete (id: string): Promise<T | null> {
//   return await this.Model.findByIdAndDelete(id).exec()
// }
// getModel (): Model<T> {
//   return this.Model
// }
