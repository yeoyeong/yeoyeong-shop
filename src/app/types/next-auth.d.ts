//session 타입 커스텀
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      name: string;
      email: string;
      accessToken: string;
    };
  }
}
