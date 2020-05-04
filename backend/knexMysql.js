
  const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'web_pet'
    }
  })  

//verifica se existe uma tabela com o nome animal
  knex.schema.hasTable('animal').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('animal', function(t) {
        t.increments('id').primary();
        t.string('nome', 100);
        t.string('tipo', 100);
        t.integer('idade', 11);
        t.text('vacinas', 200);
        t.text('obs', 200);
        t.string('foto', 50);
        t.foreign('dono', 50);
      });
    }
  });
  ////verifica se existe uma tabela com o nome usuario
  knex.schema.hasTable('usuario').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('usuario', function(t) {
        t.increments('id').primary();
        t.string('nome', 100);
        t.string('email', 100);
        t.integer('tel', 15);
        t.text('endereco', 50);
        t.string('senha', 50);
      });
    }
  });

  module.exports = knex;

/* teste

knex.select("nome").from('animal')
.then((rows) =>{
  for (row of rows){
    console.log(` ${row['nome']}`);
  }
});
*/