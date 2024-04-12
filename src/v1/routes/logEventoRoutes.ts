/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import * as logEventosController from '../../controllers/logEventosController'
import { checkSession } from '../../middleware/session'
const router = express.Router()

// router.get('/getAllLogEvento/:perPage/:currentPage', checkSession, logEventosController.getAllLogsEventos)
router.get('/getAllLogEvento', checkSession, logEventosController.getAllLogsEventos)

export { router }
