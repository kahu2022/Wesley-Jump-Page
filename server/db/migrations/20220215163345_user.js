
exports.up = function(knex) {
  return knex.schema.createTable('user', (table) => {
      table.increments('id')
      table.string('first_name')
      table.string('last_name')
      table.string('email')
      table.string('profile_pic')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('user')
};
