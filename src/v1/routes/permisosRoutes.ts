/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import * as permisosController from '../../controllers/permisosController'
import { checkSession } from '../../middleware/session'
// mport * as xnetServices from '../../services/xnetServices'
const router = express.Router()

router.get('/getAllPermisos', checkSession, permisosController.getAllPermisos)

router.get('/getPermiso/:id', checkSession, permisosController.getPermiso)

router.post('/getPermisoAsignado', checkSession, permisosController.getPermisoAsignado)

router.put('/updatePermiso', checkSession, permisosController.updatePermiso)

router.post('/insertPermiso', checkSession, permisosController.insertPermiso)

router.post('/asignarPermiso', checkSession, permisosController.asignarPermiso)

router.delete('/deletePermisosAsignados', checkSession, permisosController.deletePermisosAsignados)

export { router }
