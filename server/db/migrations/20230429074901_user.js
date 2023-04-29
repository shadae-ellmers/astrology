exports.up = function (knex) {
  return knex.schema.createTable('user', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('sun')
    table.string('moon')
    table.string('rising')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('user')
}
