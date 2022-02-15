
exports.up = function(knex) {
    return knex.schema.createTable('workout', (table) => {
        table.increments('id')
        table.int('program_id')
        table.string('level')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('workout')
};
