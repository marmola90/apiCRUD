import xnetService from '../services/xnetServices'
import { Request, Response } from 'express'
import { IXNET_TABLAS } from '../interfaces/xnet_tablas.interface'
import { handlerHttp } from '../utils/error.handler'
import { obtenerUsuarioAuth } from '../utils/jwt.handler'

export const getAllVersionCapturadores = async (_req: Request, res: Response): Promise<IXNET_TABLAS | any> => {
  try {
    const allVersionCapturadores = await xnetService.getAllVersionCapturadores()
    allVersionCapturadores?.ErrorInterno as boolean ? res.send({ status: 'Error', data: allVersionCapturadores }) : res.send({ status: 'OK', data: allVersionCapturadores })
  } catch (error) {
    handlerHttp(res, 'ERROR_GET_ALLVERSIONCAPTURADORES', error)
  }
}

export const getVersionCapturador = async (req: Request, res: Response): Promise<IXNET_TABLAS | any> => {
  try {
    const idCapturador = req.params.id
    const versionCapturador = await xnetService.getVersionCapturador(idCapturador)
    const datos = (versionCapturador[0] as boolean) ? versionCapturador : 'Capturador no encontrado'
    res.send({ status: 'OK', data: datos })
  } catch (error) {
    handlerHttp(res, 'ERROR_GET_VERSIONCAPTURADOR', error)
  }
}

export const updateVersionCapturadores = async (req: Request, res: Response): Promise<IXNET_TABLAS | any> => {
  try {
    const {
      TABLA, CODIGO, DESCRIPCION, VERSION, ACTIVO, LINK, SIGLAS, LoginPorInstitucion,
      Imagen, ReportaDatos, AccesoAInstituciones, DescripcionHTML, AccesoTipoInstitucion, IdOrdenCategoria
    } = req.body

    const JwtUser = (req.headers.authorization != null) ? req.headers.authorization : null
    const user = obtenerUsuarioAuth(JwtUser as string)

    const tabla = {
      TABLA,
      CODIGO,
      DESCRIPCION,
      VERSION,
      ACTIVO,
      LINK,
      SIGLAS,
      LoginPorInstitucion,
      Imagen,
      ReportaDatos,
      AccesoAInstituciones,
      DescripcionHTML,
      AccesoTipoInstitucion,
      IdOrdenCategoria
    }
    const updateVersionCapturadores = await xnetService.updateVersionCapturadores(tabla, user)
    updateVersionCapturadores?.ErrorInterno as boolean ? res.send({ status: 'Error', data: updateVersionCapturadores }) : res.send({ status: 'OK', data: updateVersionCapturadores })
  } catch (error) {
    handlerHttp(res, 'ERROR_PUT_VERSIONCAPTURADOR', error)
  }
}

export const insertVersionCapturador = async (req: Request, res: Response): Promise<Number | any> => {
  try {
    const {
      TABLA, CODIGO, DESCRIPCION, VERSION, ACTIVO, LINK, SIGLAS, LoginPorInstitucion,
      Imagen, ReportaDatos, AccesoAInstituciones, DescripcionHTML, AccesoTipoInstitucion
    } = req.body

    const JwtUser = (req.headers.authorization != null) ? req.headers.authorization : null
    const user = obtenerUsuarioAuth(JwtUser as string)

    console.log(req.body)
    const datos: IXNET_TABLAS = {
      TABLA,
      CODIGO,
      DESCRIPCION,
      VERSION,
      ACTIVO,
      LINK,
      SIGLAS,
      LoginPorInstitucion,
      Imagen,
      ReportaDatos,
      AccesoAInstituciones,
      DescripcionHTML,
      AccesoTipoInstitucion
    }
    const insertVersionCapturador = await xnetService.insertVersionCapturador(datos, user)
    insertVersionCapturador?.ErrorInterno as boolean ? res.send({ status: 'Error', data: insertVersionCapturador }) : res.send({ status: 'OK', data: insertVersionCapturador })
  } catch (error) {
    handlerHttp(res, 'ERROR_POST_VERSIONCAPTURADOR', error)
  }
}
