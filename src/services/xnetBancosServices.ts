import { IXNET_Bancos, IXNET_Institucion, IXNET_Tipo } from '../interfaces/xnet_tablas.interface'
import { xnetDB } from '../config/dbConfig'

const xnetBancos = 'dbo.BANCOS'
const xnetAccesos = '[dbo].XNET_ACCESOS'

const getAllBancos = async (): Promise<IXNET_Bancos | any> => {
  const response = await xnetDB(xnetBancos)
    .select('TIPO', 'INST', 'DESCRIP')
    .where('suc', '=', '`00`')
    .andWhere('ACTIVO', '=', '1')
    .andWhere('INSTIT', '<>', '`010000`')
    .rowNumber('ID', 'TIPO', 'INST')
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_GET_ALL_BANCOS', ErrorDetail: err.message }
    })
  return response
}

const getAllTipo = async (): Promise<IXNET_Tipo | any> => {
  const response = await xnetDB<IXNET_Tipo>(xnetAccesos)
    .select('TIPO')
    .groupBy('TIPO')
    .orderBy('TIPO')
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_GET_ALL_TIPO', ErrorDetail: err.message }
    })
  return response
}

const getAllInstitucion = async (): Promise<IXNET_Institucion | any> => {
  const response = await xnetDB<IXNET_Institucion>(xnetAccesos)
    .select('INSTITUCION')
    .groupBy('INSTITUCION')
    .orderBy('INSTITUCION')
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_GET_ALL_INSTITUCION', ErrorDetail: err.message }
    })
  return response
}

export default { getAllBancos, getAllTipo, getAllInstitucion }
