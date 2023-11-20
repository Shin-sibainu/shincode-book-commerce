// Book API
import { nextAuthOptions } from "@/app/lib/next-auth/options";
import prisma from "@/app/lib/prisma";
import { put } from "@vercel/blob";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

// GET ALl Books
// export async function GET(request: Request) {
//   try {
//     const allBooks = await prisma.book.findMany();
//     return NextResponse.json(allBooks);
//   } catch (err) {
//     return NextResponse.json(err);
//   }
// }

// // Create Book
// export async function POST(request: Request) {
//   try {
//     const session = await getServerSession(nextAuthOptions);

//     if (!session || !session.user) {
//       return Response.json({ error: "Unauthorized" });
//     }

//     const authorId = session.user.id;

//     //thumbnailUrlはS3で保存している画像の絶対パスを保存する
//     const { title, content, price, thumbnailUrl } = await request.json();
//     const newBook = await prisma.book.create({
//       data: {
//         title,
//         content,
//         price: Number(price),
//         authorId,
//         thumbnailUrl,
//       },
//     });
//     return NextResponse.json(newBook);
//   } catch (err) {
//     console.log(err);
//     return NextResponse.json(err);
//   }
// }

// GET ALL Books From MicroCMS

