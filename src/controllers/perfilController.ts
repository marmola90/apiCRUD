import { Request, Response } from 'express'
import { handlerHttp } from '../utils/error.handler'
import { IPerfil } from '../interfaces/modulos.interface'
import perfilServices from '../services/perfil.Services'

export const getAllPerfil = async (_req: Request, res: Response): Promise<IPerfil | any> => {
  try {
    const allPerfil = await perfilServices.getAllPerfil()

    allPerfil?.ErrorInterno as boolean ? res.send({ status: 'Error', data: allPerfil }) : res.send({ status: 'OK', data: allPerfil })
  } catch (error) {
    handlerHttp(res, 'ERROR_GET_ALLPERFIL', error)
  }
}

export const getAllRolesModulesCantidad = async (_req: Request, res: Response): Promise<IPerfil | any> => {
  try {
    const allPerfil = await perfilServices.getAllRolesModulesCantidad()

    allPerfil?.ErrorInterno as boolean ? res.send({ status: 'Error', data: allPerfil }) : res.send({ status: 'OK', data: allPerfil })
  } catch (error) {
    handlerHttp(res, 'ERROR_GET_ALLPERFIL', error)
  }
}

export const getPerfil = async (req: Request, res: Response): Promise<IPerfil | any> => {
  try {
    const idPerfil = parseInt(req.params.Mod)
    const perfil = await perfilServices.getPerfil(idPerfil)
    perfil?.ErrorInterno as boolean ? res.send({ status: 'Error', data: perfil }) : res.send({ status: 'OK', data: perfil })
    return res
  } catch (error) {
    handlerHttp(res, 'ERROR_GET_PERFIL', error)
  }
}

export const updatePerfil = async (req: Request, res: Response): Promise<IPerfil | any> => {
  try {
    const { IDPerfil, Descripcion } = req.body
    const perfil = { IDPerfil, Descripcion }

    const updatePerfil = await perfilServices.updatePerfil(perfil)
    updatePerfil?.ErrorInterno as boolean ? res.send({ status: 'Error', data: updatePerfil }) : res.send({ status: 'OK', data: updatePerfil })
  } catch (error) {
    handlerHttp(res, 'ERROR_UPDATE_PERFIL', error)
  }
}

export const insertPerfil = async (req: Request, res: Response): Promise<IPerfil | any> => {
  try {
    const { Descripcion } = req.body
    const insertPerfil = await perfilServices.insertPerfil(Descripcion)
    insertPerfil?.ErrorInterno as boolean ? res.send({ status: 'Error', data: insertPerfil }) : res.send({ status: 'OK', data: insertPerfil })
  } catch (error) {
    handlerHttp(res, 'ERROR_INSERT_PERFIL', error)
  }
}

export const deletePerfil = async (req: Request, res: Response): Promise<IPerfil | any> => {
  try {
    const { IDPerfil } = req.body
    console.log(IDPerfil)
    const deletePerfil = await perfilServices.deletePerfil(IDPerfil)
    deletePerfil?.ErrorInterno as boolean ? res.send({ status: 'Error', data: deletePerfil }) : res.send({ status: 'OK', data: deletePerfil })
  } catch (error) {
    handlerHttp(res, 'ERROR_DELETE_PERFIL', error)
  }
}
