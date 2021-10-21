import React from 'react';
import './Team.css'

const Team = (props) => {
    const{img ,name,description}=props.user;
    return (
        <div className="team mt-4 col-lg-4 col-md-6 col-12">
            <img src={img} alt="" />
            <h5 className=''>{name}</h5> 
            <p>{description}</p>
        </div>
    );
};

export default Team;