"use client";

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = userUserAuth();
    return (
        <div>
            <h1>Week 9</h1>
            <p>{user && user.displayName}</p>
            <p>{user && user.email}</p>
        </div>

    )
}