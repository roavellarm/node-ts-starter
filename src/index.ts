import dotenv from 'dotenv'
import { connectDataBase, startServer } from './config'
import routes from './routes'

dotenv.config()

const { DATABASE, PORT } = process.env

connectDataBase(String(DATABASE))

startServer(PORT || '3333', routes)
