"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import PurchaseProduct from "../components/PurchaseProduct";
import { getDetailBook } from "../lib/microcms/client";
import { BookType, Purchase } from "../types/types";

export default function ProfilePage() {
  const [detailBooks, setDetailBooks] = useState<BookType[]>([]);

  // 以下、カード情報追加のための関数などの追加
  const { data: session } = useSession();
  const user: any = session?.user;
  // console.log(user?.id);

  useEffect(() => {
    const fetchPurchases = async () => {
      if (user) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/purchases/${user.id}`
        );
        const data = await response.json();

        // 各購入履歴に対してmicroCMSから詳細情報を取得
        const bookDetails = await Promise.all(
          data.map(async (purchase: Purchase) => {
            return getDetailBook(purchase.bookId);
          })
        );
        setDetailBooks(bookDetails);
      }
    };

    fetchPurchases();
  }, [user]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">プロフィール</h1>

      <div className="bg-white shadow-md rounded p-4">
        <div className="flex items-center">
          <Image
            priority
            src={user?.image || "/default_icon.png"}
            alt="user profile_icon"
            width={60}
            height={60}
            className="rounded-t-md"
          />
          <h2 className="text-lg ml-4 font-semibold">お名前：{user?.name}</h2>
        </div>
      </div>

      <span className="font-medium text-lg mb-4 mt-4 block">購入した記事</span>
      <div className="flex items-center gap-6">
        {detailBooks.map((detailBook: BookType) => (
          <PurchaseProduct key={detailBook.id} detailBook={detailBook} />
        ))}
      </div>
    </div>
  );
}
