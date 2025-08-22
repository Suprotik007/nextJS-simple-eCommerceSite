"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function GoogleAuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
       
        <button
          onClick={() => signOut()}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn("google")}
      className="bg-violet-700 text-white px-4 py-2 rounded"
    >
      Login 
    </button>
  );
}
