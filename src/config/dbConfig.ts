import knex from 'knex'
import { JSONParse, dbOptions } from '../utils/lib.utils'

const BD = JSONParse(process.env.APP_DB)
const BDPROD = JSONParse(process.env.APP_DB_SEGURIDAD)
const SERVER = JSONParse(process.env.APP_SERVER)

const client: string = 'mssql'

const xnetDB = knex(dbOptions(client,
  process.env.ENV_TYPE === 'PROD' ? SERVER.Interconexion : process.env.APP_SERVER_DES,
  process.env.ENV_TYPE === 'PROD' ? parseInt(process.env.APP_DB_PORT as string, 10) : parseInt(process.env.APP_DB_PORT_DES as string, 10),
  process.env.ENV_TYPE === 'PROD' ? process.env.APP_USER : process.env.APP_USER_DES,
  process.env.ENV_TYPE === 'PROD' ? process.env.APP_PASS : process.env.APP_PASS_DES,
  BD.xnet,
  process.env.APP_NAME)
)

const SeguridadDB = knex(dbOptions(client,
  process.env.ENV_TYPE === 'PROD' ? process.env.APP_SEGURIDAD_SERVER : process.env.APP_SERVER_DES,
  process.env.ENV_TYPE === 'PROD' ? parseInt(process.env.APP_DB_SEGURIDAD_PORT as string, 10) : parseInt(process.env.APP_DB_PORT_DES as string, 10),
  process.env.ENV_TYPE === 'PROD' ? process.env.APP_USER_SEGURIDAD : process.env.APP_USER_DES,
  process.env.ENV_TYPE === 'PROD' ? process.env.APP_PASS_SEGURIDAD : process.env.APP_PASS_DES,
  process.env.ENV_TYPE === 'PROD' ? BDPROD.SeguridadApiCRUD : BD.SeguridadApiCRUD,
  process.env.APP_NAME))

const IntegracionDB = knex(dbOptions(client,
  process.env.APP_SEGURIDAD_SERVER,
  parseInt(process.env.APP_DB_SEGURIDAD_PORT as string, 10),
  process.env.APP_USER_SEGURIDAD,
  process.env.APP_PASS_SEGURIDAD,
  BDPROD.IntegracionCNBS,
  process.env.APP_NAME))

const CNBSBox = knex(dbOptions(client,
  process.env.ENV_TYPE === 'PROD' ? SERVER.SUPER : process.env.APP_SERVER_DES,
  process.env.ENV_TYPE === 'PROD' ? parseInt(process.env.APP_DB_PORT as string, 10) : parseInt(process.env.APP_DB_PORT_DES as string, 10),
  process.env.ENV_TYPE === 'PROD' ? process.env.APP_USER : process.env.APP_USER_DES,
  process.env.ENV_TYPE === 'PROD' ? process.env.APP_PASS : process.env.APP_PASS_DES,
  BD.CNBSBox,
  process.env.APP_NAME))

export { xnetDB, SeguridadDB, IntegracionDB, CNBSBox }
