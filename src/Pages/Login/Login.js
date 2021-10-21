import Button from '@restart/ui/esm/Button';
import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {singInUsingGoogle}=useAuth();
    return (
        <div>
            <h1>Please Login</h1>
           <div className="">
           <Button onClick={singInUsingGoogle} className= "btn btn-danger mt-2">Google Sign In</Button> <br/>
            <Button className= "btn btn-warning mt-2">Github Sign In</Button><br/>
           
           </div>
        </div>
    );
};

export default Login;