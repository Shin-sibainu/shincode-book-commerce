"use client";

import { signIn, signOut } from "next-auth/react";

// ログインボタン
export const LoginButton = () => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
      onClick={() => signIn()}
    >
      Sign in
    </button>
  );
};

// ログアウトボタン
export const LogoutButton = () => {
  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  );
};
