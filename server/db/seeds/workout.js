exports.seed = (knex) => {
    return knex('workout').del()
      .then(() => {
        return knex('workout').insert([
            {
            id: 3001, 
            program_id: 4001, 
            level: 'Novice'
            }
        ])
      })
  }