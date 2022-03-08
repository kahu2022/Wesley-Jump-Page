import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { fetchWorkout, fetchUser } from '../../api'
import { addSessionToDb } from '../../actions/workout'

function StartWorkout() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [session, setSession] = useState({
        "user_id": 6001,
        "workout_id": 3001,
        "status": "Started",
        "type": "Hard",
        "date": "2022-02-15 15:21:44",
        "start_time": "2022-02-15 15:21:44",
        "end_time": "2022-02-15 15:21:44",
        "location": "",
        "reflection": ""
    })
    const [workout, setWorkout] = useState({})
    const [user, setUser] = useState()
    const [geo, setGeo] = useState(false)
    const [geoLocation, setGeolocation] = useState(false)

    let geoLat
    let geoLong
    let geo1

    var x = document.getElementById("demo");

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(savePosition)
        } else {
            console.log("Geolocation is not supported by this browser.")
        }
    }

    const savePosition = (position) => {
        geoLat = String(position.coords.latitude)
        geoLong = String(position.coords.longitude)
        geo1 = geoLat + "," + geoLong
        console.log(geo1)
        setGeolocation(geo1)
        setGeo(true)
    }

    useEffect(() => {
        fetchWorkout()
            .then(res => {
                setWorkout(res)
            })
            .catch((err) => {
                console.error(err.message)
            })

        fetchUser()
            .then(res => {
                setUser(res)
            })
            .catch((err) => {
                console.error(err.message)
            })
        getLocation()
        renderMap()
    }, [])

    useEffect(() => {
        setSession({
            ...session,
            "location": geoLocation
          })
    },[geoLocation])

    const renderMap = () => {
        document.getElementById("map-container").innerHTML = `<iframe src=https://maps.google.com/maps?q=-41.2968428,174.7741013&hl=es;z=14&amp;output=embed width="400" height="300" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>`
    }

    const handleChange = (e) => {
        // console.log(e.target.name, formData.name)
        setSession({
          ...session,
          [e.target.name]: e.target.value
        })
      }

    //THIS PAGE TASKS:
    //1. LOAD - Render Button
    //2. Get meta data to populate the Global State 'Workout Session'
    //   - The variables to consider are:
    //   -  {id: 7001, 
    // user_id: 6001, 
    // workout_id: 3001, 
    // status: 'completed', 
    // type: '', 
    // date: knex.fn.now(), 
    // end_time: knex.fn.now(), 
    // location: 'Karori', 
    // reflection: 'This was a really tough training!'},


    return (
        <>
            <section id="features">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title text-center wow fadeInDown">Start your Workout Session!</h2>
                        <p className="text-center wow fadeInDown">Complete the form below to start your workout. Today is a beautiful day for exercising outside!</p>
                        <form className="text-center wow fadeInDown">
                            <h4 className="media-heading">Jump Program:</h4>
                            <label htmlFor="type">Type: </label>
                            <select id="type" name="type" required style={{ color: 'black' }} onChange={handleChange}>
                                <option value="Hard" defaultValue>Hard</option>
                                <option value="Medium">Medium</option>
                                <option value="Easy">New</option>
                            </select>
                            <button style={{ backgroundColor: '#00788C', fontSize: 20 }} onClick={() => {dispatch(addSessionToDb(session)), navigate("/Workout/session")}}>Start Workout!</button>
                            <p> </p>
                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2997.5728525907653!2d174.7723744152546!3d-41.296399979272664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snz!4v1645488145887!5m2!1sen!2snz" width="400" height="300" style={{border:0}} allowFullScreen="" loading="lazy"></iframe> */}
                            <div id="map-container"></div>

                        </form>
                    </div>

                    <div className="row text-center">
                        <div className="col-md-6">
                            <div className="media service-box wow fadeInRight">
                                <div className="media-body text-center">
                                </div>
                            </div>


                            <div className="media service-box wow fadeInRight">

                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default StartWorkout



