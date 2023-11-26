"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

// Stripe Elements などの必要なインポートをここに追加

export default function ProfilePage() {
  // 以下、カード情報追加のための関数などの追加
  const { data: session } = useSession();
  const user = session?.user;
  // console.log(user);

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
      <div className="flex flex-col items-center m-4">
        <Link
          href={"/"}
          className="cursor-pointer shadow-2xl duration-300 hover:translate-y-1 hover:shadow-none"
        >
          {/* <Image
            priority
            // src={book.thumbnailUrl}
            // src={book.thumbnail.url}
            // alt={book.title}
            width={450}
            height={350}
            className="rounded-t-md"
          /> */}
          <div className="px-4 py-4 bg-slate-100 rounded-b-md">
            <h2 className="text-lg font-semibold">{"a"}</h2>
            <p className="mt-2 text-lg text-slate-600">この本は○○...</p>
            <p className="mt-2 text-md text-slate-700">値段：{200}円</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
