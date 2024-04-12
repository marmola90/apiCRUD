import { Request, Response } from 'express'
import { handlerHttp } from '../utils/error.handler'
import { IlogEventos } from '../interfaces/logEventosCnbsBox.interface'
import logEventosServices from '../services/logEventos.Services'

export const getAllLogsEventos = async (_req: Request, res: Response): Promise<IlogEventos | any> => {
  try {
    /* const { perPage, currentPage } = req.params
     const allLogs = await logEventosServices.getAllLogsEventos(parseInt(perPage), parseInt(currentPage)) */
    const allLogs = await logEventosServices.getAllLogsEventos()

    allLogs?.ErrorInterno as boolean ? res.send({ status: 'Error', data: allLogs }) : res.send({ status: 'OK', data: allLogs })
  } catch (error) {
    handlerHttp(res, 'ERROR_GET_ALL_LOG_EVENTOS', error)
  }
}
