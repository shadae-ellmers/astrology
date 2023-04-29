exports.up = function (knex) {
  return knex.schema.createTable('starsigns', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('dates')
    table.string('image')
    table.string('adverb')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('starsigns')
}
