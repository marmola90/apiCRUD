/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { loginController } from '../../controllers/v2/authController'

const router = express.Router()

router.post('/login', loginController)

export { router }
