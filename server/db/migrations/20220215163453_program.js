
exports.up = function(knex) {
    return knex.schema.createTable('program', (table) => {
        table.increments('id')
        table.string('name')
        table.string('goal') //reason for program
        table.string('type')
        table.string('details')
        table.string('image')
        table.string('youtube_link')
        table.string('external_resource')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('program')
};
