import { IntegracionDB } from '../config/dbConfig'
import { ITipoUsuario, IUserEncrypt } from '../interfaces/UserEncrypt.interface'

const usuarioEncryptTable = 'Seguridad.UsuarioEncrypt'
const TipoUserTable = 'Seguridad.TipoUsuario'

const getUsers = async (): Promise<IUserEncrypt | any> => {
  const response = await IntegracionDB<IUserEncrypt>(usuarioEncryptTable)
    .select('Id', 'Usuario', 'Gestor', 'DireccionApp', 'AppX', 'TipoUsuario', 'FechaModificacion', 'PwdEncryted', 'isEnable')
    // .orderBy('Usuario', 'asc')
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_GET_ALL_USERS_ENCRYPT', ErrorDetail: err.message }
    })

  return response
}

const getUsersAppX = async (): Promise<IUserEncrypt | any> => {
  const response = await IntegracionDB<IUserEncrypt>(usuarioEncryptTable)
    .select('Id', 'Usuario', 'Gestor', 'DireccionApp', 'AppX', 'TipoUsuario', 'FechaModificacion', 'PwdEncryted', 'isEnable')
    .where('AppX', '=', 1).orWhere('TipoUsuario', 3)
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_GET_ALL_USER_ENCRYPT', ErrorDetail: err.message }
    })

  return response
}

const getUsersPCS = async (): Promise<IUserEncrypt | any> => {
  const response = await IntegracionDB<IUserEncrypt>(usuarioEncryptTable)
    .select('Id', 'Usuario', 'Gestor', 'DireccionApp', 'AppX', 'TipoUsuario', 'FechaModificacion', 'PwdEncryted', 'isEnable')
    .where('TipoUsuario', 3)
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_GET_ALL_USERS_ENCRYPT', ErrorDetail: err.message }
    })

  return response
}

const usersUpdate = async (user: IUserEncrypt): Promise<number | any> => {
  console.log({ user })
  const dateMod = new Date()
  // const fechaMod = dateMod.getFullYear().toLocaleString('en-EN') + '-' + (dateMod.getMonth() + 1).toLocaleString('en-EN') + '-' + dateMod.getDate().toLocaleString('en-EN') + ' ' + dateMod.getHours().toLocaleString('en-EN') + ':' + dateMod.getMinutes().toLocaleString('en-EN') + ':' + dateMod.getSeconds().toLocaleString('en-EN')
  const fechaMod = dateMod.getFullYear().toString() + '-' + (dateMod.getMonth() + 1).toString() + '-' + dateMod.getDate().toString() + ' ' + dateMod.getHours().toString() + ':' + dateMod.getMinutes().toString() + ':' + dateMod.getSeconds().toString()
  let encryptPass = ''

  const response = await IntegracionDB.raw('exec Seguridad.EncryptPassTable ?', user.PwdEncryted)
    .then(pass => {
      encryptPass = pass[0].Pwd
      IntegracionDB(usuarioEncryptTable)
        .where({ Id: user.Id })
        .update({ PwdEncryted: encryptPass, DireccionApp: user.DireccionApp, AppX: user.AppX, TipoUsuario: user.TipoUsuario, FechaModificacion: fechaMod, Gestor: user.Gestor, isEnable: user.isEnable })
        .returning('Id')
        .then(id => id)
        .catch(err => {
          return { ErrorInterno: 'ERROR_UPDATE_USER_ENCRYPT', ErrorDetail: err.message }
        })
    })
    .catch(err => {
      return { ErrorInterno: 'ERROR_UPDATE_USER_ENCRYPT', ErrorDetail: err.message }
    })
  console.log(response)
  return response
}

const usersInsert = async (user: IUserEncrypt): Promise<number | any> => {
  let encryptPass = ''
  const response = await IntegracionDB.raw('exec Seguridad.EncryptPassTable ?', user.PwdEncryted)
    .then(pass => {
      encryptPass = pass[0].Pwd
      IntegracionDB.transaction(trx => {
        trx.insert({
          usuario: user.Usuario,
          gestor: user.Gestor,
          direccionapp: user.DireccionApp,
          appx: user.AppX,
          tipousuario: user.TipoUsuario,
          PwdEncryted: encryptPass,
          isEnable: true
        })
          .into(usuarioEncryptTable)
          .returning('Id')
          .then(user => user)
          .then(trx.commit)
          .catch(trx.rollback)
      }).catch(err => {
        return { ErrorInterno: 'ERROR_INSERT_USER_ENCRYPT', ErrorDetail: err.message }
      })
    })

  return response
}

const decryptPass = async (id: number): Promise<string | any> => {
  console.log(id)
  const response = await IntegracionDB.raw('exec Seguridad.DecryptPassTable ?', id)
    .then(pass => pass[0])
    .catch(err => {
      return { ErrorInterno: 'ERROR_DECRYPT_PASS', ErrorDetail: err.message }
    })

  return response
}

const getTipoUsuario = async (): Promise<ITipoUsuario | any> => {
  const response = await IntegracionDB<ITipoUsuario>(TipoUserTable)
    .select('*')
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_GET_ALL_TIPO_USER', ErrorDetail: err.message }
    })

  return response
}

export default { getUsers, getUsersAppX, getUsersPCS, usersUpdate, usersInsert, decryptPass, getTipoUsuario }
