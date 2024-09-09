import { Request, Response } from 'express'
import { loginUser } from '../../services/v2/authServices'
import { handlerHttp } from '../../utils/error.handler'

const loginController = async (req: Request, res: Response): Promise<any> => {
  try {
    const { username, password } = req.body
    const responseUser: string = await loginUser({ username, password })
    console.log(responseUser)
    res.send(responseUser)
  } catch (error) {
    handlerHttp(res, 'ERROR_POST_LOGIN', error)
  }
}

export { loginController }
