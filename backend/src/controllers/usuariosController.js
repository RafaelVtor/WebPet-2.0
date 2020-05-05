const connection = require('../../knexMysql')
const crypto = require('crypto')

module.exports = {
  async index (request, response) {
    const usuarios = await connection('usuario').select('*')
    return response.json(usuarios)
  },

  async usuario (request, response) {
    const { id } = request.params
    const usuario = await connection('usuario')
      .select('*')
      .where('id', id)
    return response.json(usuario)
  },
  /*
  async dono (request, response) {
    const { id } = request.params
    const usuario = await connection('usuario')
      .join('animal', 'animal.dono', '=', 'usuario.id')
      .select(
        '*',
        connection.ref('animal.id').as('animal_id'),
        connection.ref('animal.nome').as('animal_nome'),
        connection.ref('usuario.id').as('usuario_id'),
        connection.ref('usuario.nome').as('dono_nome')
      )
      .where('usuario.id', id)

    console.log(id)

    return response.json(usuario)
  },
  */
  async create (request, response) {
    const { nome, email, tel, endereco, senha } = request.body

    //Lembrar de implementar a criptografia da senha

    //criptografando a senha
    /*
    let chave = crypto.createCipher('aes-128-ccm', 'mypassword');
    let novaSenha = chave.update(senha, 'utf8', 'hex');
    novaSenha += chave.final('hex');

    //descriptografando a senha
    let chave2 = crypto.createCipher('aes-128-ccm', 'mypassword');
    let novaSenha2 = chave2.update(novaSenha, 'hex', 'utf8');
    novaSenha2 += chave2.final('utf8');

    */

    await connection('usuario').insert({
      nome,
      email,
      tel,
      endereco,
      senha
    })
    return response.json({ nome })
  },

  async update (request, response) {
    //Lembrar de criar update para senha
    const { id } = request.params
    const { nome, email, tel, endereco } = request.body

    const usuario = await connection('usuario')
      .where('id', id)
      .update({
        nome,
        email,
        tel,
        endereco
      })

    return response.json(usuario)
  },

  async delete (request, response) {
    const { id } = request.params
    const user_id = request.headers.authorization
    //Lembrar de melhorar o delete para verificar a autorização
    const usuario = await connection('usuario')
      .where('id', id)
      .del()

    return response.json(id)
  }
}
