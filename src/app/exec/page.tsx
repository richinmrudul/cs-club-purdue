"use client";
import { useState } from "react";
import { Menu, X, Mail, MapPin, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface ExecMember {
  name: string;
  role: string;
  img: string;
  pronouns?: string;
  hometown?: string;
  linkedin?: string;
  email?: string;
  description?: string;
}

const execMembers: ExecMember[] = [
  { name: "Om Janamanchi", role: "Co-President", img: "/exec-placeholder.jpg" },
  { name: "Abha Gupta", role: "Co-President", img: "/exec-placeholder.jpg" },
  { name: "Emily Zheng", role: "Treasurer", img: "/exec-placeholder.jpg" },
  { name: "Ruthu Shankar", role: "Outreach Coordinator", img: "/exec-placeholder.jpg" },
  { name: "Shely Dash", role: "Outreach Coordinator", img: "/exec-placeholder.jpg" },
  { name: "Ashwati Palanivel", role: "Secretary", img: "/exec-placeholder.jpg" },
  { name: "Hana Zoaib", role: "Social Media Coordinator", img: "/exec-placeholder.jpg" },
  { name: "Oluwatomi Oladunni", role: "Social Media Coordinator", img: "/exec-placeholder.jpg" },
  {
    name: "Richin Mrudul",
    role: "Webmaster",
    img: "/richin-headshot.png",
    pronouns: "He/Him/His",
    hometown: "Sacramento, CA",
    linkedin: "https://www.linkedin.com/in/richin-mrudul-227b67261/",
    email: "rmrudul@purdue.edu",
    description:
      "Hi! My name is Richin Mrudul, and I'm a second-year Computer Science student at Purdue University with a concentration in Machine Intelligence. I love using technology to build projects that solve real-world problems and make people’s lives easier. Outside of coding, I enjoy playing guitar and drums, cooking, eating good food, and hanging out with my friends. I’m also a huge Sacramento Kings fan and hope we go to the playoffs soon.",
  },
  { name: "Aditya Raj Pundir", role: "Executive Member", img: "/exec-placeholder.jpg" },
  { name: "Aryaman Patel", role: "Underclassman Rep", img: "/exec-placeholder.jpg" },
];

export default function ExecPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<ExecMember | null>(null);

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* ─── Header ─── */}
      <div className="text-center pt-28 pb-10">
        <p className="text-[#CFB991] uppercase text-sm tracking-widest mb-2">Meet Our</p>
        <h1 className="text-5xl md:text-6xl font-extrabold uppercase">Executive Committee</h1>
      </div>

      {/* ─── Exec Cards ─── */}
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-12 px-8 pb-20">
        {execMembers.map((member, i) => {
          const isRichin = member.name === "Richin Mrudul";
          return (
            <motion.div
              key={member.name}
              onClick={() => isRichin && setSelectedMember(member)}
              className={`bg-[#111] rounded-2xl shadow-md overflow-hidden text-center w-[260px] transition-transform cursor-pointer ${
                isRichin
                  ? "hover:scale-[1.05] hover:shadow-[0_0_25px_rgba(207,185,145,0.3)]"
                  : "hover:scale-[1.02]"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <Image
                src={member.img}
                alt={member.name}
                width={300}
                height={350}
                className={`w-full h-72 ${
                  isRichin ? "object-cover object-top bg-black" : "object-cover"
                }`}
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                <p className="text-gray-400 text-sm">{member.role}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ─── Modal (Only for Richin) ─── */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#0c0c0c] rounded-3xl shadow-lg max-w-5xl w-full flex flex-col md:flex-row overflow-hidden relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              title="Close"
              className="absolute top-4 right-4 text-white hover:text-[#CFB991] transition"
            >
              <X size={28} />
            </button>

            {/* Left: Image */}
            <div className="md:w-1/2 w-full flex items-center justify-center bg-black">
              <Image
                src={selectedMember.img}
                alt={selectedMember.name}
                width={500}
                height={600}
                className="object-contain w-full h-full"
              />
            </div>

            {/* Right: Info */}
            <div className="md:w-1/2 w-full p-8 text-left overflow-y-auto">
              <p className="uppercase text-xs text-[#CFB991] font-semibold tracking-wide mb-2">
                {selectedMember.role}
              </p>
              <h2 className="text-3xl font-bold text-white flex items-center gap-2 mb-3">
                {selectedMember.name}
                {selectedMember.linkedin && (
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    className="bg-white text-black px-1 py-[2px] rounded-sm hover:bg-[#CFB991] hover:text-black transition"
                  >
                    <Linkedin size={20} />
                  </a>
                )}
              </h2>

              {selectedMember.pronouns && (
                <p className="flex items-center text-gray-300 text-sm mb-1">👤 {selectedMember.pronouns}</p>
              )}

              {selectedMember.hometown && (
                <p className="flex items-center text-gray-300 text-sm mb-3">
                  <MapPin size={16} className="mr-2" /> {selectedMember.hometown}
                </p>
              )}

              {selectedMember.email && (
                <p className="flex items-center text-gray-300 text-sm mb-4">
                  <Mail size={16} className="mr-2" />
                  <a href={`mailto:${selectedMember.email}`} className="hover:text-[#CFB991]">
                    {selectedMember.email}
                  </a>
                </p>
              )}

              <p className="text-gray-200 leading-relaxed">{selectedMember.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* ─── Menu Button ─── */}
      <button
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
        title="Open Menu"
        className="fixed top-6 right-6 z-20 bg-black/60 p-3 rounded-md hover:bg-black/80 transition"
      >
        <Menu size={28} />
      </button>

      {/* ─── Sidebar ─── */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300">
          <div
            id="sidebar"
            className="absolute top-0 right-0 h-full w-72 bg-[#0c0c0c]/80 backdrop-blur-xl border-l border-[#CFB991]/30 shadow-[0_0_30px_rgba(207,185,145,0.15)] p-6 text-white transform transition-transform duration-300 ease-in-out"
          >
            <div className="flex justify-between items-center border-b border-[#CFB991]/40 pb-4">
              <h2 className="text-lg font-bold tracking-wide text-[#CFB991]">Menu</h2>
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
