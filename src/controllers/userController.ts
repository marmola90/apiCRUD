import { Request, Response } from 'express'
import { handlerHttp } from '../utils/error.handler'
import { IUser } from '../interfaces/modulos.interface'
import userServices from '../services/userServices'

export const getAllUsers = async (_req: Request, res: Response): Promise<IUser | any> => {
  try {
    const allUsers = await userServices.getAllUsers()

    allUsers?.ErrorInterno as boolean ? res.send({ status: 'Error', data: allUsers }) : res.send({ status: 'OK', data: allUsers })
  } catch (error) {
    handlerHttp(res, 'ERROR_GET_ALLUSERS', error)
  }
}

export const getAllUsersRoles = async (_req: Request, res: Response): Promise<IUser | any> => {
  try {
    const allUsers = await userServices.getAllUsersRoles()

    allUsers?.ErrorInterno as boolean ? res.send({ status: 'Error', data: allUsers }) : res.send({ status: 'OK', data: allUsers })
  } catch (error) {
    handlerHttp(res, 'ERROR_GET_ALLUSERS', error)
  }
}

export const getAllUsersRolesCantidad = async (_req: Request, res: Response): Promise<IUser | any> => {
  try {
    const allUsers = await userServices.getAllUsersRolesCantidad()

    allUsers?.ErrorInterno as boolean ? res.send({ status: 'Error', data: allUsers }) : res.send({ status: 'OK', data: allUsers })
  } catch (error) {
    handlerHttp(res, 'ERROR_GET_ALLUSERS_COUNT', error)
  }
}

export const getUser = async (req: Request, res: Response): Promise<IUser | any> => {
  try {
    const ID = parseInt(req.params.Mod)
    const user = await userServices.getUser(ID)
    user?.ErrorInterno as boolean ? res.send({ status: 'Error', data: user }) : res.send({ status: 'OK', data: user })
    return res
  } catch (error) {
    handlerHttp(res, 'ERROR_GET_USER', error)
  }
}

export const updateUser = async (req: Request, res: Response): Promise<IUser | any> => {
  try {
    const { Id, Usuario, EstaActivo, IDPerfil } = req.body
    const ID = Id
    const user = { ID, Usuario, EstaActivo, IDPerfil }

    const updateUser = await userServices.updateUser(user)
    updateUser?.ErrorInterno as boolean ? res.send({ status: 'Error', data: updateUser }) : res.send({ status: 'OK', data: updateUser })
  } catch (error) {
    handlerHttp(res, 'ERROR_UPDATE_USER', error)
  }
}

export const insertUser = async (req: Request, res: Response): Promise<IUser | any> => {
  try {
    const { Usuario, EstaActivo, IDPerfil } = req.body
    const insertUser = await userServices.insertUser(Usuario, EstaActivo, IDPerfil)
    insertUser?.ErrorInterno as boolean ? res.send({ status: 'Error', data: insertUser }) : res.send({ status: 'OK', data: insertUser })
  } catch (error) {
    handlerHttp(res, 'ERROR_INSERT_USER', error)
  }
}

export const deleteUser = async (req: Request, res: Response): Promise<IUser | any> => {
  try {
    const { ID } = req.body
    const deleteUser = await userServices.deleteUser(ID)
    deleteUser?.ErrorInterno as boolean ? res.send({ status: 'Error', data: deleteUser }) : res.send({ status: 'OK', data: deleteUser })
  } catch (error) {
    handlerHttp(res, 'ERROR_DELETE_USER', error)
  }
}

export const asignarRol = async (req: Request, res: Response): Promise<IUser | any> => {
  try {
    const asginarRol = req.body
    const asignarRoles = await userServices.asignarRol(asginarRol)
    asignarRoles?.ErrorInterno as boolean ? res.send({ status: 'Error', data: asignarRoles }) : res.send({ status: 'OK', data: asignarRoles })
  } catch (error) {
    handlerHttp(res, 'ERROR_ASIGNAR_ROL', error)
  }
}

export const getUsersAsignado = async (req: Request, res: Response): Promise<IUser | any> => {
  try {
    const IDPerfil = req.body
    console.log(IDPerfil)
    const getUserAsignado = await userServices.getUsersAsignado(IDPerfil)
    getUserAsignado?.ErrorInterno as boolean ? res.send({ status: 'Error', data: getUserAsignado }) : res.send({ status: 'OK', data: getUserAsignado })
  } catch (error) {
    handlerHttp(res, 'ERROR_GET_USER_ASIGNADO', error)
  }
}
