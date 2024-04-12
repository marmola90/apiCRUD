import { IPerfil } from '../interfaces/modulos.interface'
import { SeguridadDB } from '../config/dbConfig'

const perfilDB = 'ApiCRUD.Perfil'
const moduAsig = 'ApiCRUD.ModulosAsignados'

const getAllPerfil = async (): Promise<IPerfil | any> => {
  const response = await SeguridadDB<IPerfil>(perfilDB)
    .select('IDPerfil', 'Descripcion')
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_GET_ALL_PERFIL', ErrorDetail: err.message }
    })
  return response
}

const getAllRolesModulesCantidad = async (): Promise<IPerfil | any> => {
  const response = await SeguridadDB<IPerfil>(`${perfilDB} as P`)
    .leftJoin(`${moduAsig} as U`, 'U.IDPerfil', '=', 'P.IDPerfil')
    .select('P.Descripcion')
    .count('U.IDPerfil as Cantidad')
    .groupBy('P.Descripcion')
    .catch(err => {
      return { ErrorInterno: 'ERROR_GET_ALL_PERFIL', ErrorDetail: err.message }
    })
  return response
}

const getPerfil = async (id: number): Promise<IPerfil | any> => {
  const response = await SeguridadDB<IPerfil>(perfilDB)
    .select('IDPerfil', 'Descripcion')
    .where('IDPerfil', id)
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_GET_PERFIL', ErrorDetail: err.message }
    })
  return response
}

const updatePerfil = async (perfil: IPerfil): Promise<Number | any> => {
  const response = await SeguridadDB<IPerfil>(perfilDB)
    .where('IDPerfil', perfil.IDPerfil)
    .update({ Descripcion: perfil.Descripcion })
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_UPDATE_PERFIL', ErrorDetail: err.message }
    })
  return response
}

const insertPerfil = async (descripcion: string): Promise<Number | any> => {
  const response = await SeguridadDB<IPerfil>(perfilDB)
    .insert({ Descripcion: descripcion })
    .returning('IDPerfil')
    .then(datos => datos[0])
    .catch(err => {
      return { ErrorInterno: 'ERROR_INSERT_PERFIL', ErrorDetail: err.message }
    })
  return response
}

const deletePerfil = async (IDPerfil: number): Promise<Number | any> => {
  const response = await SeguridadDB<IPerfil>(perfilDB)
    .where('IDPerfil', IDPerfil)
    .del()
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_DELETE_PERFIL', ErrorDetail: err.message }
    })

  return response
}

export default { getAllPerfil, getPerfil, updatePerfil, insertPerfil, deletePerfil, getAllRolesModulesCantidad }
