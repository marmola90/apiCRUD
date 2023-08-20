import knex from 'knex'

const BD = JSON.parse(process.env.APP_DB as string)

const xnetDB = knex({
  client: 'mssql',
  connection: {
    server: process.env.APP_SERVER,
    port: parseInt(process.env.APP_DB_PORT as string, 10),
    user: process.env.APP_USER,
    password: process.env.APP_PASS,
    database: BD.xnet,
    options: {
      appName: process.env.APP_NAME
    }
  }
})

const SeguridadDB = knex({
  client: 'mssql',
  connection: {
    server: process.env.APP_SERVER,
    port: parseInt(process.env.APP_DB_PORT as string, 10),
    user: process.env.APP_USER,
    password: process.env.APP_PASS,
    database: BD.SeguridadApiCRUD,
    options: {
      appName: process.env.APP_NAME
    }
  }
})

export { xnetDB, SeguridadDB }
