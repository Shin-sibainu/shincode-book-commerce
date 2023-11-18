"use client";

import React from "react";

const CreateBook = () => {
  return (
    <form className="mt-10 container mx-auto">
      <div>
        <label htmlFor="title">書籍タイトル</label>
        <input
          id="title"
          className="block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="content">執筆</label>
        <textarea
          id="content"
          className="block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="price">価格設定</label>
        <input
          id="price"
          type="number"
          className="block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="image">サムネイル</label>
        <input type="file" id="image" name="file" required />
      </div>

      <button
        type="submit"
        className="bg-blue-400 px-6 py-3 font-medium rounded-md text-white shadow-sm mt-4"
      >
        Create Book
      </button>
    </form>
  );
};

export default CreateBook;
