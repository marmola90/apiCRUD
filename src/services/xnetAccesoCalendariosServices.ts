import { IXNET_SistemasAccessosCalendarios } from '../interfaces/xnet_tablas.interface'
import { xnetDB } from '../config/dbConfig'

const xnetAccesoCalendarios = 'dbo.Xnet_SistemasAccesosCalendarios'
const xnetAccesoCalendariosHist = 'Xnet_SistemasAccesosCalendario_HIST'

const getAllAccesosCalendarios = async (): Promise<IXNET_SistemasAccessosCalendarios | any> => {
  const response = await xnetDB<IXNET_SistemasAccessosCalendarios>(xnetAccesoCalendarios)
    .select('Id_AccesoCalendario as Id', 'USUARIO', 'CodigoSistema')
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_GET_ALL_VERSION_CAPTURADORES', ErrorDetail: err.message }
    })
  return response
}

const updateAccessosCalendarios = async (tabla: IXNET_SistemasAccessosCalendarios, username: string): Promise<Number | any> => {
  const response = await xnetDB(xnetAccesoCalendarios)
    .where('Id_AccesoCalendario', tabla.Id)
    .update({ USUARIO: tabla.USUARIO, CodigoSistema: tabla.CodigoSistema })
    .then(datos => datos)
    .catch((err) => {
      return { ErrorInterno: 'ERROR_PUT_XNET_ACCESO_CALENDARIO', ErrorDetail: err.message }
    })

  if (response === 1) {
    return await xnetDB(xnetAccesoCalendariosHist)
      .insert({
        Id_AccesoCalendario: tabla.Id,
        USUARIO: tabla.USUARIO,
        CodigoSistema: tabla.CodigoSistema,
        usuarioAPP: username,
        ComandoSQL: 'UPDATE'
      })
      .returning('IDRow')
      .then(valor => valor[0].IDRow)
      .catch((err) => {
        return { ErrorInterno: 'ERROR_POST_HISTORICO', ErrorDetail: err.message }
      })
  }

  return response
}

const insertAccessosCalendarios = async (datos: IXNET_SistemasAccessosCalendarios, username: string): Promise<Number | any> => {
  const response = await xnetDB(xnetAccesoCalendarios)
    .insert({
      USUARIO: datos.USUARIO,
      CodigoSistema: datos.CodigoSistema
    })
    .returning('Id_AccesoCalendario')
    .then(valor => valor[0])
    .catch(err => {
      return { ErrorInterno: 'ERROR_POST_XNET_ACCESO_CALENDARIO', ErrorDetail: err.message }
    })
  console.log(response)

  const responseHist = await xnetDB(xnetAccesoCalendariosHist)
    .insert({
      Id_AccesoCalendario: response,
      USUARIO: datos.USUARIO,
      CodigoSistema: datos.CodigoSistema,
      usuarioAPP: username,
      ComandoSQL: 'UPDATE'
    })
    .returning('IDRow')
    .then(valor => valor[0].IDRow)
    .catch((err) => {
      return { ErrorInterno: 'ERROR_POST_HISTORICO', ErrorDetail: err.message }
    })

  if (responseHist !== '') {
    return responseHist
  }
  return response
}

export default { getAllAccesosCalendarios, updateAccessosCalendarios, insertAccessosCalendarios }
