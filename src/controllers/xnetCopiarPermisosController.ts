import { Request, Response } from 'express'
import { IXNET_CopiarPermisos, IXNET_CopiarPermisosCapturador } from '../interfaces/xnet_tablas.interface'
import { handlerHttp } from '../utils/error.handler'
import xnetCopiarPermisos from '../services/xnetCopiarPermisos'

export const updateCopiarPermisosCapturador = async (req: Request, res: Response): Promise<IXNET_CopiarPermisosCapturador | any> => {
  try {
    const { datos } = req.body

    const updateCopiarPermisosCapt = await xnetCopiarPermisos.updateCopiarPermisosCapturador(datos)
    updateCopiarPermisosCapt?.ErrorInterno as boolean ? res.send({ status: 'Error', data: updateCopiarPermisosCapt }) : res.send({ status: 'OK', data: updateCopiarPermisosCapt })
  } catch (error) {
    handlerHttp(res, 'ERROR_PUT_COPIAR_PERMISOS_CAPTURADOR', error)
  }
}

export const updateCopiarPermisos = async (req: Request, res: Response): Promise<IXNET_CopiarPermisos | any> => {
  try {
    const { datos } = req.body
    const updateCopiarPermiso = await xnetCopiarPermisos.updateCopiarPermisos(datos)
    updateCopiarPermiso?.ErrorInterno as boolean ? res.send({ status: 'Error', data: updateCopiarPermiso }) : res.send({ status: 'OK', data: updateCopiarPermiso })
  } catch (error) {
    handlerHttp(res, 'ERROR_PUT_COPIAR_PERMISOS_CAPTURADOR', error)
  }
}
