import { IUser } from 'interfaces'
import md5 from 'md5'
import jwt from 'jsonwebtoken'
import User from '../models/User'

const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const passwordPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/

export const encryptPassword = (password: string) =>
  md5(password, process.env.SECRET as string & { asBytes: true })

export const isValidEmail = (email: string) => emailPattern.test(email)

export const isValidPassword = (password: string) => passwordPattern.test(password)

export async function generateToken(data: IUser | undefined) {
  if (!data) throw Error(`Generate token error`)
  const { email, password } = data
  const { SECRET } = process.env
  return jwt.sign({ email, password }, SECRET || '', { expiresIn: '1d' })
}

export async function decodeToken(token: string) {
  const secret = (process.env.SECRET || '') as string & { json: true }
  return jwt.decode(token, secret)
}

export function verifyToken(token: string) {
  return jwt.verify(token, process.env.SECRET || '', (error, decode) => {
    if (error) return { error }
    return { decode }
  })
}

const USER_FIELDS = 'firstname lastname email'

export async function getUserByEmailAndPassword(email: string, password: string) {
  const user = await User.findOne({ email, password: encryptPassword(password) }, USER_FIELDS)
  return user
}

export async function getUserByEmail(email: string) {
  const user = await User.findOne({ email }, USER_FIELDS)
  return user
}

export async function createUser(data: IUser) {
  const { firstname, lastname, email, password } = data
  const currentUser = await User.create({
    firstname,
    lastname,
    email,
    password: encryptPassword(password),
  })
  const user = currentUser as unknown as IUser
  return user
}
