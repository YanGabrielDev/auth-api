import {Request, Response} from 'express'
import jwt from 'jsonwebtoken'
import { users } from '../mock/users'

export class UserController{
  public signIn = (req: Request, res: Response) => {
    const email = req.body.email
    const password = req.body.password
    const user = users.find((user) => user.email === email && user.password === password)

    if(!user){
     return res.status(400).send({error: "User not found!"});
    }

    const random = (length = 8) => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let str = '';
      for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return str;
    };
    const token = jwt.sign(req.body, random(),{
      expiresIn: '1 days'
    })
    console.log(jwt.decode(token))
    res.status(200).send({access_token: token})
  }
}