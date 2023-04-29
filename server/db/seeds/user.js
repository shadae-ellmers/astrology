exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('user').del()
  await knex('user').insert([
    { id: 1, name: 'Shadae', sun: 'Libra', moon: 'Gemini', rising: 'Aries' },
    {
      id: 2,
      name: 'Hollie',
      sun: 'Cancer',
      moon: 'Capricorn',
      rising: 'Cancer',
    },
    {
      id: 3,
      name: 'Jayden',
      sun: 'Capricorn',
      moon: 'Sagittarius',
      rising: 'Aquarius',
    },
  ])
}
