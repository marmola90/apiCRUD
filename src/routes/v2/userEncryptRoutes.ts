import express, { RequestHandler } from 'express'
import * as userEncryptController from '../../controllers/v2/userEncryptController'
import { checkSession } from '../../middleware/session'
// mport * as xnetServices from '../../services/xnetServices'
const router = express.Router()

router.get('/getAllUsers', checkSession, userEncryptController.getAllUsers as RequestHandler)

router.get('/getAllUsersAppX', checkSession, userEncryptController.getUsersAppX as RequestHandler)

router.get('/getAllUsersPCS', checkSession, userEncryptController.getUsersPCS as RequestHandler)

router.get('/getTipoUsuario', checkSession, userEncryptController.getTipoUsuario as RequestHandler)

router.post('/decryptPass', checkSession, userEncryptController.decryptPass as RequestHandler)

router.put('/updateUser', checkSession, userEncryptController.updateUser as RequestHandler)

router.post('/insertUser', checkSession, userEncryptController.insertUser as RequestHandler)

export { router }
