import React, {useState, useEffect} from "react"
import { useParams, Link } from 'react-router-dom'

function Navigation () {

    const [home, setHomeActive] = useState("")
    const [workout, setWorkoutsActive] = useState("")
    const [tracking, setTrackingActive] = useState("")
    const [video, setVideoActive] = useState("")

    useEffect(() => {
        const name = window.location.href.slice(window.location.href.lastIndexOf("/")+1).toLowerCase()
        switch (name) {
            case '':
              setHomeActive("active")
              setWorkoutsActive("")
              setTrackingActive("")
              setVideoActive("")
              break;
            case 'workout':
              setHomeActive("")
              setWorkoutsActive("active")
              setTrackingActive("")
              setVideoActive("")
              break;
            case 'tracking':
              setHomeActive("")
              setWorkoutsActive("")
              setTrackingActive("active")
              setVideoActive("")
              break;
            case 'video':
              setHomeActive("")
              setWorkoutsActive("")
              setTrackingActive("")
              setVideoActive("active")
              break;
          }
    },[])

    return (
        <>
        <header id="header">
        <nav id="main-nav" className="navbar navbar-default navbar-fixed-top" role="banner">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="/"><img src="images/Logo-medium.png" alt="logo"></img></a>
                </div>
				
                <div className="collapse navbar-collapse navbar-right">
                    <ul className="nav navbar-nav">
                        <li className={`scroll ${home}`}><a href="/">Home</a></li>
                        <li className={`scroll ${workout}`}><a href="/Workout">Workouts</a></li>
                        {/* <li className="scroll"><a href="#about">About</a></li> */}
                        <li className={`scroll ${tracking}`}><a href="/Tracking">Tracking Statistics</a></li>
                        {/* <li className="scroll"><a href="#portfolio">Portfolio</a></li> */}
                        {/* <li className="scroll"><a href="#our-team">Team</a></li> */}
                        {/* <li className="scroll"><a href="#pricing">Pricing</a></li> */}
                        <li className={`scroll ${video}`}><a href="/Video">Video Tutorial</a></li>                        
                    </ul>
                </div>
            </div>{/*.container*/}
        </nav>{/*nav*/}
    </header>{/*header*/}
        </>
    )

}

export default Navigation