"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

// Stripe Elements などの必要なインポートをここに追加

export default function ProfilePage() {
  // 以下、カード情報追加のための関数などの追加
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">プロフィールページ</h1>

      <div className="bg-white shadow-md rounded p-4">
        <div className="flex items-center mb-6">
          <Image
            priority
            src={user?.image || "/default_icon.png"}
            alt="user profile_icon"
            width={60}
            height={60}
            className="rounded-t-md"
          />
          <h2 className="text-lg">{user?.name}</h2>
        </div>

        <div className="">
          <h3 className="text-lg font-semibold mb-2">カード情報</h3>
          {/* ここにStripe Elementsを用いたカード情報入力フォームを配置 */}
        </div>
      </div>
    </div>
  );
}
