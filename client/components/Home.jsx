import React, {useEffect, useState} from 'react'

import { fetchProgram } from '../api'

function Home () {

    const [program, setProgram] = useState({})
    
    useEffect(() => {
        fetchProgram()
        .then(res => {
            setProgram(res[0])
    })
    },[])

    return (
        <>
        <section id="hero-banner">
             <div className="banner-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                 
                                    {/* <!-- <h2 style="color: #1D1160;">Wesley's Jumpman Training Program</h2>
                                    <p>6 Week Training Program to increase Hops</p>
                                    <a className="btn btn-primary btn-lg" href="#">Let's Go!</a> --> */}
                                
                            </div>
                        </div>
                    </div>
                </div>
        </section>{/* <!--/#main-slider--> */}

        <section id="hero-text" className="wow fadeIn">
            <div className="container">
                <div className="row">
                    <div className="col-sm-9">
                        <h2>{program.name}</h2>
                        <p>{program.details}
                        </p>
                    </div>
                    {/* <!-- <div className="col-sm-3 text-right">
                        <a className="btn btn-primary btn-lg" href="#">Lets go!</a>
                    </div> --> */}
                </div>
            </div>
        </section>{/* <!--/#hero-text--> */}
        </>
    )
}

export default Home