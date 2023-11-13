import { NextResponse } from "next/server";

import { getServerSession } from "next-auth/next";
import { options } from "@/app/options";

export async function GET() {
  const session = await getServerSession(options); // セッション情報を取得

  console.log(session?.user); // ユーザ情報を取得
  //d380dcca349496eeb7a4b3ec1e91bb719bb3b0c6ec31830bfaefca7b8f3808d1%7C4fcc8f870d9b934ed33dc36b7694beae1b5f56ad0c8a4c85982a7c5fa6ea45d5
  return NextResponse.json({ message: "ok" });
}
