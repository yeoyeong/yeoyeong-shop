import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      //Form
      credentials: {
        username: {
          type: "email",
          placeholder: "Email",
        },
        password: {
          type: "password",
          placeholder: "password",
        },
      },

      //authorize 함수에서 이메일과 패스워드 부분을 체크해서, 맞으면 user 객체를 리턴하고 틀리면 null을 리턴하는 구조입니다.
      async authorize(credentials, req) {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/signin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
        });
        const user = await res.json();

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    //user와 token을 같은 항목으로 만들고 리턴
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
//next13에서는 get post 방식으로 export 하는걸 권장
