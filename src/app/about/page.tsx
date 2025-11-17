"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const images = Array.from({ length: 11 }, (_, i) => `/aboutpage${i + 1}.jpg`);

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Subtle background glow */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(207,185,145,0.08)_0%,transparent_70%)]"
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero Section */}
      <section className="relative text-center pt-28 px-6 z-10">
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
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-gray-300 max-w-2xl mx-auto mt-4"
        >
          The Purdue Computer Science Club is a student-run community fostering
          collaboration, learning, and innovation. We host technical workshops,
          social events, and opportunities for students to grow both personally
          and professionally.
        </motion.p>
      </section>

      {/* Scrolling Photos */}
      <section className="mt-20 overflow-hidden relative z-10">
        <div className="space-y-8">
          {/* Row 1 */}
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          >
            {[...images, ...images].map((src, i) => (
              <motion.div
                key={`row1-${i}`}
                whileHover={{ scale: 1.05 }}
                className="relative w-72 h-48 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg"
              >
                <Image src={src} alt="Club Event" fill className="object-cover" />
              </motion.div>
            ))}
          </motion.div>

          {/* Row 2 */}
          <motion.div
            className="flex gap-6"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {[...images, ...images].map((src, i) => (
              <motion.div
                key={`row2-${i}`}
                whileHover={{ scale: 1.05 }}
                className="relative w-72 h-48 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg"
              >
                <Image src={src} alt="Club Event" fill className="object-cover" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mt-28 px-6 md:px-16 text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#CFB991] mb-10 drop-shadow-[0_0_20px_rgba(207,185,145,0.3)]"
        >
          Our Mission
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 text-gray-300 max-w-6xl mx-auto">
          {[
            {
              emoji: "💻",
              title: "Learn",
              desc: "From coding workshops to guest speakers, we create spaces to expand technical knowledge.",
            },
            {
              emoji: "🤝",
              title: "Connect",
              desc: "We bring students together through socials, collaborations, and mentorship opportunities.",
            },
            {
              emoji: "🚀",
              title: "Grow",
              desc: "We empower members to apply skills, build projects, and prepare for their future careers.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
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

      {/* What We Offer Section */}
      <section className="mt-24 px-6 md:px-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#CFB991] mb-10 drop-shadow-[0_0_20px_rgba(207,185,145,0.3)]"
        >
          What We Offer
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
          {[
            {
              title: "Technical Workshops",
              description: "Hands-on coding sessions covering everything from web development to machine learning. Learn practical skills and build real projects with guidance from experienced members.",
            },
            {
              title: "Networking Events",
              description: "Connect with industry professionals, alumni, and fellow students. Build your professional network and discover opportunities in tech through our mixers and career fairs.",
            },
            {
              title: "Collaborative Projects",
              description: "Work on team projects, hackathons, and open-source contributions. Gain real-world experience while building your portfolio alongside passionate developers.",
            },
            {
              title: "Community & Support",
              description: "Join a supportive community of students at all skill levels. Get help with coursework, career advice, and find study groups or coding partners.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(207,185,145,0.15)" }}
              className="bg-[#111]/70 backdrop-blur-md border border-[#CFB991]/20 rounded-2xl p-6 shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-[#CFB991] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-28 pb-24 text-center relative z-50">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6"
        >
          Ready to Be Part of the CS Club?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="inline-block"
        >
          <motion.div
            whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(207,185,145,0.6)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/join"
              className="inline-block px-8 py-3 bg-[#CFB991] text-black font-semibold rounded-full hover:bg-[#e1c98a] transition-all text-lg cursor-pointer"
            >
              Join Us
            </Link>
          </motion.div>
        </motion.div>
      </section>

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
          <div className="absolute top-0 right-0 h-full w-72 bg-[#0c0c0c]/90 backdrop-blur-xl border-l border-[#CFB991]/30 p-6 text-white">
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
