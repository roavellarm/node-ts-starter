import { IUser } from 'interfaces'
import md5 from 'md5'
// import jwt from 'jsonwebtoken'
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

// export async function generateToken(data) {
//   const { email, password } = data
//   return jwt.sign({ email, password }, process.env.GLOBAL_SAL_KEY, {
//     expiresIn: '1d',
//   })
// }

// export async function decodeToken(token) {
//   return jwt.decode(token, process.env.GLOBAL_SAL_KEY)
// }

// export function verifyToken(token) {
//   return jwt.verify(token, process.env.GLOBAL_SAL_KEY, (error, decode) => {
//     if (error) return { error }
//     return { decode }
//   })
// }

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
