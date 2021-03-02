import { Router } from 'express'
import { register, login } from '../controller/AuthController'

const route = Router()

const routes = [route.post('/register', register), route.post('/login', login)]

export default routes
