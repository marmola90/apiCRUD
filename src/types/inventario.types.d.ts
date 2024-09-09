/* eslint-disable @typescript-eslint/consistent-type-definitions */
export type cAmbiente = {
  ambiente_id: number
  ambiente: string
}

export type cConfiguracion = {
  configuracion_id: number
  configuracion: string
}

export type cEstado = {
  estado_id: number
  estado: string
}

export type cRol = {
  rol_id: number
  rol: string
}

export type cTipoSO = {
  tipoSO_id: number
  tipoSO: string
}

export type cTipo = {
  tipo_id: number
  tipo: string
}

export type responsable = {
  Servidor: string
  Virtual: string
  Tipo: number
  Responsable: string
}

export type servidores = {
  id: number
  nombre: string
  sistemaOperativo: string
  procesadores: number
  memoria: number
  tipo: number
  rol: number
  configuracion: number
  ambiente: number
  estado: number
  numeroSerie: string
  marca: string
  modelo: string
  fechaModificacion: Date
  tipoSO: number
  DNS: string
  IP: string
  cluster: string | null
  respaldo: number
  automatizado: number
}

export type vmResponsable = {
  Virtual: string
  Responsable: string
  Servidor: string
}
