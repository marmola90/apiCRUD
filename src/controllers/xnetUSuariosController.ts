import { Request, Response } from 'express'
import { handlerHttp } from '../utils/error.handler'
import { IXNET_Usuario } from '../interfaces/xnet_tablas.interface'
import xnetUsuariosServices from '../services/xnetUsuariosServices'

export const getAllUsers = async (_req: Request, res: Response): Promise<IXNET_Usuario | any> => {
  try {
    const allUsers = await xnetUsuariosServices.getAllUsers()

    allUsers?.ErrorInterno as boolean ? res.send({ status: 'Error', data: allUsers }) : res.send({ status: 'OK', data: allUsers })
  } catch (error) {
    handlerHttp(res, 'ERROR_GET_ALLUSERS', error)
  }
}

export const getTipoUsuario = async (_req: Request, res: Response): Promise<IXNET_Usuario | any> => {
  try {
    const tipoUsuarios = await xnetUsuariosServices.getTipoUsuario()

    tipoUsuarios?.ErrorInterno as boolean ? res.send({ status: 'Error', data: tipoUsuarios }) : res.send({ status: 'OK', data: tipoUsuarios })
  } catch (error) {
    handlerHttp(res, 'ERROR_GET_TIPO_USUARIOS', error)
  }
}

export const insertUser = async (req: Request, res: Response): Promise<IXNET_Usuario | any> => {
  try {
    const { usuario, nombre, tipo, inst, tipousr } = req.body
    const user: IXNET_Usuario = {
      USUARIO: usuario,
      NOMBRE: nombre,
      TIPO: tipo,
      INST: inst,
      TIPOUSR: tipousr
    }
    const insertUser = await xnetUsuariosServices.crearUsers(user)
    insertUser?.ErrorInterno as boolean ? res.send({ status: 'Error', data: insertUser }) : res.send({ status: 'OK', data: insertUser })
  } catch (error) {
    handlerHttp(res, 'ERROR_INSERT_USER', error)
  }
}
