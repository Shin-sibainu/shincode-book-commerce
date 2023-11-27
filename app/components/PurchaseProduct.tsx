import React, { useEffect } from "react";
import Link from "next/link";
import { BookType } from "../types/types";
import Image from "next/image";

type detailBookProps = {
  detailBook: BookType;
};

const PurchaseProduct = ({ detailBook }: detailBookProps) => {
  return (
    <Link
      href={`/book/${detailBook.id}`}
      className="cursor-pointer shadow-2xl duration-300 hover:translate-y-1 hover:shadow-none"
    >
      <Image
        priority
        src={detailBook.thumbnail.url}
        alt={detailBook.title}
        width={450}
        height={350}
        className="rounded-t-md"
      />
      <div className="px-4 py-4 bg-slate-100 rounded-b-md">
        <h2 className="text-lg font-semibold">{detailBook.title}</h2>
        {/* <p className="mt-2 text-lg text-slate-600">この本は○○...</p> */}
        <p className="mt-2 text-md text-slate-700">
          値段：{detailBook.price}円
        </p>
      </div>
    </Link>
  );
};

export default PurchaseProduct;
