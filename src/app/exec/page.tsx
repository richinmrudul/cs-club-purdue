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
  {
    name: "Om Janamanchi",
    role: "Co-President",
    img: "/om-headshot.jpg",
    pronouns: "He/Him/His",
    hometown: "South Brunswick, NJ",
    linkedin: "https://www.linkedin.com/in/omjanamanchi/",
    email: "ojanaman@purdue.edu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Abha Gupta",
    role: "Co-President",
    img: "/abha-headshot.jpg",
    pronouns: "She/Her/Hers",
    hometown: "Eden Prairie, MN + Buford, GA",
    linkedin: "https://www.linkedin.com/in/abha-gupta-a26a2625b/",
    email: "gupt1107@purdue.edu",
    description:
      "Hello! My name is Abha Gupta, and I am a sophomore in Computer Science with a concentration in Machine Learning and pursuing minors in Math and Finance. I’m passionate about the intersection of computer science, finance, and healthcare — particularly in prosthetic development and personalized genetics research. Outside of academics, I enjoy playing soccer, reading historical fiction, and trying new coffee shops!",
  },
  {
    name: "Emily Zheng",
    role: "Treasurer",
    img: "/emily-headshot.png",
    linkedin: "https://www.linkedin.com/in/emily-zheng-054890338/",
    email: "zheng849@purdue.edu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Ruthu Shankar",
    role: "Outreach Coordinator",
    img: "/ruthu-headshot.png",
    linkedin: "https://www.linkedin.com/in/shankarruthu",
    email: "shanka61@purdue.edu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Shely Dash",
    role: "Outreach Coordinator",
    img: "/exec-placeholder.jpg",
  },
  {
    name: "Ashwati Palanivel",
    role: "Secretary",
    img: "/ashwati-headshot.png",
    linkedin: "https://www.linkedin.com/in/ashwatipalanivel/",
    email: "palaniv1@purdue.edu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Hana Zoaib",
    role: "Social Media Coordinator",
    img: "/hana-headshot.png",
    linkedin: "https://www.linkedin.com/in/hana-zoaib-7233b4345/",
    email: "hzoaib@purdue.edu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Oluwatomi Oladunni",
    role: "Social Media Coordinator",
    img: "/oluwatomi-headshot.png",
    linkedin: "https://www.linkedin.com/in/oluwatomi-oladunni-685708214/",
    email: "ooladunn@purdue.edu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Richin Mrudul",
    role: "Webmaster",
    img: "/richin-headshot.png",
    pronouns: "He/Him/His",
    hometown: "Sacramento, CA",
    linkedin: "https://www.linkedin.com/in/richin-mrudul-227b67261/",
    email: "rmrudul@purdue.edu",
    description:
      "Hi! I’m Richin, a sophomore in Computer Science at Purdue concentrating in Machine Intelligence. I love building full-stack applications and data-driven tools that solve real-world problems. Outside of coding, I play guitar and drums, cook new recipes, and cheer for the Sacramento Kings!",
  },
  {
    name: "Aditya Raj Pundir",
    role: "Executive Member",
    img: "/aditya-headshot.png",
    linkedin: "https://linkedin.com/in/aditya-raj-pundir",
    email: "apundir@purdue.edu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Aryaman Patel",
    role: "Underclassman Rep",
    img: "/aryaman-headshot.png",
    linkedin: "https://www.linkedin.com/in/aryamanp7/",
    email: "pate2794@purdue.edu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function ExecPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<ExecMember | null>(null);

  const isModalEnabled = (m: ExecMember) =>
    [
      "Richin Mrudul",
      "Om Janamanchi",
      "Abha Gupta",
      "Ashwati Palanivel",
      "Aditya Raj Pundir",
      "Hana Zoaib",
      "Oluwatomi Oladunni",
      "Ruthu Shankar",
      "Aryaman Patel",
      "Emily Zheng",
    ].includes(m.name);

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Header */}
      <div className="text-center pt-28 pb-10">
        <p className="text-[#CFB991] uppercase text-sm tracking-widest mb-2">
          Meet Our
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold uppercase">
          Executive Committee
        </h1>
      </div>

      {/* Grid */}
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-12 px-8 pb-20">
        {execMembers.map((member, i) => {
          const clickable = isModalEnabled(member);
          return (
            <motion.div
              key={member.name}
              onClick={() => clickable && setSelectedMember(member)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`bg-[#111] rounded-2xl shadow-md overflow-hidden text-center w-[260px] cursor-pointer transition-transform ${
                clickable
                  ? "hover:scale-[1.05] hover:shadow-[0_0_25px_rgba(207,185,145,0.35)]"
                  : "hover:scale-[1.02]"
              }`}
              title={clickable ? `Open ${member.name}` : undefined}
            >
              <Image
                src={member.img}
                alt={member.name}
                width={300}
                height={350}
                className={`w-full h-72 ${
                  member.name === "Richin Mrudul"
                    ? "object-cover object-top bg-black"
                    : "object-cover"
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

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#0c0c0c] rounded-3xl shadow-2xl max-w-7xl w-full md:h-[72vh] flex flex-col md:flex-row overflow-hidden relative">
            {/* Close */}
            <button
              onClick={() => setSelectedMember(null)}
              title="Close"
              aria-label="Close modal"
              className="absolute top-4 right-4 text-white hover:text-[#CFB991] transition"
            >
              <X size={28} />
            </button>

            {/* Left: Image */}
            <div className="md:w-1/2 w-full flex items-center justify-center bg-black">
              <Image
                src={selectedMember.img}
                alt={selectedMember.name}
                width={1000}
                height={1200}
                className={`w-full h-full ${
                  selectedMember.name === "Richin Mrudul"
                    ? "object-contain object-top"
                    : "object-cover object-center"
                }`}
                priority
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
                    className="inline-flex items-center justify-center bg-white text-black rounded-sm px-1 py-[2px] hover:bg-[#CFB991] hover:text-black transition"
                  >
                    <Linkedin size={20} />
                  </a>
                )}
              </h2>

              {selectedMember.pronouns && (
                <p className="flex items-center text-gray-300 text-sm mb-1">
                  👤 {selectedMember.pronouns}
                </p>
              )}

              {selectedMember.hometown && (
                <p className="flex items-center text-gray-300 text-sm mb-2">
                  <MapPin size={16} className="mr-2" />{" "}
                  {selectedMember.hometown}
                </p>
              )}

              {selectedMember.email && (
                <p className="flex items-center text-gray-300 text-sm mb-4">
                  <Mail size={16} className="mr-2" />
                  <a
                    href={`mailto:${selectedMember.email}`}
                    className="hover:text-[#CFB991]"
                  >
                    {selectedMember.email}
                  </a>
                </p>
              )}

              <p className="text-gray-200 leading-relaxed">
                {selectedMember.description}
              </p>
            </div>
          </div>
        </div>
      )}

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
            className="absolute top-0 right-0 h-full w-72 bg-[#0c0c0c]/80 backdrop-blur-xl border-l border-[#CFB991]/30 shadow-[0_0_30px_rgba(207,185,145,0.15)] p-6 text-white"
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
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#CFB991] transition"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#CFB991] transition"
              >
                About
              </Link>
              <Link
                href="/events"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#CFB991] transition"
              >
                Events
              </Link>
              <Link
                href="/exec"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#CFB991] transition"
              >
                Executive Committee
              </Link>
              <Link
                href="/join"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#CFB991] transition"
              >
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
