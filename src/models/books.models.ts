import { Schema, model } from 'mongoose'

export interface IBook {
  name: string
  author: string
  gender: string
  date: Date
}

const bookSchema = new Schema<IBook>({
  name: { type: String, required: true },
  author: { type: String, required: true },
  gender: { type: String, required: true },
  date: { type: Date, required: true }
})

export const Book = model<IBook>('Book', bookSchema)
