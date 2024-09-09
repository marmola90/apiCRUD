import { IntegracionDB } from '../../config/dbConfig'
import { responsable } from '../../types/inventario.types'

const responsableDbo = 'Inventario.Responsable'

const getAllResponsable = async (): Promise<responsable | any> => {
  const response = await IntegracionDB<responsable>(responsableDbo)
    .select('Servidor', 'Virtual', 'Tipo', 'Responsable')
    .rowNumber('No', 'Servidor')
    // .orderBy('Usuario', 'asc')
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_GET_ALL', ErrorDetail: err.message }
    })

  return response
}

const responsableInsert = async (respo: responsable): Promise<string | any> => {
  const response = await IntegracionDB<responsable>(responsableDbo)
    .insert({ Servidor: respo.Servidor, Virtual: respo.Virtual, Tipo: respo.Tipo, Responsable: respo.Responsable })
    .returning('Servidor')
    .then(datos => datos[0])
    .catch((err) => {
      return { ErrorInterno: 'ERROR_INSERT_RESPONSABLE', ErrorDetail: err.message }
    })

  return response
}

const responsableUpdate = async (respo: responsable): Promise<string | any> => {
  const response = await IntegracionDB<responsable>(responsableDbo)
    .where({ Servidor: respo.Servidor })
    .update({ Virtual: respo.Virtual, Tipo: respo.Tipo, Responsable: respo.Responsable })
    .returning('Servidor')
    .then(datos => datos[0])
    .catch((err) => {
      return { ErrorInterno: 'ERROR_UPDATE_RESPONSABLE', ErrorDetail: err.message }
    })

  return response
}

const responsableDelete = async (Servidor: string): Promise<Number | any> => {
  const response = await IntegracionDB<responsable>(responsableDbo)
    .where({ Servidor })
    .del()
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_DELETE_RESPONSABLE', ErrorDetail: err.message }
    })

  return response
}

export default { getAllResponsable, responsableInsert, responsableUpdate, responsableDelete }
