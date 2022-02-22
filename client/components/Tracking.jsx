import React, {useEffect, useState} from 'react'

import { fetchStatistics } from '../api'

function Tracking () {

    const [initTest, setInitTest] = useState()
    const [midTest, setmidTest] = useState()
    const [finTest, setfinTest] = useState()
    const [trgtTest, settrgtTest] = useState()
    const [statistics, setStatistics] = useState()

    useEffect(() => {
        fetchStatistics()
        .then(res => {
            setInitTest(JSON.parse(res[0].initial_testing))
            setmidTest(JSON.parse(res[0].mid_testing))
            setfinTest(JSON.parse(res[0].final_testing))
            settrgtTest(JSON.parse(res[0].target_values))
            setStatistics(res)
        })
    },[])

    return (
        <>

 <section id="services" >
 <div className="container">

     <div className="section-header">
         <h2 className="section-title text-center wow fadeInDown">Tracking Statistics</h2>
         <p className="text-center wow fadeInDown">Check out your progress from Start to Finish including measurements for initial testing and mid-point testing. Also see how you are tracking towards your final goals. Modify your training program if you need to in order to keep on track with your final goals. Your stats should be an indicator of how well you are doing and if you are on target.</p>
     </div>

     <div className="row">
         <div className="features">
             <div className="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="0ms">
                 <div className="media service-box">
                     <div className="pull-left">
                         <img src="images/ballpurple.jpg" alt="client"></img>
                     </div>
                     <div className="media-body">
                         <h4 className="media-heading" >My Goals</h4>
                         <p>{statistics?.[0].user_goals}</p>
                     </div>
                 </div>
             </div>

             <div className="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="100ms">
                 <div className="media service-box">
                     <div className="pull-left" style={{paddingRight: '10px'}}>
                         <img src="images/target3.jpg" alt="client"></img>
                     </div>
                     <div className="media-body">
                         <h4 className="media-heading">Initial Testing</h4>
                         <p><b>22 December 2021:</b></p>
                             <p>Height: 1660mm					5.45ft</p>
                             <p>Standing Reach: 2130mm			6.99ft</p>
                             <p>Jumping Reach: 2560mm			8.40ft</p>
                             <p>Running Jump Vertical: 2630mm	8.63ft</p>
                             <p>Standing Vertical: 430mm or 17inch</p>
                             <p>Running Jump Vertical: 500mm or 19inch</p>
                             <p><b>Target: 3230mm					10.6ft</b></p>
                             <p>Gap to Increase: 600mm or 23.62inches</p>
                             <p><b>Goal: Is to increase Your Current Vertical by 23.62 Inches in order to achieve Dunk with a Ball.</b></p>
                     </div>
                 </div>
             </div>
         </div>
         <div className="col-sm-6 wow fadeInLeft">
             <img className="img-responsive" src="images/received_447607760297511.jpeg" alt=""></img>
           </div>
     </div>   
 </div>
</section>

</>)
}

export default Tracking