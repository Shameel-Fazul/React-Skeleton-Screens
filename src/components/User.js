import React, { useEffect, useState } from 'react';
import Skeleton from "react-loading-skeleton";


const User = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        setTimeout( async() => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
            const data = await res.json(); // Parsing JSON to a JavaScript Object
            setProfile(data);
        }, 5000)
    })
    return (
        <div className="user">
            <h2>User Details</h2>
            { profile && ( 
            <div className="profile">
                <h3>{ profile.username }</h3>
                <p>{ profile.email }</p>
                <a href={ profile.website }>{ profile.website }</a>
            </div> 
            ) }

            { !profile && 
            <div style={{ fontSize: 30, lineHeight: 2, textAlign: 'center' }}>
                <Skeleton circle={true} height={80} width={80} />
                
                <Skeleton count={3}/>
            </div> }
        </div>
    );
}

export default User;