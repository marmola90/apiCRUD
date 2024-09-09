import { Request, Response } from 'express'
import { handlerHttp } from '../../utils/error.handler'
import { cRol } from '../../types/inventario.types'
import inventariocAmbienteServices from '../../services/inventario/inventariocRol.services'
import { rolAdapter } from '../../adapters/rol.adapters'

export const getAllcRol = async (_req: Request, res: Response): Promise<cRol | any> => {
  try {
    /* const { perPage, currentPage } = req.params
     const allLogs = await logEventosServices.getAllLogsEventos(parseInt(perPage), parseInt(currentPage)) */
    const allcData = await inventariocAmbienteServices.getAllCatalogoRol()

    allcData?.ErrorInterno as boolean ? res.send({ status: 'Error', data: allcData }) : res.send({ status: 'OK', data: allcData })
  } catch (error) {
    handlerHttp(res, 'ERROR_GET_ALL_cRol', error)
  }
}

export const insertRol = async (req: Request, res: Response): Promise<cRol | any> => {
  try {
    const rolVariable = rolAdapter(req)

    const allcData = await inventariocAmbienteServices.rolInsert(rolVariable)

    allcData?.ErrorInterno as boolean ? res.send({ status: 'Error', data: allcData }) : res.send({ status: 'OK', data: allcData })
  } catch (error) {
    handlerHttp(res, 'ERROR_INSERT_cROL', error)
  }
}

export const updateRol = async (req: Request, res: Response): Promise<cRol | any> => {
  try {
    const rolVariable = rolAdapter(req)

    const allcData = await inventariocAmbienteServices.rolUpdate(rolVariable)

    allcData?.ErrorInterno as boolean ? res.send({ status: 'Error', data: allcData }) : res.send({ status: 'OK', data: allcData })
  } catch (error) {
    handlerHttp(res, 'ERROR_UPDATE_cROL', error)
  }
}
