exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments('id').primary()
        table.string('first_name').notNullable()
        table.string('last_name').notNullable()
        table.integer('age')
        table.timestamps(true, true)
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('users')
}
