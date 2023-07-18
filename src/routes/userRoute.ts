import { UserController } from '../controllers/userControler'
import {Router} from 'express'

const route = Router()
const userController = new UserController()

route.post('/', userController.signIn)

export default route;