/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import * as perfilController from '../../controllers/perfilController'
import { checkSession } from '../../middleware/session'
const router = express.Router()

router.get('/getAllPerfil', checkSession, perfilController.getAllPerfil)

router.get('/getAllRolesModulesCantidad', checkSession, perfilController.getAllRolesModulesCantidad)

router.get('/getPerfil/:id', checkSession, perfilController.getPerfil)

router.put('/updatePerfil', checkSession, perfilController.updatePerfil)

router.post('/insertPerfil', checkSession, perfilController.insertPerfil)

router.delete('/deletePerfil', checkSession, perfilController.deletePerfil)

export { router }
