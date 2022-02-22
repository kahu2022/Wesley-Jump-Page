
exports.up = function(knex) {
    return knex.schema.createTable('program_user', (table) => {
        table.increments('id')
        table.int('user_id')
        table.int('program_id')
        table.string('user_goals') //obj
        table.string('initial_testing') //obj
        table.string('mid_testing') //obj
        table.string('final_testing') //obj
        table.string('target_values') //obj
        table.date('start_date')
        table.date('mid_point_date')
        table.date('end_date')
        table.string('status') //planing, started, in-progress, completed
        table.string('images') //init results image or note to self.
        table.string('notes')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('program_user')
};
