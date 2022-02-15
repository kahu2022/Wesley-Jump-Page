import React, {useEffect, useState} from 'react'

function Home () {

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
                        <h2>Wesley's Jumpman Training Program</h2>
                        <p>Follow this list of exercises to develop your vertical jump. Make sure to rest effectively to maximise muscle recovery and increase muscular development. In combination with a supporting diet this 6 week training program will increase your vertical jump ability.
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