import { useEffect } from "react";
import { useState } from "react";
const User = () => {
    const [profile, setProfile] = useState(null);
    useEffect(() => {
        // to delay the fetching of data to see the skeletons
        setTimeout(async () => {
            const result = await fetch('https://jsonplaceholder.typicode.com/users/1');
            const data = await result.json();
            setProfile(data);
        }, 5000)
    })
    return (
        <div className='user'>
            <h2>User Details</h2>
            {/* if the profile is true its going to execute whats on the right side , and if its not it will not render */}
            {profile && (
                <div className='profile'>
                    <h3>{profile.username}</h3>
                    <p>{profile.email}</p>
                    <a href={profile.website}> User Profile</a>
                </div>
            )}
            {/* what to show when profile is null (while the data is loading ) */}
            {!profile && (
                <div>Loading .. </div>
            )}
        </div>
    );
}
export default User;