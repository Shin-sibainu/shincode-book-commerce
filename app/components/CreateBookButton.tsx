import Link from "next/link";
import React from "react";

const CreateBookButton = () => {
  return (
    <div className="fixed bottom-8 right-8">
      <Link
        href={"/createBook"}
        className="shadow-lg flex items-center duration-300 justify-center w-20 h-20 bg-green-600 text-white rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </Link>
    </div>
  );
};

export default CreateBookButton;
