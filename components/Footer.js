import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-white shadow  dark:bg-gray-900 mt-24">
      <div className="w-full p-4 flex items-center md:flex md:items-center justify-center">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link href="/dashboard" className="hover:underline">
            AdMods
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
