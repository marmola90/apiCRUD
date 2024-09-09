import { Request, Response } from 'express'
import { handlerHttp } from '../../utils/error.handler'
import { cAmbiente } from '../../types/inventario.types'
import inventariocAmbienteServices from '../../services/inventario/inventariocAmbiente.services'
export const getAllcAmbiente = async (_req: Request, res: Response): Promise<cAmbiente | any> => {
  try {
    /* const { perPage, currentPage } = req.params
     const allLogs = await logEventosServices.getAllLogsEventos(parseInt(perPage), parseInt(currentPage)) */
    const allcAmbiente = await inventariocAmbienteServices.getAllCatalogoAmbiente()

    allcAmbiente?.ErrorInterno as boolean ? res.send({ status: 'Error', data: allcAmbiente }) : res.send({ status: 'OK', data: allcAmbiente })
  } catch (error) {
    handlerHttp(res, 'ERROR_GET_ALL_cAmbiente', error)
  }
}
