import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-slate-600 text-gray-100 shadow-lg">
      <nav className="flex items-center justify-between p-4">
        <Link href={"/"} className="text-xl font-bold">
          Book Commerce
        </Link>
        <div>
          <a
            href="/"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </a>
          <a
            href={false ? "/profile" : "/login"}
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            {false ? "Profile" : "Login"}
          </a>
          <a
            href="/contact"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          ></a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
