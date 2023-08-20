import { IXNET_TABLAS } from '../interfaces/xnet_tablas.interface'
import { xnetDB } from '../config/dbConfig'

const getAllVersionCapturadores = async (): Promise<IXNET_TABLAS | any> => {
  const response = await xnetDB<IXNET_TABLAS>('dbo.XNET_TABLAS')
    .select('TABLA', 'CODIGO', 'DESCRIPCION', 'VERSION', 'ACTIVO', 'LINK', 'SIGLAS', 'LoginPorInstitucion',
      'Imagen', 'ReportaDatos', 'AccesoAInstituciones', 'DescripcionHTML', 'AccesoTipoInstitucion', 'IdOrdenCategoria'
    )
    .then(datos => datos)
  return response
}

const getVersionCapturador = async (id: string): Promise<IXNET_TABLAS | any> => {
  const response = await xnetDB<IXNET_TABLAS>('dbo.XNET_TABLAS')
    .select('TABLA', 'CODIGO', 'DESCRIPCION', 'VERSION', 'ACTIVO', 'LINK', 'SIGLAS', 'LoginPorInstitucion',
      'Imagen', 'ReportaDatos', 'AccesoAInstituciones', 'DescripcionHTML', 'AccesoTipoInstitucion', 'IdOrdenCategoria'
    )
    .where('CODIGO', id)
    .then(datos => datos)
  return response
}

const updateVersionCapturadores = async (tabla: IXNET_TABLAS, username: string): Promise<Number | any> => {
  const response = await xnetDB('dbo.XNET_TABLAS')
    .where('CODIGO', tabla.CODIGO)
    .andWhere('TABLA', tabla.TABLA)
    .update({ DESCRIPCION: tabla.DESCRIPCION, VERSION: tabla.VERSION, ACTIVO: tabla.ACTIVO, LINK: tabla.LINK, SIGLAS: tabla.SIGLAS, LoginPorInstitucion: tabla.LoginPorInstitucion })
    .then(datos => datos)
    .catch((err) => {
      return 'ErrorInterno: ERROR_PUT_XNET_TABLA ,'.concat(err)
    })

  if (response === 1) {
    return await xnetDB('dbo.XNET_TABLAS_HIST')
      .insert({
        tabla: tabla.TABLA,
        codigo: tabla.CODIGO,
        descripcion: tabla.DESCRIPCION,
        version: tabla.VERSION,
        activo: tabla.ACTIVO,
        link: tabla.LINK,
        siglas: tabla.SIGLAS,
        LoginPorInstitucion: tabla.LoginPorInstitucion,
        imagen: tabla.Imagen,
        reportadatos: tabla.ReportaDatos,
        AccesoAInstituciones: tabla.AccesoAInstituciones,
        DescripcionHTML: tabla.DescripcionHTML,
        AccesoTipoInstitucion: tabla.AccesoTipoInstitucion,
        IdOrdenCategoria: tabla.IdOrdenCategoria,
        usuario: username,
        ComandoSQL: 'UPDATE'
      })
      .returning('IDRow')
      .then(valor => valor[0].IDRow)
      .catch((err) => {
        return 'ErrorInterno: ERROR_POST_HISTORICO ,'.concat(err)
      })
  }

  return response
}

const insertVersionCapturador = async (datos: IXNET_TABLAS, username: string): Promise<Number | any> => {
  const response = await xnetDB('dbo.XNET_TABLAS')
    .insert({
      tabla: datos.TABLA,
      codigo: datos.CODIGO,
      descripcion: datos.DESCRIPCION,
      version: datos.VERSION,
      activo: datos.ACTIVO,
      link: datos.LINK,
      siglas: datos.SIGLAS,
      LoginPorInstitucion: datos.LoginPorInstitucion,
      imagen: datos.Imagen,
      reportadatos: datos.ReportaDatos,
      AccesoAInstituciones: datos.AccesoAInstituciones,
      DescripcionHTML: datos.DescripcionHTML,
      AccesoTipoInstitucion: datos.AccesoTipoInstitucion
    })
    .returning('codigo')
    .then(valor => valor[0])
    .catch(err => {
      return 'ErrorInterno: ERROR_POST_XNET_TABLAS ,'.concat(err)
    })
  console.log(response)

  const responeHist = await xnetDB('dbo.XNET_TABLAS_HIST')
    .insert({
      tabla: datos.TABLA,
      codigo: datos.CODIGO,
      descripcion: datos.DESCRIPCION,
      version: datos.VERSION,
      activo: datos.ACTIVO,
      link: datos.LINK,
      siglas: datos.SIGLAS,
      LoginPorInstitucion: datos.LoginPorInstitucion,
      imagen: datos.Imagen,
      reportadatos: datos.ReportaDatos,
      AccesoAInstituciones: datos.AccesoAInstituciones,
      DescripcionHTML: datos.DescripcionHTML,
      AccesoTipoInstitucion: datos.AccesoTipoInstitucion,
      IdOrdenCategoria: datos.IdOrdenCategoria,
      usuario: username,
      ComandoSQL: 'INSERT'
    })
    .returning('IDRow')
    .then(dato => dato[0].IDRow)
    .catch((err) => {
      return 'ErrorInterno: ERROR_POST_HISTORICO ,'.concat(err)
    })
  console.log(responeHist)
  if (responeHist !== '') {
    return responeHist
  }
  return response
}

export default { getAllVersionCapturadores, getVersionCapturador, updateVersionCapturadores, insertVersionCapturador }
