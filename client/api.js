import request from 'superagent'

export function fetchGreetings () {
  return request
    .get('/api/v1/hello')
    .then((response) => {
      return response.body
    })
}

export function fetchUser () {
  return request
  .get('/api/v1/user')
  .then((response) => {
    return response.body
  })
}

export function fetchProgram () {
  return request
  .get('/api/v1/program')
  .then((response) => {
    return response.body
  })
}

export function fetchWorkout () {
  return request
  .get('/api/v1/program/workout')
  .then((response) => {
    return response.body
  })
}

export function fetchStatistics () {
  return request
  .get('/api/v1/program/statistics')
  .then((response) => {
    return response.body
  })
}

