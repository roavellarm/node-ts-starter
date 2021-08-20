import { Router } from 'express'

const route = Router()

const routes = [route.get('/', (req, res) => res.status(200).send({ message: 'Eureka!!' }))]

export default routes
