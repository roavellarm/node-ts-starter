/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
import { connectDataBase, startServer } from './config'
import routes from './routes/authRoutes'
import Frete from './frete'

const { PORT } = process.env

Frete()

// connectDataBase(String(DATABASE))

startServer(PORT || '3333', routes)
