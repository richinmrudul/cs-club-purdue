"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* ─── Hero Background Image ─── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg" // add a hero.jpg image under /public
          alt="Purdue campus"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* ─── Hero Content ─── */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-screen px-6">
        <h1 className="text-6xl font-extrabold tracking-tight uppercase mb-4">
          Purdue CS Club
        </h1>
        <p className="max-w-2xl text-lg text-gray-200">
          Inspiring collaboration, innovation, and growth among Purdue’s Computer Science community.
        </p>
      </div>

      {/* ─── Hamburger Icon ─── */}
      <button
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
        className="absolute top-6 right-6 z-20 bg-black/60 p-3 rounded-md hover:bg-black/80 transition"
      >
        <Menu size={28} />
      </button>

      {/* ─── Sidebar Menu ─── */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-neutral-900/95 text-white shadow-lg z-30 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-4 text-lg">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-purdueGold"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-purdueGold"
          >
            About
          </Link>
          <Link
            href="/events"
            onClick={() => setMenuOpen(false)}
            className="hover:text-purdueGold"
          >
            Events
          </Link>
          <Link
            href="/projects"
            onClick={() => setMenuOpen(false)}
            className="hover:text-purdueGold"
          >
            Projects
          </Link>
          <Link
            href="/join"
            onClick={() => setMenuOpen(false)}
            className="hover:text-purdueGold"
          >
            Join
          </Link>
        </nav>

        <div className="absolute bottom-6 w-full text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Purdue CS Club
        </div>
      </div>
    </div>
  );
}
