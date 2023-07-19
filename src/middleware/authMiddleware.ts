import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
 const token = req.headers["Authorization"]
 
 if(!token){
   return res.status(401).send({error: "unauthorized token"});
  }

  next()
}