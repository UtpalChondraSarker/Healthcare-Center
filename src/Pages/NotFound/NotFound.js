import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../image/error/img.jpg'

const NotFound = () => {
    return (
        <div>
            <img src={img}alt=""/>
            <Link to="/home">
                <button>Back Home page</button>
            </Link>
        </div>
    );
};

export default NotFound;