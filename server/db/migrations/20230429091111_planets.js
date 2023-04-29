exports.up = function (knex) {
  return knex.schema.createTable('planets', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('represent')
    table.string('in_aries')
    table.string('in_taurus')
    table.string('in_gemini')
    table.string('in_cancer')
    table.string('in_leo')
    table.string('in_virgo')
    table.string('in_libra')
    table.string('in_scorpio')
    table.string('in_sagittarius')
    table.string('in_capricorn')
    table.string('in_aquarius')
    table.string('in_pisces')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('planets')
}
