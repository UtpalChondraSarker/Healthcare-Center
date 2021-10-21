import React, { useEffect, useState } from 'react';
import Team from './Team';
import './Teams.css'

const Teams = () => {
    const[users,setUsers]=useState([])
    useEffect(()=>{
        fetch('./team.json')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    return (
        <div id="teams" className="container-teams">
              <h1 className='text-danger'>Meet Our Health Care Team</h1>
            <div className="row">
          
            {
                users.map(user=><Team
                    key={user.id}
                    user={user}></Team>)
            }
            </div>
        </div>
    );
};

export default Teams;