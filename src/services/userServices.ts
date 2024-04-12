import { IUser, IUserAsignado } from '../interfaces/modulos.interface'
import { SeguridadDB } from '../config/dbConfig'

const usuarioDB = 'ApiCRUD.Usuario'
const perfilDB = 'ApiCRUD.Perfil'

const getAllUsers = async (): Promise<IUser | any> => {
  const response = await SeguridadDB<IUser>(usuarioDB)
    .select('ID as Id', 'Usuario', 'EstaActivo', 'IDPerfil')
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_GET_ALL_USERS', ErrorDetail: err.message }
    })
  return response
}

const getAllUsersRoles = async (): Promise<IUser | any> => {
  const response = await SeguridadDB<IUser>(usuarioDB)
    .join(perfilDB, 'Perfil.IDPerfil', '=', 'Usuario.IDPerfil')
    .select('ID as Id', 'Usuario', 'EstaActivo', 'Usuario.IDPerfil', 'Perfil.Descripcion')
    // .select('ID as Id', 'Usuario', 'EstaActivo', 'IDPerfil')
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_GET_ALL_USERS', ErrorDetail: err.message }
    })
  return response
}

const getAllUsersRolesCantidad = async (): Promise<IUser | any> => {
  const response = await SeguridadDB<IUser>(`${perfilDB} as P`)
    .leftJoin(`${usuarioDB} as U`, 'U.IDPerfil', '=', 'P.IDPerfil')
    .select('P.Descripcion')
    .count('U.IDPerfil as Cantidad')
    .groupBy('P.Descripcion')
    // .select('ID as Id', 'Usuario', 'EstaActivo', 'IDPerfil')
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_GET_ALL_USERSROLES_COUNT', ErrorDetail: err.message }
    })
  return response
}

const getUser = async (ID: number): Promise<IUser | any> => {
  const response = await SeguridadDB<IUser>(usuarioDB)
    .select('ID as Id', 'Usuario', 'EstaActivo', 'IDPerfil')
    .where(ID)
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_GET_USER', ErrorDetail: err.message }
    })

  return response
}

const updateUser = async (user: IUser): Promise<number | any> => {
  const response = await SeguridadDB<IUser>(usuarioDB)
    .where('ID', '=', user.ID)
    .update({ IDPerfil: user.IDPerfil, EstaActivo: user.EstaActivo })
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_UPDATE_USER', ErrorDetail: err.message }
    })

  return response
}

const insertUser = async (Usuario: string, EstaActivo: boolean, IDPerfil: number): Promise<number | any> => {
  const response = await SeguridadDB<IUser>(usuarioDB)
    .insert({ IDPerfil, EstaActivo, Usuario })
    .returning('ID')
    .then(datos => datos[0])
    .catch(err => {
      return { ErrorInterno: 'ERROR_INSERT_USER', ErrorDetail: err.message }
    })

  return response
}

const deleteUser = async (ID: number): Promise<number | any> => {
  const response = await SeguridadDB<IUser>(usuarioDB)
    .where('ID', ID)
    .del()
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_DELETE_USER', ErrorDetail: err.message }
    })

  return response
}

const asignarRol = async (users: IUserAsignado[]): Promise<number | any> => {
  const response = users.map(async (item) => {
    return await SeguridadDB<IUser>(usuarioDB)
      .update({ IDPerfil: item.IDPerfil })
      .where('ID', '=', item.ID)
      .returning('ID')
      .then(datos => datos[0].ID)
      .catch(err => {
        return { ErrorInterno: 'ERROR_ASIGNAR_ROL', ErrorDetail: err.message }
      })
  })

  const valor = await response.findLast(async item => await item.then(datos => datos))
  console.log(valor)

  return valor
}

const getUsersAsignado = async (IDPerfil: number): Promise<IUser | any> => {
  const response = await SeguridadDB<IUser>(`${usuarioDB} as U`)
    .select('ID as Id', 'Usuario as Descripcion')
    .where(IDPerfil)
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_GET_USERS_ASIGNADOS', ErrorDetail: err.message }
    })
  return response
}

const getUsersAsignados = async (): Promise<IUser | any> => {
  const response = await SeguridadDB<IUser>(`${usuarioDB} as U`)
    .select('ID as Id', 'Usuario as Descripcion', 'IDPerfil')
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_GET_USERS_ASIGNADOS', ErrorDetail: err.message }
    })
  return response
}

export default { getAllUsers, getUser, updateUser, insertUser, deleteUser, asignarRol, getUsersAsignado, getUsersAsignados, getAllUsersRoles, getAllUsersRolesCantidad }
