"use client";

import { useState } from "react";
import { Menu, X, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface Sponsor {
  name: string;
  logo?: string;
  website?: string;
  tier?: "Platinum" | "Gold" | "Silver" | "Bronze";
  description?: string;
}

const sponsors: Sponsor[] = [
  {
    name: "Sponsor 1",
    logo: "/Sponsor.png",
  },
  {
    name: "Sponsor 2",
    logo: "/Sponsor1.png",
  },
  {
    name: "Sponsor 3",
    logo: "/Sponsor2.png",
  },
  {
    name: "Sponsor 4",
    logo: "/Sponsor3.png",
  },
  {
    name: "Sponsor 5",
    logo: "/Sponsor4.png",
  },
  {
    name: "Sponsor 6",
    logo: "/Sponsor5.png",
  },
  {
    name: "Sponsor 7",
    logo: "/Sponsor6.png",
  },
  {
    name: "Sponsor 8",
    logo: "/Sponsor7.png",
  },
  {
    name: "Sponsor 9",
    logo: "/Sponsor8.png",
  },
  {
    name: "Sponsor 10",
    logo: "/Sponsor9.jpeg",
  },
  {
    name: "Sponsor 11",
    logo: "/Sponsor10.png",
  },
  {
    name: "Sponsor 12",
    logo: "/Sponsor11.png",
  },
  {
    name: "Sponsor 13",
    logo: "/Sponsor12.png",
  },
  {
    name: "Sponsor 14",
    logo: "/Sponsor13.jpg",
  },
  {
    name: "Sponsor 15",
    logo: "/Sponsor14.png",
  },
  {
    name: "Sponsor 16",
    logo: "/Sponsor15.jpeg",
  },
  {
    name: "Sponsor 17",
    logo: "/Sponsor16.png",
  },
  {
    name: "Sponsor 18",
    logo: "/Sponsor17.png",
  },
];

export default function SponsorsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-white">
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
          Our Sponsors
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-gray-300 max-w-2xl mx-auto mt-4"
        >
          We're grateful to our sponsors who help make our events, workshops, and
          community initiatives possible. Their support enables us to provide
          valuable experiences for CS students at Purdue.
        </motion.p>
      </section>

      {/* Current Sponsors */}
      <section className="mt-20 px-6 md:px-16 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#CFB991] mb-12 text-center drop-shadow-[0_0_20px_rgba(207,185,145,0.3)]"
        >
          Sponsors & Partners
        </motion.h2>
        {sponsors.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center py-16"
          >
            <p className="text-gray-400 text-lg">
              We're actively seeking sponsors to support our mission. Interested in
              partnering with us?
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6"
            >
              <a
                href="mailto:csclubin@purdue.edu"
                className="inline-block px-6 py-3 bg-[#CFB991] text-black font-semibold rounded-full hover:bg-[#e1c98a] transition-all"
              >
                Contact Us
              </a>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto"
          >
            {sponsors.map((sponsor, i) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(207,185,145,0.15)",
                }}
                className="bg-white rounded-xl p-6 shadow-md transition-all flex items-center justify-center min-h-[120px]"
              >
                {sponsor.logo ? (
                  <div className="relative w-full h-20">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <h3 className="text-lg font-bold text-gray-800 text-center">
                    {sponsor.name}
                  </h3>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>

      {/* Why Sponsor Section */}
      <section className="mt-28 px-6 md:px-16 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#CFB991] mb-10 text-center drop-shadow-[0_0_20px_rgba(207,185,145,0.3)]"
        >
          Why Sponsor Us?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-[#111]/70 backdrop-blur-md border border-[#CFB991]/20 rounded-2xl p-8 shadow-lg">
            <ul className="space-y-4 text-lg text-gray-300">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <span className="text-[#CFB991] mr-3 text-xl">•</span>
                <span>
                  Connect directly with motivated CS students actively seeking
                  internships, full-time positions, and career opportunities at Purdue
                  University.
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <span className="text-[#CFB991] mr-3 text-xl">•</span>
                <span>
                  Build meaningful relationships with future tech leaders through
                  workshops, events, and exclusive networking opportunities.
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <span className="text-[#CFB991] mr-3 text-xl">•</span>
                <span>
                  Support student success by enabling technical workshops, hackathons,
                  and educational programming that develops the next generation of
                  software engineers.
                </span>
              </motion.li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Contact CTA */}
      <section className="mt-28 pb-24 text-center relative z-50 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-[#111]/70 backdrop-blur-md border border-[#CFB991]/20 rounded-3xl p-12 max-w-3xl mx-auto shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-4">Interested in Sponsoring?</h2>
          <p className="text-gray-300 mb-8">
            Let's discuss how we can create a partnership that benefits both your
            organization and our students.
          </p>
          <motion.div
            whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(207,185,145,0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href="mailto:csclubin@purdue.edu"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#CFB991] text-black font-semibold rounded-full hover:bg-[#e1c98a] transition-all text-lg"
            >
              <Mail size={20} />
              Contact Us
            </a>
          </motion.div>
          <p className="text-gray-400 text-sm mt-4">
            Email:{" "}
            <a
              href="mailto:csclubin@purdue.edu"
              className="text-[#CFB991] hover:underline"
            >
              csclubin@purdue.edu
            </a>
            {" or "}
            <a
              href="mailto:ojanaman@purdue.edu"
              className="text-[#CFB991] hover:underline"
            >
              ojanaman@purdue.edu
            </a>
          </p>
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

