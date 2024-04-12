import { xnetDB } from '../config/dbConfig'
import { IXNET_TipoUsuario, IXNET_Usuario } from '../interfaces/xnet_tablas.interface'

const xnetTipoUsuario = '[dbo].XNET_USUARIO'
const xnetUsuario = '[dbo].XNET_USUARIO'

const getTipoUsuario = async (): Promise<IXNET_TipoUsuario | any> => {
  const response = await xnetDB(xnetTipoUsuario)
    .select('TIPOUSR', ` CASE 
  WHEN TIPOUSR='ADM-INST' THEN 'Administrador Institución' 
  WHEN TIPOUSR='USR-CNBS' THEN 'Usuario CNBS' 
  WHEN TIPOUSR='USR-INST' THEN 'Usuario Institución' 
  ELSE 'Administrador CNBS'
END as Descrip `)
    .groupBy('TIPOUSR')
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_GET_TIPO_USUARIO', ErrorDetail: err.message }
    })
  return response
}

const getAllUsers = async (): Promise<IXNET_Usuario | any> => {
  const response = await xnetDB(xnetUsuario)
    .select('USUARIO', 'NOMBRE', 'TIPO', 'INST', 'ACTIVO', 'TIPOUSR', 'FechaCreacion')
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_GET_TIPO_USUARIO', ErrorDetail: err.message }
    })
  return response
}

const crearUsers = async (user: IXNET_Usuario): Promise<number | any> => {
  const dateCreate = new Date()
  const fechaMod = dateCreate.getFullYear().toString() + '-' + (dateCreate.getMonth() + 1).toString() + '-' + dateCreate.getDate().toString() + ' ' + dateCreate.getHours().toString() + ':' + dateCreate.getMinutes().toString() + ':' + dateCreate.getSeconds().toString()
  const response = await xnetDB<IXNET_Usuario>(xnetUsuario)
    .insert({
      USUARIO: user.USUARIO,
      NOMBRE: user.NOMBRE,
      TIPO: user.TIPO,
      INST: user.INST,
      FECHACREACION: fechaMod,
      ACTIVO: '1',
      TIPOUSR: user.TIPOUSR
    })
    .returning('ACTIVO')
    .then(datos => datos[0])
    .catch(err => {
      return { ErrorInterno: 'ERROR_INSERT_USUARIOS_XNET', ErrorDetail: err.message }
    })

  return response
}

export default { getTipoUsuario, getAllUsers, crearUsers }
