"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Book } from "../types/types";
import Link from "next/link";
import { useRouter } from "next/navigation";

type BookProps = {
  book: Book;
};

const Book = ({ book }: BookProps) => {
  const [isPurchase, setIsPurchase] = useState(false);
  const [showModal, setShowModal] = useState(false);
  let user: boolean = false; //dummy

  const router = useRouter();

  const handlePurchaseClick = () => {
    setShowModal(true);
  };

  const handlePurchaseConfirm = () => {
    // モーダルで購入を確定したら、本の詳細ページに遷移
    if (!user) {
      setShowModal(false); // モーダルを閉じる
      router.push("/login");
    } else {
      //Stripe購入画面へ。購入済みならそのまま本ページへ。
      router.push(`/book/${book.id}`);
    }
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* アニメーションスタイル */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .modal {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>

      <div className="flex flex-col items-center m-4">
        <a onClick={handlePurchaseClick} className="cursor-pointer shadow-lg">
          <Image
            priority
            src={book.thumbnail}
            alt={book.title}
            width={450}
            height={350}
            className="rounded-t-md"
          />
          <div className="px-4 py-4 bg-slate-100 rounded-b-md">
            <h2 className="text-lg font-semibold">{book.title}</h2>
            <p className="mt-2 text-lg text-slate-600">この本は○○...</p>
          </div>
        </a>
        {showModal && (
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-900 bg-opacity-50 flex justify-center items-center modal">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl mb-4">本を購入しますか？</h3>
              <button
                onClick={handlePurchaseConfirm}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
              >
                購入する
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                キャンセル
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Book;
