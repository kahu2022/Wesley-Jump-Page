
exports.up = function(knex) {
    return knex.schema.createTable('exercise', (table) => {
        table.increments('id')
        table.string('name')
        table.string('type')
        table.string('purpose')
        table.string('instruction')
        table.string('image')
        table.string('youtube_link')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('exercise')
};
