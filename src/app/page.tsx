"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const fullText = "PURDUE CS CLUB";
    let i = 0;
    let deleting = false;
    let pause = false;

    const type = () => {
      if (pause) return; // Wait during pause period

      if (!deleting) {
        if (i < fullText.length) {
          setText(fullText.slice(0, i + 1));
          i++;
        } else {
          pause = true;
          setTimeout(() => {
            pause = false;
            deleting = true;
          }, 1000); // Pause before deleting
        }
      } else {
        if (i > 0) {
          setText(fullText.slice(0, i - 1));
          i--;
        } else {
          pause = true;
          setTimeout(() => {
            pause = false;
            deleting = false;
          }, 800); // Pause before retyping
        }
      }
    };

    const interval = setInterval(type, deleting ? 80 : 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* ─── Background ─── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/purdue-indy.jpg"
          alt="Purdue University Indianapolis"
          fill
          className="object-cover brightness-80"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* ─── Hero Section ─── */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-screen px-6">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight uppercase mb-6 drop-shadow-lg flex justify-center items-center">
          {text}
          {showCursor && (
            <span className="border-r-4 border-[#CFB991] animate-pulse ml-1" />
          )}
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-gray-200 drop-shadow">
          Inspiring collaboration, innovation, and growth among Purdue’s Computer Science community.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/join"
            className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-300 transition"
          >
            Join the Club
          </Link>
          <Link
            href="https://cshackindy.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition"
          >
            Learn More about HackIndy
          </Link>
        </div>
      </div>

      {/* ─── Menu Button ─── */}
      <button
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
        className="absolute top-6 right-6 z-20 bg-black/60 p-3 rounded-md hover:bg-black/80 transition"
      >
        <Menu size={28} />
      </button>

      {/* ─── Sidebar ─── */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-opacity duration-300">
          <div
            id="sidebar"
            className="absolute top-0 right-0 h-full w-72 bg-[#0c0c0c]/80 backdrop-blur-xl border-l border-[#CFB991]/30 shadow-[0_0_30px_rgba(207,185,145,0.15)] p-6 text-white transform transition-transform duration-300 ease-in-out"
          >
            <div className="flex justify-between items-center border-b border-[#CFB991]/40 pb-4">
              <h2 className="text-lg font-bold tracking-wide text-[#CFB991]">Menu</h2>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="hover:text-[#CFB991] transition"
              >
                <X size={26} />
              </button>
            </div>

            <nav className="flex flex-col mt-6 space-y-5 text-lg font-medium">
              <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-[#CFB991] transition">
                Home
              </Link>
              <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-[#CFB991] transition">
                About
              </Link>
              <Link href="/events" onClick={() => setMenuOpen(false)} className="hover:text-[#CFB991] transition">
                Events
              </Link>
              <Link
                href="https://cshackindy.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#CFB991] transition"
              >
                HackIndy
              </Link>
              <Link href="/join" onClick={() => setMenuOpen(false)} className="hover:text-[#CFB991] transition">
                Join
              </Link>
            </nav>

            <div className="absolute bottom-8 left-0 w-full text-center text-sm text-gray-300 border-t border-[#CFB991]/30 pt-4">
              © {new Date().getFullYear()} Purdue CS Club
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
