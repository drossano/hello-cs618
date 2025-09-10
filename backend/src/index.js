import dotenv from 'dotenv'
import { initDatabase } from './db/init.js'
dotenv.config()

import { app } from './app.js'
const PORT = process.env.PORT

await initDatabase()
app.listen(PORT)

console.info(`xpress server running on http://localhost:${PORT}`)
