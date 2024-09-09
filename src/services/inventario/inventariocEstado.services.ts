import { IntegracionDB } from '../../config/dbConfig'
import { cEstado } from '../../types/inventario.types'

const catalogoEstado = 'Inventario.c_estado'

const getAllCatalogoEstado = async (): Promise<cEstado | any> => {
  const response = await IntegracionDB<cEstado>(catalogoEstado)
    .select('configuracion_id', 'configuracion')
    // .orderBy('Usuario', 'asc')
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_GET_ALL', ErrorDetail: err.message }
    })

  return response
}

export default { getAllCatalogoEstado }
