import { RequestParamHandler } from 'express'
import { verifyToken, getUserByEmail } from '../utils'
import { setCurrentUser } from '../globalVariables'

export const isAuthorized: RequestParamHandler = (req, res, next) => {
  const token = req.headers.token as string

  if (!token) return res.status(401).send({ error: 'User not authorized' })

  const { error, decode } = verifyToken(token) as any

  if (error) return res.status(401).send({ error: 'Invalid token' })

  const currentUser = getUserByEmail(decode.email)

  if (!currentUser) return res.status(400).json({ message: 'User not found' })

  setCurrentUser(currentUser, res)

  return next()
}
