import { IXNET_CopiarPermisos, IXNET_CopiarPermisosCapturador } from '../interfaces/xnet_tablas.interface'
import { xnetDB } from '../config/dbConfig'

// const copyPermisos = '[dit].[copiarPermisos]'
const copyPermisosCapt = '[dit].[copiarPermisosCapturador]'

const updateCopiarPermisosCapturador = async (user: IXNET_CopiarPermisosCapturador): Promise<number | any> => {
  console.log({ user })
  const response = await xnetDB.raw(`exec ${copyPermisosCapt}  ? ? ?`, user.UsuarioReferencia, user.UsuarioDestino, user.CodigoSistema)
    .then(datos => {
      console.log(datos)
      return datos
    })
    .catch(err => {
      return { ErrorInterno: 'ERROR_UPDATE_COPIAR_PERMISOS_CAPTURADOR', ErrorDetail: err.message }
    })
  console.log(response)
  return response
}

const updateCopiarPermisos = async (user: IXNET_CopiarPermisos | IXNET_CopiarPermisos[]): Promise<number | any> => {
  console.log({ user })

  /* const response = await xnetDB.raw(`exec ${copyPermisos}  ? ?`, user.UsuarioReferencia, user.UsuarioDestino)
     .then(datos => {
       console.log(datos)
       return datos
     })
     .catch(err => {
       return { ErrorInterno: 'ERROR_UPDATE_COPIAR_PERMISOS', ErrorDetail: err.message }
     }) */
  const response = ''
  console.log(response)
  return response
}

export default { updateCopiarPermisosCapturador, updateCopiarPermisos }
