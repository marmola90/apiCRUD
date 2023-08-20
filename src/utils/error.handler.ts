import { Response } from 'express'
import { typeErrorDB } from '../types'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const handlerHttp = (res: Response, error: string, errorRaw?: any) => {
  console.log(errorRaw)
  res.status(500)
  res.send({ error, description: errorRaw })
}

const handlerDatabaseError = (tipoError: typeErrorDB, errorRaw?: any): void => {
  let msg = ''
  switch (tipoError) {
    case 'selectError':
      msg = '-Error al realizar la consulta.- '
      break
    case 'updateError':
      msg = '-Error al realizar los datos.- '
      break
    case 'conexionError':
      msg = '-Error en la capa de conexion.- '
      break
  }
  return console.log('Error: ' + tipoError + ': ' + msg, errorRaw)
}

export { handlerHttp, handlerDatabaseError }
