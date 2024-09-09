import { Request, Response } from 'express'
import { handlerHttp } from '../../utils/error.handler'
import { cEstado } from '../../types/inventario.types'
import inventariocAmbienteServices from '../../services/inventario/inventariocEstado.services'

export const getAllcEstado = async (_req: Request, res: Response): Promise<cEstado | any> => {
  try {
    /* const { perPage, currentPage } = req.params
     const allLogs = await logEventosServices.getAllLogsEventos(parseInt(perPage), parseInt(currentPage)) */
    const allcData = await inventariocAmbienteServices.getAllCatalogoEstado()

    allcData?.ErrorInterno as boolean ? res.send({ status: 'Error', data: allcData }) : res.send({ status: 'OK', data: allcData })
  } catch (error) {
    handlerHttp(res, 'ERROR_GET_ALL_cEstado', error)
  }
}