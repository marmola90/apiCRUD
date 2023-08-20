/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import * as xnetController from '../../controllers/xnetController'
import { checkSession } from '../../middleware/session'
// mport * as xnetServices from '../../services/xnetServices'
const router = express.Router()

router.get('/getAllVersionCapturadores', checkSession, xnetController.getAllVersionCapturadores)

router.get('/getVersionCapturador/:id', checkSession, xnetController.getVersionCapturador)

router.put('/updateVersionCapturadores', checkSession, xnetController.updateVersionCapturadores)

router.post('/insertVersionCapturador', checkSession, xnetController.insertVersionCapturador)

export { router }
