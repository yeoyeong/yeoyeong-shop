"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

function SignInButton() {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <>
        <span>{session.user.name}님 안녕하세요. </span>
        <button onClick={() => signOut()}>로그아웃</button>
        <style jsx>{`
          button {
            border: none;
            background-color: transparent;
            cursor: pointer;
          }
        `}</style>
      </>
    );
  }

  return (
    <>
      <button onClick={() => signIn()}>로그인</button>
      <style jsx>{`
        button {
          border: none;
          background-color: transparent;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

export default SignInButton;
