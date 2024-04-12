import { Auth } from '../interfaces/auth.interface'
import { generateToken } from '../utils/jwt.handler'
import { SeguridadDB } from '../config/dbConfig'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ActiveDirectory = require('ad-promise')

const loginUser = async ({ username, password }: Auth): Promise<any> => {
  const domi: string | any = process.env.APP_DOMI
  const user = username.concat(domi)
  const configAD: any = {
    url: process.env.APP_URL as string,
    baseDN: process.env.APP_BASEDN as string
  }
  const ad = new ActiveDirectory(configAD)

  const response = await ad.authenticate(user, password).then((res: boolean) => {
    return res
  }, (err: Error) => {
    return JSON.stringify(err)
  })

  const usuarioDB = 'ApiCRUD.Usuario'
  const userLogin = await SeguridadDB(usuarioDB)
    .select('Usuario', 'EstaActivo', 'IDPerfil')
    .where('Usuario', username)
    .then(datos => datos)

  console.log(userLogin)
  const token = userLogin.length > 0 ? (response as boolean && response === true ? await generateToken(username) : response) : 'NOT_AUTHENTICATED'
  const data = {
    token,
    datos: userLogin.length > 0 ? (response as boolean && response === true ? userLogin[0] : false) : false
  }

  return data
}

export { loginUser }
