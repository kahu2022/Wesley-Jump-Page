import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'

import { fetchWorkout } from '../../api'

function WorkoutsSummary () {

    const [workout, setWorkout] = useState()
    
    useEffect(() => {
        fetchWorkout()
        .then(res => {
            setWorkout(res)
        })
    },[])


    return (
        <>
        <section id="features">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title text-center wow fadeInDown">Let's get Started!</h2> 
				    <p className="text-center wow fadeInDown">Follow the allocated number of Reps and Sets for Each exercise to complete the exercises.</p>
                </div>

                <div className="row"> 
                    <div className="col-md-6">
                        <div className="media service-box wow fadeInRight">
                            <div className="pull-left">
                                {/* <!-- <i className="fa fa-rss"></i> --> */}
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">{workout?.[0].type}</h4>
                                <form>
                                <input type="checkbox" id="chk1" name="pogo" value="Pogo" />
                                <Link to="/"><label htmlFor="chk1" id="chk1t">1. {workout?.[0].name} - {workout?.[0].sets} x {workout?.[0].reps}</label></Link><br></br>
                                <input type="checkbox" id="chk2" name="vehicle2" value="Car" />
                                    <label htmlFor="2"  id="chk2t">2. {workout?.[1].name} - {workout?.[1].sets} x {workout?.[1].reps}</label><br></br>
                                <input type="checkbox" id="chk3" name="vehicle3" value="Boat" />
                                    <label htmlFor="3" id="chk3t">3. {workout?.[2].name} - {workout?.[2].sets} x {workout?.[2].reps}</label><br></br>
                                {/* <!-- <input type="submit" value="Submit"> --> */}
                              </form>
                            </div>
                        </div>

                        <div className="media service-box wow fadeInRight">
                            <div className="pull-left">
                                {/* <!-- <i className="fa fa-cogs"></i> --> */}
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">{workout?.[3].type}</h4>
                                <form>
                                <input type="checkbox" id="chk4" name="pogo" value="Pogo" />
                                    <label htmlFor="4" id="chk4t">1. {workout?.[3].name} - {workout?.[3].sets} x {workout?.[3].reps}</label><br></br>
                                <input type="checkbox" id="chk5" name="vehicle2" value="Car" />
                                    <label htmlFor="5" id="chk5t">2. {workout?.[4].name} - {workout?.[4].sets} x {workout?.[4].reps}</label><br></br>
                                <input type="checkbox" id="chk6" name="vehicle3" value="Boat" />
                                    <label htmlFor="6" id="chk6t">3. {workout?.[5].name} - {workout?.[5].sets} x {workout?.[5].reps}</label><br></br>
                                {/* <!-- <input type="submit" value="Submit"> --> */}
                              </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">

                        <div className="media service-box wow fadeInRight">
                            <div className="pull-left">
                                {/* <!-- <i className="fa fa-line-chart"></i> --> */}
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">{workout?.[6].type}</h4>
                                <form>
                                <input type="checkbox" id="chk7" name="pogo" value="Pogo" />
                                    <label htmlFor="7" id="chk7t"> 1. {workout?.[6].name} - {workout?.[6].sets} x {workout?.[6].reps}</label><br></br>
                                <input type="checkbox" id="chk8" name="vehicle2" value="Car" />
                                    <label htmlFor="8" id="chk8t">2. {workout?.[7].name} - {workout?.[7].sets} x {workout?.[7].reps}</label><br></br>
                                <input type="checkbox" id="chk9" name="vehicle3" value="Boat" />
                                    <label htmlFor="9" id="chk9t">3. {workout?.[8].name} - {workout?.[8].sets} x {workout?.[8].reps}</label><br></br>
                                {/* <!-- <input type="submit" value="Submit"> --> */}
                              </form>
                            </div>
                        </div>

                        <div className="media service-box wow fadeInRight">
                            <div className="pull-left">
                                <i className="fa fa-cloud-upload"></i>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Warm Down</h4>
                                <p>Well done! you are all done for the day. Take some time to do some shooting or relaxed shooting.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>      
        </section>
        
        </>
    )
}

export default WorkoutsSummary



