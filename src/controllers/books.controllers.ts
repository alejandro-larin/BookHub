import { Request, Response } from 'express'

export const getAcceptBooks = async (req: Request, res: Response): Promise<void> => {
  const language = await req.body
  console.log(language)
  res.sendStatus(200)
}
