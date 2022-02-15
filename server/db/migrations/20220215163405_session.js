
exports.up = function(knex) {
    return knex.schema.createTable('session', (table) => {
        table.increments('id')
        table.int('user_id')
        table.int('workout_id')
        table.string('status') //planned, started, completed
        table.string('type')
        table.date('date')
        table.timestamp('start_time').defaultTo(knex.fn.now())
        table.timestamp('end_time')
        table.string('location')
        table.string('reflection')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('session')
};
