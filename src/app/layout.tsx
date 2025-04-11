// src/app/layout.tsx
'use client'; // penting buat pakai hook & interaktif

import { useEffect, useState } from "react";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Cek preferensi awal dari localStorage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <html lang="en">
      <body className="transition-colors duration-500 bg-white text-black dark:bg-black dark:text-white bg-no-repeat bg-cover dark:bg-[url('/stars.svg')]">
        <Navbar />

        {/* Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 z-50 px-3 py-2 bg-slate-800 dark:bg-white text-white dark:text-black rounded shadow-lg"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

        {children}

        <Footer />
      </body>
    </html>
  );
}
