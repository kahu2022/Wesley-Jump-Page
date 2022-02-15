exports.seed = (knex) => {
    return knex('workout_line').del()
      .then(() => {
        return knex('workout_line').insert([
            {
              id: 2001, 
              workout_id: 3001, 
              exercise_id: 1001, 
              sets: 3, 
              reps: '6-8 reps'
            },
            {
              id: 2002, 
              workout_id: 3001, 
              exercise_id: 1002, 
              sets: 3, 
              reps: '6-8 reps'
            },
            {
              id: 2003, 
              workout_id: 3001, 
              exercise_id: 1003, 
              sets: 3, 
              reps: '6-8 reps'
            },
            {
              id: 2004, 
              workout_id: 3001, 
              exercise_id: 1004, 
              sets: 3, 
              reps: '6-8 reps'
            },
            {
              id: 2005, 
              workout_id: 3001, 
              exercise_id: 1005, 
              sets: 3, 
              reps: '6-8 reps'
            },
            {
              id: 2006, 
              workout_id: 3001, 
              exercise_id: 1006, 
              sets: 3, 
              reps: '6-8 reps'
            },
            {
              id: 2007, 
              workout_id: 3001, 
              exercise_id: 1007, 
              sets: 3, 
              reps: '6-8 reps'
            },
            {
              id: 2008, 
              workout_id: 3001, 
              exercise_id: 1008, 
              sets: 3, 
              reps: '6-8 reps'
            },
            {
              id: 2009, 
              workout_id: 3001, 
              exercise_id: 1009, 
              sets: 3, 
              reps: '6-8 reps'
            },
        ])
      })
  }