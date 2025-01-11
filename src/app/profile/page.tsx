'use client';

import React from "react";
import { useUser } from '@auth0/nextjs-auth0/client';

const ProfilePage: React.FC = () => {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (

        user && (
            <div>
                <img src={user.picture || undefined} alt={user.name || undefined} className="rounded-full" />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <a href="/api/auth/logout">Logout</a>
            </div>
        )
    )
}

export default ProfilePage;