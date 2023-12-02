"use server";

import { signIn } from "@/auth";

export async function authenticateWithGitHub() {
  try {
    const result: any = await signIn("github", {
      callbackUrl: "/your-callback-url",
    });
    if (result?.url) {
      window.location.href = result.url;
      return false; // リダイレクトを待つ
    }
    return true;
  } catch (error) {
    console.error("GitHub認証エラー", error);
    return false;
  }
}

// export async function authenticate(prevState: boolean, formData: FormData) {
//   try {
//     await signIn("credentials", Object.fromEntries(formData));
//     return true;
//   } catch (error) {
//     if ((error as Error).message.includes("CredentialsSignin")) {
//       return false;
//     }
//     throw error;
//   }
// }
