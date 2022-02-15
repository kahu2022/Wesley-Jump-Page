exports.seed = (knex) => {
    return knex('program').del()
      .then(() => {
        return knex('program').insert([
            {
              id: 4001, 
              name: "Wesley's Jumpman Training Program",
              goal: '', 
              type: 'Explosive Verticle Jump', 
              details: 'Follow this list of exercises to develop your vertical jump. Make sure to rest effectively to maximise muscle recovery and increase muscular development. In combination with a supporting diet this 6 week training program will increase your vertical jump ability.', 
              image: '',
              youtube_link: '',
              external_resource: ''
            }
        ])
      })
  }
 