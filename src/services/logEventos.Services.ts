// import knex from 'knex'
import { CNBSBox } from '../config/dbConfig'
import { IlogEventos } from '../interfaces/logEventosCnbsBox.interface'
import { attachPaginate } from 'knex-paginate'
attachPaginate()

const logEvento = 'APC.LogEventos'
const pantalla = 'APC.PANTALLAS'
const boxUser = 'dbo.BoxUsuarios'

// const getAllLogsEventos = async (perPage: number = 100, currentPage: number = 1): Promise<IlogEventos | any> => {
const getAllLogsEventos = async (): Promise<IlogEventos | any> => {
  const response =
    await CNBSBox.raw(` select [Id_Log], [U].[Email] as [Usuario], [Error], [Resultado], [Fecha], [pt].[Descripcion] as [Pantalla], [Ref_ID] 
      from ${logEvento} as [P] 
      left join ${boxUser} as [U] on [U].[Id_Usuario] = [P].[Id_Usuario] 
      left join ${pantalla} as [pt] on [pt].[Id_Pantalla] = [P].[Id_Pantalla]
      where Fecha between GETDATE()-15 and GETDATE()
      order by Id_Log desc`)
      // .paginate({ perPage, currentPage })
      .then(datos => datos)
      .catch(err => {
        return { ErrorInterno: 'ERROR_GET_ALL_LogEventos', ErrorDetail: err.message }
      })
  return response
}

export default { getAllLogsEventos }
