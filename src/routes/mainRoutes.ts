import { Router } from 'express'

const route = Router()

const routes = [route.get('/', (req, res) => res.status(200).send({ message: 'The API is live' }))]

export default routes
