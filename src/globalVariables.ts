import { Response } from 'express'
import { IUser } from 'interfaces'

export var user: IUser | null = null // eslint-disable-line
export var res: Response | null = null // eslint-disable-line

export function setCurrentUser(_currentUser: any, _response: Response | null) {
  user = _currentUser
  res = _response
}
