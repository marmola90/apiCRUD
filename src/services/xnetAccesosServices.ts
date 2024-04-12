import { IXNET_Acceso } from '../interfaces/xnet_tablas.interface'
import { xnetDB } from '../config/dbConfig'

const xnetAccesos = '[dbo].XNET_ACCESOS'

const getAllAccesoXUsuario = async (usuario: string): Promise<IXNET_Acceso | any> => {
  const response = await xnetDB(xnetAccesos)
    .select('USUARIO', 'CAPTURADOR', 'TIPO', 'INSTITUCION', 'SUC')
    .where('USUARIO', '=', usuario)
    .rowNumber('ID', 'TIPO', 'INSTITUCION')
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_GET_ALL_ACCESO_USUARIO', ErrorDetail: err.message }
    })
  return response
}

export default { getAllAccesoXUsuario }
