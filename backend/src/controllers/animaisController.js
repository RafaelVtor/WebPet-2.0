const connection = require('../../knexMysql')

module.exports = {
  async index (request, response) {
    //teste com foreignkey

    const animais = await connection('animal')
      .join('usuario', 'animal.dono', '=', 'usuario.id')
      .select(
        '*',
        connection.ref('animal.id').as('animal_id'),
        connection.ref('animal.nome').as('animal_nome'),
        connection.ref('usuario.nome').as('dono_nome')
      )

    //const animais = await connection('animal').select('*');

    return response.json(animais)
  },
  async animal (request, response) {
    const { id } = request.params

    const animal = await connection('animal')
      .select('*')
      .where('id', id)

    if (animal) {
      return response.json(animal)
    } else {
      return response.json('erro  ')
    }
  },

  async index_usuario (request, response) {
    const usuario_id = request.headers.authorization

    const animais = await connection('animal')
      .where('dono', usuario_id)
      .select('*')

    return response.json(animais)
  },

  async create (request, response) {
    const { nome, tipo, idade, vacinas, obs, foto } = request.body
    const dono = request.headers.authorization

    console.log(nome)
    console.log(tipo)
    console.log(idade)
    console.log(vacinas)
    console.log(obs)
    console.log(foto)

    const animal = await connection('animal').insert({
      nome,
      tipo,
      idade,
      vacinas,
      obs,
      foto,
      dono
    })
    return response.json(animal)
  },

  async update (request, response) {
    const { id } = request.params
    const { nome, tipo, idade, vacinas, obs, foto } = request.body
    const dono = request.headers.authorization

    const animal = await connection('animal')
      .where('id', id)
      .update({
        nome,
        tipo,
        idade,
        vacinas,
        obs,
        foto,
        dono
      })

    return response.json(animal)
  },

  async delete (request, response) {
    const { id } = request.params
    const user_id = request.headers.authorization

    const animal = await connection('animal')
      .where('id', id)
      .select('dono')
      .first()

    if (animal.dono != user_id) {
      return response
        .status(401)
        .json({ error: 'Você não tem permição para excluir!' })
    }

    await connection('animal')
      .where('id', id)
      .del()
    return response.status(204).send()
  }
}
