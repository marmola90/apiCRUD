
import express, { RequestHandler } from 'express'
import { checkSession } from '../../middleware/session'
import * as xnetUSuariosController from '../../controllers/xnetUSuariosController'
// mport * as xnetServices from '../../services/xnetServices'
const router = express.Router()

router.get('/getAllUsers', checkSession, xnetUSuariosController.getAllUsers as RequestHandler)

router.get('/getTipoUsuario', checkSession, xnetUSuariosController.getTipoUsuario as RequestHandler)

router.post('/insertUser', checkSession, xnetUSuariosController.insertUser as RequestHandler)

export { router }
