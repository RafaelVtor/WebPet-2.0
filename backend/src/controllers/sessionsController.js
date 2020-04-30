const connection = require('../../knexMysql');

module.exports = {
  async create(request, response){
    const { id , senha } = request.body;


    const usuario = await connection('usuario')
                          .where('id', id)
                          .select('nome', 'senha')
                          .first();
    
    
    if(usuario.senha !== senha){ 
   
      return response.status(400).json({erro: 'Usuário ou senha incorreta'});
    }

    return response.json(usuario);

  }
}