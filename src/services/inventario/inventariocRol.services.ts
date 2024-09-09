import { IntegracionDB } from '../../config/dbConfig'
import { cRol } from '../../types/inventario.types'

const catalogoRol = 'Inventario.c_Rol'

const getAllCatalogoRol = async (): Promise<cRol | any> => {
  const response = await IntegracionDB<cRol>(catalogoRol)
    .select('rol_id', 'rol')
    // .orderBy('Usuario', 'asc')
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_GET_ALL', ErrorDetail: err.message }
    })

  return response
}

const rolInsert = async (rol: cRol): Promise<number | any> => {
  const response = await IntegracionDB<cRol>(catalogoRol)
    .insert({ rol_id: rol.rol_id, rol: rol.rol })
    .returning('rol_id')
    .then(datos => datos[0])
    .catch((err) => {
      return { ErrorInterno: 'ERROR_INSERT_ROL', ErrorDetail: err.message }
    })

  return response
}

const rolUpdate = async (rol: cRol): Promise<number | any> => {
  const response = await IntegracionDB<cRol>(catalogoRol)
    .where({ rol_id: rol.rol_id })
    .update({ rol: rol.rol })
    .returning('rol_id')
    .then(datos => datos[0])
    .catch((err) => {
      return { ErrorInterno: 'ERROR_UPDATE_ROL', ErrorDetail: err.message }
    })

  return response
}

export default { getAllCatalogoRol, rolInsert, rolUpdate }
