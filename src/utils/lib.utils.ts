export const JSONParse = (envValue: string | undefined): any => {
  const valor = JSON.parse(envValue as string)
  return valor
}

export const dbOptions = (client: string, server: any, port: number, user: any, password: any, database: string, appName: any): any => {
  return {
    client,
    connection: {
      server,
      port,
      user,
      password,
      database,
      options: {
        appName
      }
    }
  }
}
