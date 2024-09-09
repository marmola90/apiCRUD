export enum c_Ambiente {
  Produccion = 1,
  Desarrollo = 2
}

export enum c_Configuracion {
  standaloe = 1,
  'failover cluster' = 2,
  'balanceo por red' = 3,
  replicacion = 4
}

export enum c_Estado {
  activo = 1,
  inactivo = 2
}

export enum c_Tipo {
  'bare-metal' = 1,
  'hyper=v' = 2,
  virtual = 3
}

export enum c_TipoSO {
  Windows = 1,
  Linux = 2
}
