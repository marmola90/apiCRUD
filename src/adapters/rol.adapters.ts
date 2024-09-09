import { Request } from 'express'
import { cRol } from '../types/inventario.types'

export const rolAdapter = (req: Request): cRol => {
  const { id, rol } = req.body

  const rolVariable: cRol = {
    rol_id: id,
    rol
  }

  return rolVariable
}
