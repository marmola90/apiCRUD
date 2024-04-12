import { IDPermisos, IPermisosOtogados } from '../interfaces/modulos.interface'
import { SeguridadDB } from '../config/dbConfig'

const permisosDB = 'ApiCRUD.Permisos'
const PermisosOtorgados = 'ApiCRUD.PermisosOtorgados'

const getAllPermisos = async (): Promise<IDPermisos | any> => {
  const response = await SeguridadDB<IDPermisos>(permisosDB)
    .select('IDPermisos as Id', 'Descripcion')
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_GET_ALL_PERMISOS', ErrorDetail: err.message }
    })
  return response
}

const getPermiso = async (id: number): Promise<IDPermisos | any> => {
  const response = await SeguridadDB<IDPermisos>(permisosDB)
    .select('IDPermisos', 'Descripcion')
    .where('IDPermisos', id)
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_GET_PERMISOS', ErrorDetail: err.message }
    })
  return response
}

const updatePermiso = async (permisos: IDPermisos): Promise<Number | any> => {
  const response = await SeguridadDB<IDPermisos>(permisosDB)
    .where('IDPermisos', permisos.IDPermisos)
    .update({ Descripcion: permisos.Descripcion })
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_UPDATE_PERMISOS', ErrorDetail: err.message }
    })
  return response
}

const insertPermiso = async (descripcion: string): Promise<Number | any> => {
  const response = await SeguridadDB<IDPermisos>(permisosDB)
    .insert({ Descripcion: descripcion })
    .returning('IDPermisos')
    .then(datos => datos[0])
    .catch(err => {
      return { ErrorInterno: 'ERROR_INSERT_PERMISOS', ErrorDetail: err.message }
    })
  return response
}

const asignarPermiso = async (permisosAsignados: IPermisosOtogados[]): Promise<Number | any> => {
  const response = permisosAsignados.map(async (item) => {
    return await SeguridadDB<IPermisosOtogados>(PermisosOtorgados)
      .insert(item)
      .where('IDPerfil', '<>', item.IDPerfil)
      .andWhere('IDPermisos', '<>', item.IDPermisos)
      .returning('IDPerfil')
      .then(datos => datos[0].IDPerfil)
      .catch(err => {
        return { ErrorInterno: 'ERROR_ASIGNAR_PERMISOS', ErrorDetail: err.message }
      })
  })

  const valor = await response.findLast(async item => await item.then(datos => datos))
  console.log(valor)

  return valor
}

const deletePermisoAsignado = async (permisosAsignados: IPermisosOtogados[]): Promise<Number | any> => {
  console.log(permisosAsignados)
  const response = permisosAsignados.map(async (item) => {
    return await SeguridadDB<IPermisosOtogados>(PermisosOtorgados)
      .where('IDPerfil', '=', item.IDPerfil)
      .andWhere('IDPermisos', '=', item.IDPermisos)
      .delete('IDPerfil')
      .then(datos => datos)
      .catch(err => {
        return { ErrorInterno: 'ERROR_ELIMINAR_PERMISOS_ASIGNADOS', ErrorDetail: err.message }
      })
  })

  const valor = await response.findLast(async item => await item.then(datos => datos))
  console.log(valor)

  return valor
}

const getPermisoAsignado = async (IDPerfil: number): Promise<IPermisosOtogados | any> => {
  const response = await SeguridadDB<IPermisosOtogados>(PermisosOtorgados)
    .join(permisosDB, 'permisos.IDPermisos', '=', 'PermisosOtorgados.IDPermisos')
    .select('PermisosOtorgados.IDPermisos as Id', 'Descripcion')
    .where(IDPerfil)
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_GET_PERMISOS_ASIGNADOS', ErrorDetail: err.message }
    })
  return response
}

export default { getAllPermisos, getPermiso, updatePermiso, insertPermiso, asignarPermiso, getPermisoAsignado, deletePermisoAsignado }
