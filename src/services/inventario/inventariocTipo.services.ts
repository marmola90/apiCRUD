import { IntegracionDB } from '../../config/dbConfig'
import { cTipo, cTipoSO } from '../../types/inventario.types'

const catalogoTipo = 'Inventario.c_Tipo'
const catalogoTipoSO = 'Inventario.c_TipoSO'

const getAllCatalogoTipo = async (): Promise<cTipo | any> => {
  const response = await IntegracionDB<cTipo>(catalogoTipo)
    .select('tipo_id', 'tipo')
    // .orderBy('Usuario', 'asc')
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_GET_ALL', ErrorDetail: err.message }
    })

  return response
}

const getAllCatalogoTipoSO = async (): Promise<cTipoSO | any> => {
  const response = await IntegracionDB<cTipoSO>(catalogoTipoSO)
    .select('tipoSO_id', 'tipoSO')
    // .orderBy('Usuario', 'asc')
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_GET_ALL', ErrorDetail: err.message }
    })

  return response
}

export default { getAllCatalogoTipo, getAllCatalogoTipoSO }
