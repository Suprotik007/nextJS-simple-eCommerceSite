'use client'

import Sidebar from '@/Elements/Sidebar';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const links = (
    <div className="flex space-x-8 font-semibold text-gray-700 dark:text-gray-300 items-center">
      <Link href="/"
         className="hover:text-violet-600 dark:hover:text-violet-400 transition">Home
      </Link>
      <Link href="/products"
         className="hover:text-violet-600 dark:hover:text-violet-400 transition">Products
      </Link>
      <Link href="/dashboard/add-product"
         className="hover:text-violet-600 dark:hover:text-violet-400 transition">Dashboard
      </Link>
     
    </div>
  );

  return (
    <>
      <header className="p-6 rounded-b-2xl dark:bg-gray-900 dark:text-gray-100 shadow-md sticky top-0 z-50 bg-white">
        <div className="container flex justify-between items-center mx-auto max-w-7xl">
          <a
            rel="noopener noreferrer"
            href="/"
            aria-label="Back to homepage"
            className="flex items-center space-x-2"
          >
            <p className="text-3xl font-mono font-extrabold text-violet-600 dark:text-violet-400">
              GoriberDokan
            </p>
          </a>

          <nav className="hidden lg:flex">{links}</nav>

          <div className="hidden lg:flex items-center space-x-4">
            <button className="px-6 py-2 font-semibold rounded-lg bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-400 dark:text-gray-900 dark:hover:bg-violet-500 transition">
              Log In
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="p-2 rounded-md lg:hidden focus:outline-none focus:ring-2 focus:ring-violet-600"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-7 h-7 dark:text-violet-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default Navbar;
