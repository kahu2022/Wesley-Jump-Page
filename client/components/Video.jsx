import React, {useEffect, useState} from 'react'

function Video () {

    return (
        <>

<section id="contact-us">
        
        <div className="container">
            <div className="section-header">
                <h2 className="section-title text-center wow fadeInDown">Video Tutorial</h2>
                <p className="text-center wow fadeInDown">Use this video to guide you on your exercises.</p>
            </div>
            <div id="youtubeContainer">
                <iframe src="https://www.youtube.com/embed/22Hgs0XvcDs?start=69" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="video"></iframe>
                </div>
        </div>
        
    </section>

    </>
    )
}

export default Video