exports.seed = (knex) => {
    return knex('session').del()
      .then(() => {
        return knex('session').insert([
            {id: 7001, user_id: 6001, workout_id: 3001, status: 'completed', type: '', date: knex.fn.now(), end_time: knex.fn.now(), location: 'Karori', reflection: 'This was a really tough training!'},
            {id: 7002, user_id: 6001, workout_id: 3001, status: 'completed', type: '', date: knex.fn.now(), end_time: knex.fn.now(), location: 'Waitangi Park', reflection: 'Today was really bad weather but I managed to complete all the exercises! can you please add a function to make the homepage image change everyday? thanks!'},
            {id: 7003, user_id: 6001, workout_id: 3001, status: 'completed', type: '', date: knex.fn.now(), end_time: knex.fn.now(), location: 'Wainuiomata', reflection: 'My muscles are feeling really sore today, I dont know if it is a good idea for me to do a workout tomorrow :('}
        ])
      })
  }