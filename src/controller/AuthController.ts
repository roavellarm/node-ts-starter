import { Request, Response } from 'express'

import { registerValidation, loginValidation } from '../validators/AuthValidator'
import { registerConfirmationEmail } from '../emails/registerConfirmationEmail'
import { createUser, generateToken } from '../utils'

export async function register(req: Request, res: Response) {
  try {
    const { errors } = await registerValidation(req.body)

    if (errors.length) return res.status(404).send({ errors })

    const user = await createUser(req.body)

    const token = await generateToken(user)

    await registerConfirmationEmail(user)

    return res.status(200).json({ user, token })
  } catch (error) {
    return res.status(400).send({ message: 'Unexpected Error' })
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { errors, user } = await loginValidation(req.body)

    if (errors.length) return res.status(404).send({ errors })

    const token = await generateToken(user)

    return res.status(200).json({ user, token })
  } catch (error) {
    return res.status(400).send({ message: 'Unexpected Error' })
  }
}
