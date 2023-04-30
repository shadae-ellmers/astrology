exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('user').del()
  await knex('user').insert([
    {
      id: 1,
      name: 'Shadae',
      sun: 'Libra',
      moon: 'Gemini',
      rising: 'Aries',
      added_by_user: 'admin',
    },
    {
      id: 2,
      name: 'Hollie',
      sun: 'Cancer',
      moon: 'Capricorn',
      rising: 'Cancer',
      added_by_user: 'admin',
    },
    {
      id: 3,
      name: 'Jayden',
      sun: 'Capricorn',
      moon: 'Sagittarius',
      rising: 'Aquarius',
      added_by_user: 'admin',
    },
  ])
}
