import React, { useEffect, useState, Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import { fetchUser } from '../api'

import Navigation from './Navigation'
import Home from './Home'
import Workout from './Workout'
import Tracking from './Tracking'
import Quotes from './Quotes'
import Video from './Video'
import Footer from './Footer'
import WorkoutsSummary from './WorkoutComponents/WorkoutsSummary'

function App () {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetchUser()
    .then(res => {
      console.log(res)
    })
    .catch((err) => {
      console.error(err.message)
    })

  }, [])

  return (
    <div className='app-container'>
      <Navigation />
      <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path="/Workout/" element={<Workout />}></Route>
            <Route path="/Workout/session" element={<WorkoutsSummary />}></Route>
            <Route path="/Tracking/" element={<Tracking />}></Route>
            <Route path="/Video/" element={<Video />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
