import React, {useEffect, useState} from 'react'

function Workout () {

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
                                <h4 className="media-heading">Speed Types - KD</h4>
                                <form>
                                <input type="checkbox" id="chk1" name="pogo" value="Pogo" />
                                    <label htmlFor="chk1" id="chk1t">1. Pogo Jumps - 3 x 6-8 reps</label><br></br>
                                <input type="checkbox" id="chk2" name="vehicle2" value="Car" />
                                    <label htmlFor="2"  id="chk2t">2. Depth Jump to split squat - 3 x 6-8 reps</label><br></br>
                                <input type="checkbox" id="chk3" name="vehicle3" value="Boat" />
                                    <label htmlFor="3" id="chk3t">3. Rear foot elevated split squat - 3 x 6-8 reps</label><br></br>
                                {/* <!-- <input type="submit" value="Submit"> --> */}
                              </form>
                            </div>
                        </div>

                        <div className="media service-box wow fadeInRight">
                            <div className="pull-left">
                                {/* <!-- <i className="fa fa-cogs"></i> --> */}
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Spring Types - Michael Jordan</h4>
                                <form>
                                <input type="checkbox" id="chk4" name="pogo" value="Pogo" />
                                    <label htmlFor="4" id="chk4t">1. Dumbbell Jump Squat - 3 x 6-8 reps</label><br></br>
                                <input type="checkbox" id="chk5" name="vehicle2" value="Car" />
                                    <label htmlFor="5" id="chk5t">2. Explosive Step up - 3 x 6-8 reps</label><br></br>
                                <input type="checkbox" id="chk6" name="vehicle3" value="Boat" />
                                    <label htmlFor="6" id="chk6t">3. Kettle Bell Swing - 3 x 6-8 reps</label><br></br>
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
                                <h4 className="media-heading">Strength Types - Wilt Chamberlain</h4>
                                <form>
                                <input type="checkbox" id="chk7" name="pogo" value="Pogo" />
                                    <label htmlFor="7" id="chk7t">1. One Legged lateral hop - 3 x 6-8 reps</label><br></br>
                                <input type="checkbox" id="chk8" name="vehicle2" value="Car" />
                                    <label htmlFor="8" id="chk8t">2. Depth Drop - 3 x 6-8 reps</label><br></br>
                                <input type="checkbox" id="chk9" name="vehicle3" value="Boat" />
                                    <label htmlFor="9" id="chk9t">3. Tuck Jumps - 3 x 6-8 reps</label><br></br>
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

export default Workout



