import { useEffect } from "react";
import { useState } from "react";
import SkeletonProfile from "../Skeletons/Skeleton-profile";
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
    const skeleton = [1, 2, 3, 4, 5];
    return (
        <div className='user'>
            <h2>User Details</h2>
            {/* if the profile is true its going to execute whats on the right side , and if its not it will not render */}
            {profile && (
                <div className='profile'>
                    <h3>{profile.username}</h3>
                    <p>{profile.email}</p>
                    <p >{profile.company.name}</p>
                </div>
            )}
            {/* what to show when profile is null (while the data is loading ) */}
            {!profile && (
                <div>
                    {skeleton.map(skeletonProfile =>
                        <div key={skeletonProfile} >
                            <SkeletonProfile />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
export default User;
