
exports.up = function(knex, Promise) {
  return knex.schema.createTable('insults', function(table){
    table.increments();
    table.text('insult');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('insults');
};
