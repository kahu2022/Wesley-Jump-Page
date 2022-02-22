import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'

import { fetchWorkout } from '../api'

import StartWorkout from './WorkoutComponents/StartWorkout'
import CurrentWorkout from './WorkoutComponents/CurrentWorkout'
import WorkoutsSummary from './WorkoutComponents/WorkoutsSummary'

function Workout () {

    const [workout, setWorkout] = useState()
    
    useEffect(() => {
        fetchWorkout()
        .then(res => {
            setWorkout(res)
        })
    },[])


    return (
        <>
        <StartWorkout />
        </>
    )
}

export default Workout



