
  const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'web_pet'
    }
  })  

  module.exports = knex;

/* teste

knex.select("nome").from('animal')
.then((rows) =>{
  for (row of rows){
    console.log(` ${row['nome']}`);
  }
});
*/