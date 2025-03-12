import { Request, Response } from 'express'
import { createBook, listBook } from '../services/db.services'

export const postReqBooks = async (_req: Request, res: Response): Promise<void> => {
  const language = await _req.body
  res.sendStatus(208)
  createBook(language).catch(error => {
    console.error(error)
  })
}
export const getResBooks = async (_req: Request, res: Response): Promise<void> => {
  res.json(listBook().catch(error => console.error(error)))
}
