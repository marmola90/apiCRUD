/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import * as modulosController from '../../controllers/modulosController'
import { checkSession } from '../../middleware/session'
// mport * as xnetServices from '../../services/xnetServices'
const router = express.Router()

router.get('/getAllModulos', checkSession, modulosController.getAllModulos)

router.get('/getModulo/:id', checkSession, modulosController.getModulo)

router.put('/updateModulo', checkSession, modulosController.updateModulo)

router.post('/insertModulo', checkSession, modulosController.insertModulo)

export { router }
