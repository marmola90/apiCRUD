import xnetService from '../services/xnetServices'
import { Request, Response } from 'express'
import { modulos } from '../interfaces/modulos.interface'
import { handlerHttp } from '../utils/error.handler'

export const getAllModulos = async (_req: Request, res: Response): Promise<modulos | any> => {
  try {
    const allVersionCapturadores = await xnetService.getAllVersionCapturadores()
    res.send({ status: 'OK', data: allVersionCapturadores })
  } catch (error) {
    handlerHttp(res, 'ERROR_GET_ALLVERSIONCAPTURADORES', error)
  }
}

export const getModulo = async (req: Request, res: Response): Promise<modulos | any> => {
  try {
    const idCapturador = req.params.id
    const versionCapturador = await xnetService.getVersionCapturador(idCapturador)
    const datos = (versionCapturador[0] as boolean) ? versionCapturador : 'Capturador no encontrado'
    res.send({ status: 'OK', data: datos })
  } catch (error) {
    handlerHttp(res, 'ERROR_GET_VERSIONCAPTURADOR', error)
  }
}

export const updateModulo = async (params: modulos): Promise<modulos | any> => {
  return params
}

export const insertModulo = async (params: modulos): Promise<modulos | any> => {
  return params
}
