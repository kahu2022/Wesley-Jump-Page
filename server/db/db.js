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

function getSessions (db = connection) {
  return db('session')
  .select()
}

function addSession (session, db = connection) {
  return db('session')
  .insert(session)
}

function updateSession (session, db = connection) {
  return db('session')
  .where('id', '=', session.id)
  .update({
		"status": "Completed",
		"date": "2022-02-15 15:21:44",
		"start_time": "2022-02-15 15:21:44",
		"end_time": "2022-02-15 15:21:44",
		"reflection": session.reflection
  })
}

module.exports = {
  getAllGreetings,
  getPrograminfo,
  getWorkout,
  getStatistics,
  getUser,
  getSessions,
  addSession,
  updateSession
}
