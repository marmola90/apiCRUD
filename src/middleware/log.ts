import { NextFunction, Request, Response } from 'express'

const logMiddleware = (_req: Request, _res: Response, next: NextFunction): any => {
  console.log('Hola soy el LOG')
  next()
}

export { logMiddleware }
