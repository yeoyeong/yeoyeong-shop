"use client";
import Image from "next/image";
import Arrow from "../../../public/arrow-right-white.svg";
export default function Login() {
  return (
    <div className="container">
      <form>
        <h2>LOGIN</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
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
          padding: 0 1%;
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
        }
      `}</style>
    </div>
  );
}
