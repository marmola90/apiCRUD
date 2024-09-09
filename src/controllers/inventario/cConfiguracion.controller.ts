import { Request, Response } from 'express'
import { handlerHttp } from '../../utils/error.handler'
import { cConfiguracion } from '../../types/inventario.types'
import inventariocAmbienteServices from '../../services/inventario/inventariocConfiguracion.services'

export const getAllcConfiguracion = async (_req: Request, res: Response): Promise<cConfiguracion | any> => {
  try {
    /* const { perPage, currentPage } = req.params
     const allLogs = await logEventosServices.getAllLogsEventos(parseInt(perPage), parseInt(currentPage)) */
    const allcConfiguracion = await inventariocAmbienteServices.getAllCatalogoConfiguracion()

    allcConfiguracion?.ErrorInterno as boolean ? res.send({ status: 'Error', data: allcConfiguracion }) : res.send({ status: 'OK', data: allcConfiguracion })
  } catch (error) {
    handlerHttp(res, 'ERROR_GET_ALL_cConfiguracion', error)
  }
}
