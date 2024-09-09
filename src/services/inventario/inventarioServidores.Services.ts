import { IntegracionDB } from '../../config/dbConfig'
import { servidores } from '../../types/inventario.types'

const servidoresDbo = 'Inventario.[servidores]'

const getAllServidores = async (): Promise<servidores | any> => {
  const response = await IntegracionDB<servidores>(servidoresDbo)
    .select('[id]', '[nombre]', '[sistemaOperativo]', '[procesadores]', '[memoria]', '[tipo]', '[rol]', '[configuracion]', '[ambiente]', '[estado]', '[numeroSerie]'
      , '[marca]', '[modelo]', '[fechaModificacion]', '[tipoSO]', '[DNS]', '[IP]', ' [cluster]', '[respaldo]', '[automatizado]')
    // .orderBy('Usuario', 'asc')
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_GET_ALL', ErrorDetail: err.message }
    })

  return response
}

const insertServidores = async (servidor: servidores): Promise<number | any> => {
  const response = await IntegracionDB<servidores>(servidoresDbo)
    .insert({
      nombre: servidor.nombre,
      sistemaOperativo: servidor.sistemaOperativo,
      procesadores: servidor.procesadores,
      memoria: servidor.memoria,
      tipo: servidor.tipo,
      rol: servidor.rol,
      configuracion: servidor.configuracion,
      ambiente: servidor.ambiente,
      estado: servidor.estado,
      numeroSerie: servidor.numeroSerie,
      marca: servidor.marca,
      modelo: servidor.modelo,
      fechaModificacion: servidor.fechaModificacion,
      tipoSO: servidor.tipoSO,
      DNS: servidor.DNS,
      IP: servidor.IP,
      cluster: servidor.cluster,
      respaldo: servidor.respaldo,
      automatizado: servidor.automatizado
    })
    .returning('id')
    .then(datos => datos[0])
    .catch(err => {
      return { ErrorInterno: 'ERROR_INSERT_SERVIDORES', ErrorDetail: err.message }
    })

  return response
}

const updateServidores = async (servidor: servidores): Promise<number | any> => {
  const response = await IntegracionDB<servidores>(servidoresDbo)
    .where({ id: servidor.id })
    .update({
      nombre: servidor.nombre,
      sistemaOperativo: servidor.sistemaOperativo,
      procesadores: servidor.procesadores,
      memoria: servidor.memoria,
      tipo: servidor.tipo,
      rol: servidor.rol,
      configuracion: servidor.configuracion,
      ambiente: servidor.ambiente,
      estado: servidor.estado,
      numeroSerie: servidor.numeroSerie,
      marca: servidor.marca,
      modelo: servidor.modelo,
      fechaModificacion: servidor.fechaModificacion,
      tipoSO: servidor.tipoSO,
      DNS: servidor.DNS,
      IP: servidor.IP,
      cluster: servidor.cluster,
      respaldo: servidor.respaldo,
      automatizado: servidor.automatizado
    })
    .returning('id')
    .then(datos => datos[0])
    .catch(err => {
      return { ErrorInterno: 'ERROR_UPDATE_SERVIDORES', ErrorDetail: err.message }
    })

  return response
}

const deleteServidores = async (id: number): Promise<Number | any> => {
  const response = await IntegracionDB<servidores>(servidoresDbo)
    .where({ id })
    .del()
    .then(datos => datos)
    .catch(err => {
      return { ErrorInterno: 'ERROR_DELETE_RESPONSABLE', ErrorDetail: err.message }
    })

  return response
}

export default { getAllServidores, insertServidores, updateServidores, deleteServidores }
