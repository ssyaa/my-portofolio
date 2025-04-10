"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-transparent p-4 font-poppins">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-600">
            My Portfolio
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            ☰
            </button>
            <ul className={`md:flex gap-6 ${isOpen ? "block" : "hidden"} md:block`}>
            <li>
                <Link href="/about" className="hover:text-gray-600 text-gray-600">About</Link>
            </li>
            <li>
                <Link href="/projects" className="hover:text-gray-600 text-gray-600">Experience</Link>
            </li>
            <li>
                <Link href="/projects" className="hover:text-gray-600 text-gray-600">Projects</Link>
            </li>
            <li>
                <Link href="/contact" className="hover:text-gray-600 text-gray-600">Contact</Link>
            </li>
            </ul>
        </div>
        </nav>
    );
};

export default Navbar;
