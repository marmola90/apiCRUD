export interface Imodulos {
  IdModulo: number
  Descripcion: string
  BDAsociada: string
}

export interface IDPermisos {
  IDPermisos: number
  Descripcion: string
}

export interface IPerfil {
  IDPerfil: number
  Descripcion: string
}

export interface IPermisosOtogados {
  IDPerfil: number
  IDPermisos: number
}

export interface IModulosAsignados extends Pick<Imodulos, 'IdModulo'> {
  IDPerfil: number
}

export interface IUser extends Pick<IPerfil, 'IDPerfil'> {
  ID: number
  Usuario: string
  EstaActivo: boolean
}

export interface IUserAsignado {
  ID: number
  IDPerfil: number
}
