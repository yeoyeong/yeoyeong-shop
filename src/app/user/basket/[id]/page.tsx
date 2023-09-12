"use client";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function Basket() {
  const { id } = useParams();
  const { data: session } = useSession();
  useEffect(() => {
    if (!session) return;
    fetch(`http://localhost:3000/api/user/basket/${id}`, {
      headers: {
        Authorization: session.user.accessToken,
      },
    }).then((res) => console.log(res));
    //   .then((data) => console.log(data));
  }, []);
  return <main>Basket</main>;
}
