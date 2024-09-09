import { Router } from 'express'
import { readdirSync } from 'fs'

const PATH_ROUTER = `${__dirname}`

const routerV2 = Router()

const cleanFilename = (fileName: string): string => {
  const file: string | any = fileName.split('.').shift()
  return file
}
readdirSync(PATH_ROUTER).filter(async (filename) => {
  const cleanName: string = cleanFilename(filename)
  if (cleanName !== 'index') {
    await import(`./${cleanName}`).then((moduleRouter) => {
      console.log(`Se esta cargando la ruta ...... ${cleanName}`)
      routerV2.use(`/${cleanName}`, moduleRouter.router)
    })
  }
})

export { routerV2 }
