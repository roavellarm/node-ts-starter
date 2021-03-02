import { IUser } from 'interfaces'
import md5 from 'md5'
import jwt from 'jsonwebtoken'
import User from '../models/user'

export function encryptPassword(password: string) {
  return md5(password, process.env.SECRET as string & { asBytes: true })
}

export function isValidEmail(email: string) {
  // eslint-disable-next-line no-useless-escape
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}

export function isValidPassword(password: string) {
  const valid = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/
  if (valid.test(password)) return true
  return false
}

export async function generateToken(data: IUser) {
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

export async function getUserByEmailAndPassword(email: string, password: string) {
  const user = await User.findOne({ email, password: encryptPassword(password) })
  return user
}

export async function getUserByEmail(email: string) {
  const user = await User.findOne({ email })
  return user
}

export async function createUser(data: IUser) {
  const { firstname, lastname, email, password } = data
  const user = await User.create({
    firstname,
    lastname,
    email,
    password: encryptPassword(password),
  })
  return user
}
