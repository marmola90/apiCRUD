import { IntegracionDB } from '../../config/dbConfig'
import { cAmbiente } from '../../types/inventario.types'

const catalogoAmbiente = 'Inventario.c_ambiente'

const getAllCatalogoAmbiente = async (): Promise<cAmbiente | any> => {
  const response = await IntegracionDB<cAmbiente>(catalogoAmbiente)
    .select('ambiente_id', 'ambiente')
    // .orderBy('Usuario', 'asc')
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_GET_ALL', ErrorDetail: err.message }
    })

  return response
}

export default { getAllCatalogoAmbiente }
