import React, { useEffect, useState, Component } from 'react'

import { fetchGreetings } from '../api'

import Navigation from './Navigation'
import Home from './Home'
import Workout from './Workout'
import Tracking from './Tracking'
import Quotes from './Quotes'
import Video from './Video'
import Footer from './Footer'

function App () {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetchGreetings()
      .then(greetings => setMessages(greetings))
  }, [])

  return (
    <div className='app-container'>
      <Navigation />
      <Home />
      <Workout />
      <Tracking />
      <Quotes />
      <Video />
      <Footer />
    </div>
  )
}

export default App
