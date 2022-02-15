exports.seed = (knex) => {
    return knex('user').del()
      .then(() => {
        return knex('user').insert([
            {id: 6001, first_name: 'Wesley', last_name: 'Taiapa', email: 'wesley@gmail.com', profile_pic: ''}
        ])
      })
  }
 
