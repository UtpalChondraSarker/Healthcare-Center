import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
   
    let {serviceId}=useParams();

    const[details,setDetails]=useState([]);

    const[singleDetails,setSingleDetails]=useState({})

    useEffect(()=>{
        fetch('/details.json')
        .then(res=>res.json())
        .then(data=>setDetails(data.employees))
    },[])

    useEffect(()=>{
     const allDetails= details.find(detail=>detail.login.serviceId === serviceId)
     setSingleDetails(allDetails)
    },[details])

    return (
        <div>
            <h1>this is id:{serviceId}</h1>
            <h1>this is deatils:{singleDetails?.name}</h1>
        
        </div>
    );
};

export default Details;