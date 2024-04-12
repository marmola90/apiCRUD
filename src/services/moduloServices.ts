import { IModulosAsignados, Imodulos } from '../interfaces/modulos.interface'
import { SeguridadDB } from '../config/dbConfig'

const modulosDB = 'ApiCRUD.Modulos'
const modulosAsigDB = 'ApiCRUD.ModulosAsignados'

const getAllModulos = async (): Promise<Imodulos | any> => {
  const response = await SeguridadDB<Imodulos>(modulosDB)
    .select('IdModulo', 'Descripcion', 'BDAsociada')
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_GET_ALL_MODULES', ErrorDetail: err.message }
    })
  return response
}

const getModulo = async (id: number): Promise<Imodulos | any> => {
  const response = await SeguridadDB<Imodulos>(modulosDB)
    .select('IdModulo', 'Descripcion', 'BDAsociada')
    .where('IdModulo', id)
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_GET_MODULE', ErrorDetail: err.message }
    })
  return response
}

const updateModulo = async (modulo: Imodulos): Promise<Number | any> => {
  const response = await SeguridadDB<Imodulos>(modulosDB)
    .where('IdModulo', modulo.IdModulo)
    .update({ Descripcion: modulo.Descripcion, BDAsociada: modulo.BDAsociada })
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_UPDATE_MODULE', ErrorDetail: err.message }
    })
  return response
}

const insertModulo = async (descripcion: string, BDAsociada: string): Promise<Number | any> => {
  const response = await SeguridadDB<Imodulos>(modulosDB)
    .insert({ Descripcion: descripcion, BDAsociada })
    .returning('IdModulo')
    .then(datos => datos[0])
    .catch(err => {
      return { ErrorInterno: 'ERROR_INSERT_MODULE', ErrorDetail: err.message }
    })
  return response
}

const deleteModulo = async (IdModulo: number): Promise<Number | any> => {
  const response = await SeguridadDB<Imodulos>(modulosDB)
    .where('IdModulo', IdModulo)
    .del()
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_DELETE_MODULE', ErrorDetail: err.message }
    })

  return response
}

const asignarModulo = async (modulosAsignados: IModulosAsignados[]): Promise<Number | any> => {
  const response = modulosAsignados.map(async (item) => {
    return await SeguridadDB<IModulosAsignados>(modulosAsigDB)
      .insert(item)
      .where('IDPerfil', '<>', item.IDPerfil)
      .andWhere('IdModulo', '<>', item.IdModulo)
      .returning('IDPerfil')
      .then(datos => datos[0].IDPerfil)
      .catch(err => {
        return { ErrorInterno: 'ERROR_ASIGNAR_MODULOS', ErrorDetail: err.message }
      })
  })

  const valor = await response.findLast(async item => await item.then(datos => datos))
  console.log(valor)

  return valor
}

const deleteModuloAsignado = async (modulosAsignados: IModulosAsignados[]): Promise<Number | any> => {
  console.log(modulosAsignados)
  const response = modulosAsignados.map(async (item) => {
    return await SeguridadDB<IModulosAsignados>(modulosAsigDB)
      .where('IDPerfil', '=', item.IDPerfil)
      .andWhere('IdModulo', '=', item.IdModulo)
      .delete('IDPerfil')
      .then(datos => datos)
      .catch(err => {
        return { ErrorInterno: 'ERROR_ELIMINAR_MODULOS_ASIGNADOS', ErrorDetail: err.message }
      })
  })

  const valor = await response.findLast(async item => await item.then(datos => datos))
  console.log(valor)

  return valor
}

const getModulosAsignado = async (IDPerfil: number): Promise<IModulosAsignados | any> => {
  const response = await SeguridadDB<IModulosAsignados>(modulosAsigDB)
    .join(modulosDB, 'Modulos.IdModulo', '=', 'ModulosAsignados.IdModulo')
    .select('ModulosAsignados.IdModulo as IdModulo', 'Descripcion')
    .where(IDPerfil)
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_GET_MODULOS,ASIGNADOS', ErrorDetail: err.message }
    })
  return response
}

export default { getAllModulos, getModulo, updateModulo, insertModulo, deleteModulo, asignarModulo, getModulosAsignado, deleteModuloAsignado }
