import { connect, Schema, model } from 'mongoose'

interface IBook {
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

const Book = model<IBook>('Book', bookSchema)

export async function run (): Promise<void> {
  await connect('mongodb://127.0.0.1:27017/bookhub')
  const book = new Book({
    name: 'COSMOS. MUNDOS POSIBLES',
    author: 'Ann Druyan',
    gender: 'Ciencias National Geographic',
    date: new Date(2022, 8, 22)
  })
  await book.save()
}
