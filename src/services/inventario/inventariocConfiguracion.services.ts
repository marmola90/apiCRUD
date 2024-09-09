import { IntegracionDB } from '../../config/dbConfig'
import { cConfiguracion } from '../../types/inventario.types'

const catalogoConfiguracion = 'Inventario.c_configuracion'

const getAllCatalogoConfiguracion = async (): Promise<cConfiguracion | any> => {
  const response = await IntegracionDB<cConfiguracion>(catalogoConfiguracion)
    .select('configuracion_id', 'configuracion')
    // .orderBy('Usuario', 'asc')
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_GET_ALL', ErrorDetail: err.message }
    })

  return response
}

export default { getAllCatalogoConfiguracion }
