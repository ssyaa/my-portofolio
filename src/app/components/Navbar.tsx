"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent p-4 font-poppins shadow-md dark:shadow-glow">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-galaxyPurple dark:text-white drop-shadow-glow transition-all"
        >
          My Portfolio
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-galaxyPurple dark:text-white text-2xl"
        >
          ☰
        </button>

        <ul
          className={`md:flex gap-6 ${
            isOpen ? "block" : "hidden"
          } md:block mt-4 md:mt-0 transition-all`}
        >
          <li>
            <Link
              href="/about"
              className="text-gray-600 dark:text-white hover:text-galaxyPurple transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/experience"
              className="text-gray-600 dark:text-white hover:text-galaxyPurple transition"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-gray-600 dark:text-white hover:text-galaxyPurple transition"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-600 dark:text-white hover:text-galaxyPurple transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
