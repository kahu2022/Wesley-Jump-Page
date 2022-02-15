import React, {useEffect, useState} from 'react'

function Quotes () {

    return (
        <>
         <section className="testimonial-area" id="testimonial">
			<div className="container">
				<div className="section-header">
                <h2 className="section-title text-center wow fadeInDown">Inspire</h2>
                <p className="text-center wow fadeInDown">There is nothing wrong with following in one's footsteps, as long as you leave your own footprints behind.</p>
            </div>
				<div className="row">
					<div className="col-md-4">
						<div className="single-testimonial animate_fade_in" style={{opacity: '1', right: '0px'}}>
							<div className="row">
								<div className="col-xs-12">
									<blockquote>Some people want it to happen, some wish it would happen, others make it happen.</blockquote>
								</div>
							</div>
							<div className="row">
								<div className="col-xs-3">
									<img src="images/Webp.net-resizeimage.jpg" alt="client"></img>
								</div>
								<div className="col-xs-9 half-gutter">
									<h5>Michael Jordan</h5>
									<h6>95-96 Bulls</h6>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="single-testimonial animate_fade_in" style={{opacity: '1', right: '0px'}}>
							<div className="row">
								<div className="col-xs-12">
									<blockquote>I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.</blockquote>
								</div>
							</div>
							<div className="row">
								<div className="col-xs-3">
									<img src="images/Webp.net-resizeimage (1).jpg" alt="client"></img>
								</div>
								<div className="col-xs-9 half-gutter">
									<h5>Muhammad Ali</h5>
									<h6>Worl Heavy weight Champion</h6>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="single-testimonial animate_fade_in" style={{opacity: '1', right: '0px'}}>
							<div className="row">
								<div className="col-xs-12">
									<blockquote>I can't relate to lazy people. We don't speak the same language. I don't understand you. I don't want to understand you.</blockquote>
								</div>
							</div>
							<div className="row">
								<div className="col-xs-3">
									<img src="images/Webp.net-resizeimage (2).jpg" alt="client"></img>
								</div>
								<div className="col-xs-9 half-gutter">
									<h5>Kobe Bryant</h5>
									<h6>LA Lakers</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        </>
    )
}

export default Quotes