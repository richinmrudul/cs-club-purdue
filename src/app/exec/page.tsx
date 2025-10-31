"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const execMembers = [
  { name: "Om Janamanchi", role: "Co-President", img: "/lebron.jpg" },
  { name: "Abha Gupta", role: "Co-President", img: "/lebron.jpg" },
  { name: "Emily Zheng", role: "Treasurer", img: "/lebron.jpg" },
  { name: "Ruthu Shankar", role: "Outreach Coordinator", img: "/lebron.jpg" },
  { name: "Shely Dash", role: "Outreach Coordinator", img: "/lebron.jpg" },
  { name: "Ashwati Palanivel", role: "Secretary", img: "/lebron.jpg" },
  { name: "Hana Zoaib", role: "Social Media Coordinator", img: "/lebron.jpg" },
  { name: "Oluwatomi Oladunni", role: "Social Media Coordinator", img: "/lebron.jpg" },
  { name: "Richin Mrudul", role: "Webmaster", img: "/lebron.jpg" },
  { name: "Aditya Raj Pundir", role: "Executive Member", img: "/lebron.jpg" },
  { name: "Aryaman Patel", role: "Underclassman Rep", img: "/lebron.jpg" },
];

export default function ExecPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* ─── Header ─── */}
      <div className="text-center pt-28 pb-10">
        <p className="text-[#CFB991] uppercase text-sm tracking-widest mb-2">Meet Our</p>
        <h1 className="text-5xl md:text-6xl font-extrabold uppercase">Executive Committee</h1>
      </div>

      {/* ─── Exec Grid ─── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8 pb-20 justify-items-center">
        {execMembers.map((member) => (
          <div
            key={member.name}
            className="bg-[#111] rounded-2xl shadow-md overflow-hidden text-center transition-transform hover:scale-[1.03]"
          >
            <Image
              src={member.img}
              alt={member.name}
              width={300}
              height={350}
              className="object-cover w-full h-72"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-white">{member.name}</h3>
              <p className="text-gray-400 text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ─── Menu Button ─── */}
      <button
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
        className="fixed top-6 right-6 z-20 bg-black/60 p-3 rounded-md hover:bg-black/80 transition"
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
              <Link href="/exec" onClick={() => setMenuOpen(false)} className="hover:text-[#CFB991] transition">
                Executive Committee
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
