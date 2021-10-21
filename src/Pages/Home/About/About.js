import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import img from '../../../image/about1.jpg'
import Teams from '../Team/Teams';
import "./About.css"


const About = () => {
    

    return (
        <div id="abouts" className='container mt-4 '>
            <h1 className="text-warning" >About Us</h1>
           <div className='about d-flex m-4'>
               <div className="row-6 ">
                    <img width="450px"height="300px" src={img}alt="" />
               </div>
                <div className="text-container row-6 ps-5 pt-2">
                <h5>Praesent massa orci, condimen vitae mattis quis, imperdiet non 
                        massa</h5>
                   
                        <p >Lorem ipsum dolor sit amet, consectetur ag elit.
                    Proin ipsum augue, rhoncus ac arcu ut, auclum est.
                    AEtiam ligula orci, condim at turpis sed.Ppulvinar,
                    poserat vitae, ultrices quis semper nisi porttitor. 
                    Aenean vel libero at nulla pulvinar placerat mauris
                    Phasellus..
                    
                    </p>
                    <Button className="btn btn-danger">Read More</Button>
                </div>
           </div>
           <div>
               
             <Teams></Teams>
               
           </div>
        </div>
    );
};

export default About;