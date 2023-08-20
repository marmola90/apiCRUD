import { IXNET_TABLAS } from '../interfaces/xnet_tablas.interface'
import { handlerDatabaseError } from '../utils/error.handler'
import { xnetDB } from '../config/dbConfig'

const getAllVersionCapturadores = async (): Promise<IXNET_TABLAS | any> => {
  try {
    return await xnetDB<IXNET_TABLAS>('dbo.XNET_TABLAS')
      .select('TABLA', 'CODIGO', 'DESCRIPCION', 'VERSION', 'ACTIVO', 'LINK', 'SIGLAS', 'LoginPorInstitucion',
        'Imagen', 'ReportaDatos', 'AccesoAInstituciones', 'DescripcionHTML', 'AccesoTipoInstitucion', 'IdOrdenCategoria'
      )
      .then(datos => datos)
      .catch((error: Error) => {
        handlerDatabaseError('selectError', error.message)
      })
  } catch (error) {
    handlerDatabaseError('conexionError', error)
  }
}

const getVersionCapturador = async (id: string): Promise<IXNET_TABLAS | any> => {
  try {
    return await xnetDB<IXNET_TABLAS>('dbo.XNET_TABLAS')
      .select('TABLA', 'CODIGO', 'DESCRIPCION', 'VERSION', 'ACTIVO', 'LINK', 'SIGLAS', 'LoginPorInstitucion',
        'Imagen', 'ReportaDatos', 'AccesoAInstituciones', 'DescripcionHTML', 'AccesoTipoInstitucion', 'IdOrdenCategoria'
      )
      .where('CODIGO', id)
      .then(datos => datos)
      .catch((error: Error) => {
        handlerDatabaseError('selectError', error.message)
      })
  } catch (error) {
    handlerDatabaseError('conexionError', error)
  }
}

const updateVersionCapturadores = async (tabla: any): Promise<Number | any> => {
  try {
    return await xnetDB('dbo.XNET_TABLAS')
      .where('CODIGO', tabla.CODIGO)
      .update({ DESCRIPCION: tabla.DESCRIPCION, VERSION: tabla.VERSION, ACTIVO: tabla.ACTIVO, LINK: tabla.LINK, SIGLAS: tabla.SIGLAS, LoginPorInstitucion: tabla.LoginPorInstitucion })
      .then(datos => datos)
      .catch((error: Error) => {
        handlerDatabaseError('updateError', error.message)
      })
  } catch (error) {
    handlerDatabaseError('conexionError', error)
  }
}

const insertVersionCapturador = async (datos: IXNET_TABLAS): Promise<Number | any> => {
  try {
    return await xnetDB.insert({
      tabla: datos.TABLA,
      codigo: datos.CODIGO,
      descripcion: datos.DESCRIPCION,
      version: datos.VERSION,
      link: datos.LINK,
      siglas: datos.SIGLAS,
      LoginPorInstitucion: datos.LoginPorInstitucion,
      imagen: datos.Imagen,
      reportadatos: datos.ReportaDatos,
      AccesoAInstituciones: datos.AccesoAInstituciones,
      DescripcionHTML: datos.DescripcionHTML,
      AccesoTipoInstitucion: datos.AccesoTipoInstitucion,
      IdOrdenCategoria: datos.IdOrdenCategoria
    })
      .into('dbo.XNET_TABLAS')
      .then(valor => valor)
      .catch(err => handlerDatabaseError('insertError', err.message))
  } catch (error) {
    handlerDatabaseError('conexionError', error)
  }
}

export default { getAllVersionCapturadores, getVersionCapturador, updateVersionCapturadores, insertVersionCapturador }
