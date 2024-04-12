import { Request, Response } from 'express'
import { handlerHttp } from '../utils/error.handler'
import userEncryptServices from '../services/userEncryptServices'
import { IUserEncrypt } from '../interfaces/UserEncrypt.interface'

export const getAllUsers = async (_req: Request, res: Response): Promise<IUserEncrypt | any> => {
  try {
    const allUsers = await userEncryptServices.getUsers()

    allUsers?.ErrorInterno as boolean ? res.send({ status: 'Error', data: allUsers }) : res.send({ status: 'OK', data: allUsers })
  } catch (error) {
    handlerHttp(res, 'ERROR_GET_ALLUSERS', error)
  }
}

export const getUsersAppX = async (_req: Request, res: Response): Promise<IUserEncrypt | any> => {
  try {
    const allUsers = await userEncryptServices.getUsersAppX()

    allUsers?.ErrorInterno as boolean ? res.send({ status: 'Error', data: allUsers }) : res.send({ status: 'OK', data: allUsers })
  } catch (error) {
    handlerHttp(res, 'ERROR_GET_ALLUSERS_APPX', error)
  }
}

export const getUsersPCS = async (_req: Request, res: Response): Promise<IUserEncrypt | any> => {
  try {
    const allUsers = await userEncryptServices.getUsersPCS()

    allUsers?.ErrorInterno as boolean ? res.send({ status: 'Error', data: allUsers }) : res.send({ status: 'OK', data: allUsers })
  } catch (error) {
    handlerHttp(res, 'ERROR_GET_ALLUSERS_PCS', error)
  }
}

export const updateUser = async (req: Request, res: Response): Promise<IUserEncrypt | any> => {
  try {
    const { id, pwd, aplicacion, appx, tipousuario, gestor, isEnable } = req.body
    console.log(req.body)
    const user: IUserEncrypt = {
      Id: id,
      PwdEncryted: pwd,
      DireccionApp: aplicacion,
      AppX: appx,
      TipoUsuario: tipousuario,
      Gestor: gestor,
      isEnable
    }

    const updateUser = await userEncryptServices.usersUpdate(user)
    updateUser?.ErrorInterno as boolean ? res.send({ status: 'Error', data: updateUser }) : res.send({ status: 'OK', data: updateUser })
  } catch (error) {
    handlerHttp(res, 'ERROR_UPDATE_USER', error)
  }
}

export const insertUser = async (req: Request, res: Response): Promise<IUserEncrypt | any> => {
  try {
    const { usuario, pwd, gestor, aplicacion, appx, tipousuario } = req.body
    const user: IUserEncrypt = {
      Usuario: usuario,
      PwdEncryted: pwd,
      Gestor: gestor,
      DireccionApp: aplicacion,
      AppX: appx,
      TipoUsuario: tipousuario
    }
    const insertUser = await userEncryptServices.usersInsert(user)
    insertUser?.ErrorInterno as boolean ? res.send({ status: 'Error', data: insertUser }) : res.send({ status: 'OK', data: insertUser })
  } catch (error) {
    handlerHttp(res, 'ERROR_INSERT_USER', error)
  }
}

export const decryptPass = async (req: Request, res: Response): Promise<IUserEncrypt | any> => {
  try {
    const { Id } = req.body
    const decryptPassEn = await userEncryptServices.decryptPass(Id)

    decryptPassEn?.ErrorInterno as boolean ? res.send({ status: 'Error', data: decryptPassEn }) : res.send({ status: 'OK', data: decryptPassEn })
  } catch (error) {
    handlerHttp(res, 'ERROR_GET_PASS_DECRYPT', error)
  }
}

export const getTipoUsuario = async (_req: Request, res: Response): Promise<IUserEncrypt | any> => {
  try {
    const tipoUsuarios = await userEncryptServices.getTipoUsuario()

    tipoUsuarios?.ErrorInterno as boolean ? res.send({ status: 'Error', data: tipoUsuarios }) : res.send({ status: 'OK', data: tipoUsuarios })
  } catch (error) {
    handlerHttp(res, 'ERROR_GET_TIPO_USUARIOS', error)
  }
}
