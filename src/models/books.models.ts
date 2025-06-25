import { Schema, model, Document } from 'mongoose'

export interface IBook extends Document {
  title: string
  author: string
  publishedYear: number
  genre: string
  language: string
}

const BookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedYear: { type: Number, required: true },
  genre: { type: String, required: true },
  language: { type: String, required: true }
})

export const Book = model<IBook>('Book', BookSchema)
