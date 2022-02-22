const config = require('./knexfile').development
const connection = require('knex')(config)

function getAllGreetings (db = connection) {
  return db('greetings')
    .select()
}

function getUser (db = connection) {
  return db('user')
  .select()
  .first()
}

function getPrograminfo (db = connection) {
  return db('program')
  .select()
}

function getWorkout (db = connection) {
  return db('workout')
  .leftJoin('workout_line', 'workout.id', '=', 'workout_line.workout_id')
  .leftJoin('exercise', 'workout_line.exercise_id', '=', 'exercise.id')
  .select('workout.id', 'workout.level','workout_line.sets','workout_line.reps', 'exercise.name', 'exercise.type', 'exercise.youtube_link')
}

function getStatistics (db = connection) {
  return db('program_user')
  .select()
}

module.exports = {
  getAllGreetings,
  getPrograminfo,
  getWorkout,
  getStatistics,
  getUser
}
