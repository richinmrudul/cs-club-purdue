"use client";

import { useState } from "react";
import { Menu, X, Instagram, MessageCircle, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function JoinPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-white pb-20">
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(207,185,145,0.08)_0%,transparent_70%)]"
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header */}
      <div className="relative text-center pt-28 px-6 z-10">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[#CFB991] uppercase text-sm tracking-[0.25em] mb-2"
        >
          Purdue CS Club
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-6xl font-extrabold uppercase bg-gradient-to-r from-[#CFB991] to-white bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(207,185,145,0.3)]"
        >
          Join the Club
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mt-4"
        >
          Be part of Purdue's computer science community — connect, learn, and
          grow with fellow students passionate about technology.
        </motion.p>
      </div>

      {/* Join Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="relative flex flex-col md:flex-row items-center justify-center gap-6 mt-12 px-6 z-10"
      >
        <motion.a
          href="https://boilerlink.purdue.edu/organization/computerscienceclub"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(207,185,145,0.6)" }}
          className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#CFB991] text-black font-semibold text-lg hover:bg-[#e1c98a] transition-all"
        >
          <LinkIcon size={20} /> Join on BoilerLink
        </motion.a>

        <motion.a
          href="https://discord.gg/nnXBU4ay"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(88,101,242,0.6)" }}
          className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#5865F2] text-white font-semibold text-lg hover:bg-[#6774f8] transition-all"
        >
          <MessageCircle size={22} /> Join our Discord
        </motion.a>

        <motion.a
          href="https://www.instagram.com/csclub_purdueindy/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(255,120,180,0.6)" }}
          className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold text-lg hover:opacity-90 transition-all"
        >
          <Instagram size={22} /> Follow us on Instagram
        </motion.a>
      </motion.div>

      {/* Why Join Section */}
      <section className="relative mt-20 px-8 md:px-16 text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="text-3xl font-bold text-[#CFB991] mb-10 drop-shadow-[0_0_20px_rgba(207,185,145,0.3)]"
        >
          Why Join Purdue CS Club?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 text-gray-300 max-w-6xl mx-auto">
          {[
            {
              emoji: "🤝",
              title: "Community",
              desc: "Meet hundreds of CS students and collaborate on fun, meaningful projects.",
            },
            {
              emoji: "💡",
              title: "Growth",
              desc: "Attend workshops, tech talks, and networking events to grow your skills and career.",
            },
            {
              emoji: "🚀",
              title: "Opportunities",
              desc: "Network with peers, alumni, and companies through exclusive CS Club events.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(207,185,145,0.2)" }}
              className="bg-[#111]/70 backdrop-blur-md border border-[#CFB991]/20 rounded-2xl p-8 shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {card.emoji} {card.title}
              </h3>
              <p>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Subtle gold glow at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#CFB991]/10 to-transparent pointer-events-none" />

      {/* Menu Button */}
      <button
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
        title="Open Menu"
        className="fixed top-6 right-6 z-20 bg-black/60 p-3 rounded-md hover:bg-black/80 transition"
      >
        <Menu size={28} />
      </button>

      {/* Sidebar */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40">
          <div
            id="sidebar"
            className="absolute top-0 right-0 h-full w-72 bg-[#0c0c0c]/90 backdrop-blur-xl border-l border-[#CFB991]/30 shadow-[0_0_30px_rgba(207,185,145,0.15)] p-6 text-white"
          >
            <div className="flex justify-between items-center border-b border-[#CFB991]/40 pb-4">
              <h2 className="text-lg font-bold tracking-wide text-[#CFB991]">
                Menu
              </h2>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                title="Close Menu"
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
                Executive Board
              </Link>
              <Link href="/sponsors" onClick={() => setMenuOpen(false)} className="hover:text-[#CFB991] transition">
                Sponsors
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
