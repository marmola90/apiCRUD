/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import * as userController from '../../controllers/userController'
import { checkSession } from '../../middleware/session'
// mport * as xnetServices from '../../services/xnetServices'
const router = express.Router()

router.get('/getAllUsers', checkSession, userController.getAllUsers)

router.get('/getAllUsersRoles', checkSession, userController.getAllUsersRoles)

router.get('/getAllUsersRolesCantidad', checkSession, userController.getAllUsersRolesCantidad)

router.get('/getUser/:id', checkSession, userController.getUser)

router.put('/updateUser', checkSession, userController.updateUser)

router.post('/insertUser', checkSession, userController.insertUser)

router.delete('/deleteUser', checkSession, userController.deleteUser)

router.post('/asignarUser', checkSession, userController.asignarRol)

router.post('/getUsersAsignado', checkSession, userController.getUsersAsignado)

export { router }
