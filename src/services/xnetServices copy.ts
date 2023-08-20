import xnet from '../database/xnetTablas'
import { IXNET_TABLAS } from '../interfaces/xnet_tablas.interface'

export const getAllVersionCapturadores = async (): Promise<IXNET_TABLAS | any> => await xnet.getAllVersionCapturadores()

export const getVersionCapturador = async (id: string): Promise<IXNET_TABLAS | any> => await xnet.getVersionCapturador(id)

export const updateVersionCapturadores = async (tabla: any): Promise<Number | any> => await xnet.updateVersionCapturadores(tabla)

export const insertVersionCapturador = async (datos: IXNET_TABLAS): Promise<Number | any> => await xnet.insertVersionCapturador(datos)
