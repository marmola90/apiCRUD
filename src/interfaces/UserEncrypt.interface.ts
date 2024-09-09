export interface ITipoUsuario {
  IdTipo: number
  TipoUsuario: string
}

export interface IUserEncrypt {
  Id?: number | any
  Usuario?: string
  Gestor?: string
  DireccionApp: string
  AppX: boolean
  TipoUsuario: number
  FechaModificacion?: Date | string
  PwdEncryted: any
  isEnable?: boolean
}

export interface IUserEncryotv2 extends IUserEncrypt {
  Puestos: {
    DBA: boolean
    SYSADMIN: boolean
    SUPP: boolean
    BOSS: boolean
  }
}
