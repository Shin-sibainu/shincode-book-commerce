/* eslint-disable @next/next/no-async-client-component */
// "use client";

import { getDetailBook } from "@/app/lib/microcms/client";
import Image from "next/image";
import React, { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/default.css"; // お好みのスタイルを選択
import useHighlightCode from "@/app/hooks/useHighlightCode";

const formatDate = (dateString: string) => {
  const options: any = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Asia/Tokyo",
  };
  return new Intl.DateTimeFormat("ja-JP", options).format(new Date(dateString));
};

const DetailBook = async ({ params }: { params: { id: string } }) => {
  const book = await getDetailBook(params.id);
  // useHighlightCode();

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <Image
          className="w-full h-80 object-cover object-center"
          src={book.thumbnail.url}
          alt={book.title}
          width={700}
          height={700}
        />
        <div className="p-4">
          <h2 className="text-2xl font-bold">{book.title}</h2>
          <div
            className="text-gray-700 mt-2"
            dangerouslySetInnerHTML={{ __html: book.content }}
          />

          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-500">
              公開日: {formatDate(book.createdAt)}
            </span>
            <span className="text-sm text-gray-500">
              最終更新: {formatDate(book.updatedAt)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBook;
