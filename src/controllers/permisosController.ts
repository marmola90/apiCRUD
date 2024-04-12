import { Request, Response } from 'express'
import { handlerHttp } from '../utils/error.handler'
import { IDPermisos, IPermisosOtogados } from '../interfaces/modulos.interface'
import permisosServices from '../services/permisosServices'

export const getAllPermisos = async (_req: Request, res: Response): Promise<IDPermisos | any> => {
  try {
    const allPermisos = await permisosServices.getAllPermisos()

    allPermisos?.ErrorInterno as boolean ? res.send({ status: 'Error', data: allPermisos }) : res.send({ status: 'OK', data: allPermisos })
  } catch (error) {
    handlerHttp(res, 'ERROR_GET_ALLPERMISOS', error)
  }
}

export const getPermiso = async (req: Request, res: Response): Promise<IDPermisos | any> => {
  try {
    const idPermisos = parseInt(req.params.Mod)
    const permisos = await permisosServices.getPermiso(idPermisos)
    permisos?.ErrorInterno as boolean ? res.send({ status: 'Error', data: permisos }) : res.send({ status: 'OK', data: permisos })
    return res
  } catch (error) {
    handlerHttp(res, 'ERROR_GET_PERMISO', error)
  }
}

export const updatePermiso = async (req: Request, res: Response): Promise<IDPermisos | any> => {
  try {
    const { IDPermisos, Descripcion } = req.body
    const permisos = { IDPermisos, Descripcion }

    const updatePermisos = await permisosServices.updatePermiso(permisos)
    updatePermisos?.ErrorInterno as boolean ? res.send({ status: 'Error', data: updatePermisos }) : res.send({ status: 'OK', data: updatePermisos })
  } catch (error) {
    handlerHttp(res, 'ERROR_UPDATE_PERMISO', error)
  }
}

export const insertPermiso = async (req: Request, res: Response): Promise<IDPermisos | any> => {
  try {
    const { Descripcion } = req.body
    const insertPermiso = await permisosServices.insertPermiso(Descripcion)
    insertPermiso?.ErrorInterno as boolean ? res.send({ status: 'Error', data: insertPermiso }) : res.send({ status: 'OK', data: insertPermiso })
  } catch (error) {
    handlerHttp(res, 'ERROR_INSERT_PERMISO', error)
  }
}

export const asignarPermiso = async (req: Request, res: Response): Promise<IPermisosOtogados | any> => {
  try {
    const asignarPer = req.body
    const asignarPermiso = await permisosServices.asignarPermiso(asignarPer)
    asignarPermiso?.ErrorInterno as boolean ? res.send({ status: 'Error', data: asignarPermiso }) : res.send({ status: 'OK', data: asignarPermiso })
  } catch (error) {
    handlerHttp(res, 'ERROR_ASIGNAR_PERMISO', error)
  }
}

export const deletePermisosAsignados = async (req: Request, res: Response): Promise<IPermisosOtogados | any> => {
  try {
    const asignarPer = req.body
    const asignarPermiso = await permisosServices.deletePermisoAsignado(asignarPer)
    asignarPermiso?.ErrorInterno as boolean ? res.send({ status: 'Error', data: asignarPermiso }) : res.send({ status: 'OK', data: asignarPermiso })
  } catch (error) {
    handlerHttp(res, 'ERROR_ELIMINAR_PERMISO_ASIGNADO', error)
  }
}

export const getPermisoAsignado = async (req: Request, res: Response): Promise<IPermisosOtogados | any> => {
  try {
    const IDPerfil = req.body
    const getPermisoAsignado = await permisosServices.getPermisoAsignado(IDPerfil)
    getPermisoAsignado?.ErrorInterno as boolean ? res.send({ status: 'Error', data: getPermisoAsignado }) : res.send({ status: 'OK', data: getPermisoAsignado })
  } catch (error) {
    handlerHttp(res, 'ERROR_GET_PERMISO_ASIGNADO', error)
  }
}
