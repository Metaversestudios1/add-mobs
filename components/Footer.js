import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-white rounded-lg shadow my-5 dark:bg-gray-900">
      <div className="w-full p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            AdMods
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
