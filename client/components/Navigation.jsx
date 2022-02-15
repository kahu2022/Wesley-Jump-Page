import React, {useState, useEffect} from "react"

function Navigation () {

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
                    <a className="navbar-brand" href="index.html"><img src="images/Logo-medium.png" alt="logo"></img></a>
                </div>
				
                <div className="collapse navbar-collapse navbar-right">
                    <ul className="nav navbar-nav">
                        <li className="scroll active"><a href="#home">Home</a></li>
                        <li className="scroll"><a href="#features">Workouts</a></li>
                        {/* <li className="scroll"><a href="#about">About</a></li> */}
                        <li className="scroll"><a href="#services">Tracking Statistics</a></li>
                        {/* <li className="scroll"><a href="#portfolio">Portfolio</a></li> */}
                        {/* <li className="scroll"><a href="#our-team">Team</a></li> */}
                        {/* <li className="scroll"><a href="#pricing">Pricing</a></li> */}
                        <li className="scroll"><a href="#contact-us">Video Tutorial</a></li>                        
                    </ul>
                </div>
            </div>{/*.container*/}
        </nav>{/*nav*/}
    </header>{/*header*/}
        </>
    )

}

export default Navigation