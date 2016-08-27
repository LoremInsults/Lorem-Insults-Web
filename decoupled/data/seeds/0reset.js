exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE insults RESTART IDENTITY CASCADE')
};
