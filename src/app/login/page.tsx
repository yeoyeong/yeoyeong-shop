"use client";
import Image from "next/image";
import Arrow from "../../../public/arrow-right-white.svg";
import { useRef } from "react";
import { signIn } from "next-auth/react";
export default function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await signIn("credentials", {
      username: emailRef.current,
      password: passwordRef.current,
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>LOGIN</h2>
        <input
          type="email"
          id="emai"
          name="email"
          placeholder="Email"
          ref={emailRef}
          autoFocus={true}
          onChange={(e: any) => {
            emailRef.current = e.target.value;
          }}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          ref={passwordRef}
          onChange={(e: any) => (passwordRef.current = e.target.value)}
        />
        <button type="submit">
          <Image src={Arrow} width={15} alt="화살표" />
        </button>
      </form>
      <style jsx>{`
        .container {
          background-color: #584848;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        form {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 375px;
          height: 660px;
          background-color: #ffffff36;
          padding: 0 2%;
          border-radius: 30px;
        }
        form > h2 {
          color: #dbd7d7;
          font-weight: 700;
          margin-bottom: 60px;
        }
        form > input {
          background-color: #ffffff1c;
          border: 1px solid #ffffff87;
          width: 100%;
          height: 50px;
          border-radius: 30px;
          padding-left: 5%;
          margin-bottom: 20px;
        }
        form > input::placeholder {
          color: #ffffff87;
        }
        form > input:focus {
          outline: none;
          border: 1px solid white;
        }
        form > button {
          border-radius: 50%;
          border: none;
          width: 50px;
          height: 50px;
          background-color: #b5cfdb;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
