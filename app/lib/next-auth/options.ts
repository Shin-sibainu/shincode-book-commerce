import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GitHubProvider from "next-auth/providers/github";

import { NextAuthOptions } from "next-auth";
import prisma from "../prisma";

export const nextAuthOptions: NextAuthOptions = {
  debug: true,
  providers: [
    GitHubProvider({
      // profile(profile) {
      //   console.log("Profile Github: ", profile);
      //   let userRole = "GitHub User";
      //   if (profile?.email === "shincode0712@gmail.com") {
      //     userRole = "admin";
      //   }

      //   return {
      //     id: profile.id.toString(), // 'id' を string 型に変換
      //     name: profile.name,
      //     email: profile.email,
      //     image: profile.avatar_url,
      //     role: userRole, // 追加されるカスタムプロパティ
      //     // 必要に応じて他のプロパティを追加
      //   };
      // },
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    session: ({ session, user }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
        },
      };
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
