import moduloServices from '../services/moduloServices'
import { Request, Response } from 'express'
import { handlerHttp } from '../utils/error.handler'
import { IModulosAsignados, Imodulos } from '../interfaces/modulos.interface'

export const getAllModulos = async (_req: Request, res: Response): Promise<Imodulos | any> => {
  try {
    const allModulos = await moduloServices.getAllModulos()

    allModulos?.ErrorInterno as boolean ? res.send({ status: 'Error', data: allModulos }) : res.send({ status: 'OK', data: allModulos })
  } catch (error) {
    handlerHttp(res, 'ERROR_GET_ALLMODULOS', error)
  }
}

export const getModulo = async (req: Request, res: Response): Promise<Imodulos | any> => {
  try {
    const idModule = parseInt(req.params.Mod)
    const modulo = await moduloServices.getModulo(idModule)
    modulo?.ErrorInterno as boolean ? res.send({ status: 'Error', data: modulo }) : res.send({ status: 'OK', data: modulo })
    return res
  } catch (error) {
    handlerHttp(res, 'ERROR_GET_MODULOS', error)
  }
}

export const updateModulo = async (req: Request, res: Response): Promise<Imodulos | any> => {
  try {
    const { IdModulo, Descripcion, BDAsociada } = req.body
    const modulo = { IdModulo, Descripcion, BDAsociada }

    const updateModulo = await moduloServices.updateModulo(modulo)
    updateModulo?.ErrorInterno as boolean ? res.send({ status: 'Error', data: updateModulo }) : res.send({ status: 'OK', data: updateModulo })
  } catch (error) {
    handlerHttp(res, 'ERROR_UPDATE_MODULOS', error)
  }
}

export const insertModulo = async (req: Request, res: Response): Promise<Imodulos | any> => {
  try {
    const { Descripcion, BDAsociada } = req.body
    const insertModulo = await moduloServices.insertModulo(Descripcion, BDAsociada)
    insertModulo?.ErrorInterno as boolean ? res.send({ status: 'Error', data: insertModulo }) : res.send({ status: 'OK', data: insertModulo })
  } catch (error) {
    handlerHttp(res, 'ERROR_INSERT_MODULOS', error)
  }
}

export const deleteModulo = async (req: Request, res: Response): Promise<Imodulos | any> => {
  try {
    const { IdModulo } = req.body
    console.log(IdModulo)
    const deleteModulo = await moduloServices.deleteModulo(IdModulo)
    deleteModulo?.ErrorInterno as boolean ? res.send({ status: 'Error', data: deleteModulo }) : res.send({ status: 'OK', data: deleteModulo })
  } catch (error) {
    handlerHttp(res, 'ERROR_DELETE_MODULO', error)
  }
}

export const asignarModulo = async (req: Request, res: Response): Promise<IModulosAsignados | any> => {
  try {
    const asginarMod = req.body
    const asignarModules = await moduloServices.asignarModulo(asginarMod)
    asignarModules?.ErrorInterno as boolean ? res.send({ status: 'Error', data: asignarModules }) : res.send({ status: 'OK', data: asignarModules })
  } catch (error) {
    handlerHttp(res, 'ERROR_ASIGNAR_MODULOS', error)
  }
}

export const deleteModulosAsignados = async (req: Request, res: Response): Promise<IModulosAsignados | any> => {
  try {
    const asginarMod = req.body
    const asignarModules = await moduloServices.deleteModuloAsignado(asginarMod)
    asignarModules?.ErrorInterno as boolean ? res.send({ status: 'Error', data: asignarModules }) : res.send({ status: 'OK', data: asignarModules })
  } catch (error) {
    handlerHttp(res, 'ERROR_ELIMINAR_MODULOS_ASIGNADO', error)
  }
}

export const getModulosAsignado = async (req: Request, res: Response): Promise<IModulosAsignados | any> => {
  try {
    const IDPerfil = req.body
    const getModuloAsignado = await moduloServices.getModulosAsignado(IDPerfil)
    getModuloAsignado?.ErrorInterno as boolean ? res.send({ status: 'Error', data: getModuloAsignado }) : res.send({ status: 'OK', data: getModuloAsignado })
  } catch (error) {
    handlerHttp(res, 'ERROR_GET_MODULOS_ASIGNADO', error)
  }
}
