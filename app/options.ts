import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

//https://zenn.dev/tfutada/articles/5557b780050574

export const options: NextAuthOptions = {
  debug: true,
  session: { strategy: "jwt" },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    // https://next-auth.js.org/providers/google
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
          scope:
            "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar.readonly",
        },
      },
    }),
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      // 認証処理
      async authorize(credentials) {
        const users = [
          { id: "1", email: "user1@example.com", password: "password1" },
          { id: "2", email: "user2@example.com", password: "password2" },
          { id: "3", email: "abc@abc", password: "123" },
        ];

        const user = users.find((user) => user.email === credentials?.email);

        if (user && user?.password === credentials?.password) {
          return {
            id: user.id,
            name: user.email,
            email: user.email,
            role: "admin",
          };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, account, profile, isNewUser }) => {
      // Add role to the user info in the token right after sign in
      console.log("in jwt", { user, token, account, profile });

      if (user) {
        token.user = user;
        const u = user as any;
        token.role = u.role;
      }
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
      }
      return token;
    },
    session: ({ session, token }) => {
      // console.log("in session", {session, token});
      token.accessToken;
      return {
        ...session,
        user: {
          ...session.user,
          role: token.role,
          accessToken: token.accessToken,
          refreshToken: token.refreshToken,
        },
      };
    },
  },
};
