import express, {Request, Response} from 'express'
import userRoute from './routes/userRoute'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use("/user", userRoute)
app.use((req: Request, res: Response) => {
  res.status(500).send({error: "Internal server error"})
})

export default app;