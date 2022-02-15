
exports.up = function(knex) {
    return knex.schema.createTable('workout_line', (table) => {
        table.increments('id')
        table.int('workout_id')
        table.int('exercise_id')
        table.int('sets')
        table.int('reps')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('workout_line')
};
