import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Service.css"

const Service = (props) => {
   const{img,services,price,description,id}=props.service
    return (
        <div className="container service mt-3">
            <img src={img}alt=""/>
            <h4>{services}</h4>
            <h5>${price}</h5>
            <p>{description}</p>
            {/* <Link to={`/details/${id}`}>
                <button className="btn btn-danger button">Details Service</button>
                
            </Link> */}

            <NavLink to= {`/details/${id}`} >
            <button className="btn btn-danger button">Details Service</button>
            </NavLink>
            

        </div>
    );
};

export default Service;