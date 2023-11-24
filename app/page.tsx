// "use client";

import { cache, useEffect, useState } from "react";
import Book from "./components/Book";
import { BookType } from "./types/types";
import { getAllBooks } from "./lib/microcms/client";
// import { headers } from "next/headers";

//https://zenn.dev/arsaga/articles/3f5bce7c904ebe#%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E6%83%85%E5%A0%B1

// 疑似データ
// const books = [
//   {
//     id: 1,
//     title: "Book 1",
//     thumbnail: "/thumbnails/discord-clone-udemy.png",
//     author: {
//       id: 1,
//       name: "Author 1",
//       description: "Author 1 description",
//       profile_icon: "https://source.unsplash.com/random/2",
//     },
//     content: "Content 1",
//     created_at: new Date().toString(),
//     updated_at: new Date().toString(),
//   },
//   {
//     id: 2,
//     title: "Book 2",
//     thumbnail: "/thumbnails/notion-udemy.png",
//     author: {
//       id: 2,
//       name: "Author 2",
//       description: "Author 2 description",
//       profile_icon: "https://source.unsplash.com/random/3",
//     },
//     content: "Content 2",
//     created_at: new Date().toString(),
//     updated_at: new Date().toString(),
//   },
//   {
//     id: 3,
//     title: "Book 3",
//     thumbnail: "/thumbnails/openai-chatapplication-udem.png",
//     author: {
//       id: 3,
//       name: "Author 3",
//       description: "Author 3 description",
//       profile_icon: "https://source.unsplash.com/random/4",
//     },
//     content: "Content 3",
//     created_at: new Date().toString(),
//     updated_at: new Date().toString(),
//   },
//   // 他の本のデータ...
// ];

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Home() {
  const { contents } = await getAllBooks();

  return (
    <>
      <main className="flex flex-wrap justify-center items-center md:mt-20 mt-20">
        <h2 className="text-center w-full font-bold text-3xl mb-2">
          Book Commerce
        </h2>
        {contents.map((book: BookType) => (
          <Book key={book.id} book={book} />
        ))}
      </main>
    </>
  );
}
