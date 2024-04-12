export interface IXNET_TABLAS {
  TABLA?: string
  CODIGO: string
  DESCRIPCION: string
  VERSION: string
  ACTIVO: string
  LINK: string
  SIGLAS: string
  LoginPorInstitucion?: boolean
  Imagen?: string
  ReportaDatos?: boolean
  AccesoAInstituciones?: boolean
  DescripcionHTML?: string
  AccesoTipoInstitucion?: string
  IdOrdenCategoria?: number
}

export interface IXNET_Sistemas {
  CodigoSistema: string
  DescripcionSistema: string
}

export interface IXNET_SistemasAccessosCalendarios {
  Id: number
  USUARIO: string
  CodigoSistema: string
}

export interface IXNET_CopiarPermisos {
  UsuarioReferencia: string
  UsuarioDestino: string
}

export interface IXNET_CopiarPermisosCapturador extends IXNET_CopiarPermisos, Pick<IXNET_Sistemas, 'CodigoSistema'> {
}

export interface IXNET_Institucion {
  INST: string
}

export interface IXNET_Tipo {
  TIPO: string
}

export interface IXNET_Bancos extends IXNET_Tipo, IXNET_Institucion {
  DESCRIP: string
}

export interface IXNET_TipoUsuario {
  TIPOUSR: string
  DESCRIPCION: string
}

export interface IXNET_Usuario extends IXNET_Tipo, IXNET_Institucion, Pick<IXNET_TipoUsuario, 'TIPOUSR'> {
  USUARIO: string
  NOMBRE: string
  ACTIVO?: string
  FECHACREACION?: Date | string
}

export interface IXNET_Acceso extends Pick<IXNET_Usuario, 'USUARIO'>, Pick<IXNET_Sistemas, 'CodigoSistema'>, IXNET_Tipo, IXNET_Institucion {
  SUC: string
}
