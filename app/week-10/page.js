"use client";

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  async function handleSignIn() {
    await gitHubSignIn();
    router.push("/week-10/shopping-list");
  }

  async function handleSignOut() {
    await firebaseSignOut();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Week 10</h1>
      {user ? (
        <div>
          <p className="mb-4">
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={handleSignOut} className="hover:underline mb-4">
            Logout
          </button>
          <div>
            <Link
              href="/week-10/shopping-list"
              className="hover:underline mb-4"
            >
              Continue to your Shopping List
            </Link>
          </div>
        </div>
      ) : (
        <button onClick={handleSignIn} className="hover:underline mb-4">
          Sign in with GitHub
        </button>
      )}
    </div>
  );
}
