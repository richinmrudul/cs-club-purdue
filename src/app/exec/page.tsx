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
      "Hey! I am Om Janamanchi, a sophomore majoring in Computer Science with minors in Mathematics and Finance. I'm interested in quant finance and software engineering. At Purdue, I am Co-President of the Computer Science Club and Director of Industry Relations of Boiler Quant. I love playing chess, swimming, and binging Netflix! Always happy to chat about tech, finance, or anything in between!",
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
    pronouns: "They/Them/Theirs",
    hometown: "Mountain View, CA",
    linkedin: "https://www.linkedin.com/in/emily-zheng-054890338/",
    email: "zheng849@purdue.edu",
    description:
      "Hello! My name is Emily Zheng, and I'm a second year Computer Science major in Purdue University. Within Computer Science itself, I've always been interested in graphics and game design— and a way to bring stories to life with interactive elements by using both code and creativity. Outside of classwork and agonizing over code, I usually indulge myself with more creative aspirations— such as drawing, creating flyers for different organizations, gaming, or fooling around with friends.",
  },
  {
    name: "Ruthu Shankar",
    role: "Outreach Coordinator",
    img: "/ruthu-headshot.png",
    pronouns: "She/Her/Hers",
    hometown: "Tampa, FL",
    linkedin: "https://www.linkedin.com/in/shankarruthu",
    email: "shanka61@purdue.edu",
    description:
      "Hello! I’m Ruthu Shankar, a sophomore majoring in Computer Science with minors in Math and Management. I serve as President of the Computer Science Women’s Network at Indianapolis and as a College of Science Ambassador. I love traveling, cooking, and trying new things. I’m passionate about building community, expanding my network, and I’m always excited to meet new people and make new friends.",
  },
  {
    name: "Shely Dash",
    role: "Outreach Coordinator",
    img: "/shely-headshot.png",
    hometown: "Edison, NJ",
    pronouns: "She/Her/Hers",
    linkedin: "https://www.linkedin.com/in/shely-dash-bb4b7b320/",
    email: "dash21@purdue.edu",
    description:
    "I like traveling, trying new foods, and discovering new music. I like being outdoors but i’m even more content with a good nap.",
  },
  {
    name: "Ashwati Palanivel",
    role: "Secretary",
    img: "/ashwati-headshot.png",
    hometown: "Dubai, UAE",
    pronouns: "She/Her/Hers",
    linkedin: "https://www.linkedin.com/in/ashwatipalanivel/",
    email: "palaniv1@purdue.edu",
    description:
      "I'm Ashwati Palanivel, a freshman studying CS here at Purdue, aspiring to work with AI/ML and bioinformatics in the future. I'm fascinated by how technology can help us understand living systems better, and I love that CS gives me the tools to explore that intersection. Outside of academics, you'll probably find me crocheting or binge watching a new TV show. Always happy to chat about upcoming tech, movies, or share crochet patterns! And looking forward to meeting you all at our upcoming CS club events!",
  },
  {
    name: "Hana Zoaib",
    role: "Social Media Coordinator",
    img: "/hana-headshot.png",
    pronouns: "She/Her/Hers",
    hometown: "Bolton, MA",
    linkedin: "https://www.linkedin.com/in/hana-zoaib-7233b4345/",
    email: "hzoaib@purdue.edu",
    description:
      "Hi, my name is Hana and I am one of the social media coordinators for CS Club. I am currently a sophomore studying Data Science. Some of my hobbies include reading, trying out new coffee and food spots, and working out.",
  },
  {
    name: "Oluwatomi Oladunni",
    role: "Social Media Coordinator",
    img: "/oluwatomi-headshot.png",
    pronouns: "He/Him/His",
    hometown: "Indianapolis, IN",
    linkedin: "https://www.linkedin.com/in/oluwatomi-oladunni-685708214/",
    email: "ooladunn@purdue.edu",
    description:
      "I am a Computer Science student at Purdue University Indianapolis with a strong interest in software development, data-driven problem solving, and entrepreneurship. I enjoy applying technical skills to real-world challenges while continuously expanding my knowledge in computer science. I am motivated by collaboration, innovation, and building impactful solutions both inside and outside the classroom.",
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
    pronouns: "He/Him/His",
    hometown: "Rawatbhata, Rajasthan, India",
    linkedin: "https://linkedin.com/in/aditya-raj-pundir",
    email: "apundir@purdue.edu",
    description:
      "Hello! My name is Aditya Raj Pundir, and I'm a freshman majoring in Computer Science at Purdue University. I'm passionate about finding innovative solutions to problems, and love playing the Guitar and Badminton! If you ever wanna play together, don't hesitate to reach out!",
  },
  {
    name: "Aryaman Patel",
    role: "Underclassman Rep",
    img: "/aryaman-headshot.png",
    pronouns: "He/Him/His",
    hometown: "Edison, NJ",
    linkedin: "https://www.linkedin.com/in/aryamanp7/",
    email: "pate2794@purdue.edu",
    description:
      "Hi I'm Aryaman, and I am a freshman majoring in CS. Outside of coding, I like rock climbing both in the climbing gym and outside. I've climbed in Yosemite, The Red in Kentucky, and The Gunks in Upstate New York. Besides that I am also a massive Cavs fan with my favorite player being Donovan Mitchell. If you have any questions or want to chat feel free to reach out!",
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
      "Shely Dash",
      "Aryaman Patel",
      "Emily Zheng",
    ].includes(m.name);

  return (
    <div className="relative min-h-screen text-white">
      {/* Header */}
      <div className="text-center pt-28 pb-10">
        <p className="text-[#CFB991] uppercase text-sm tracking-widest mb-2">
          Meet Our
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold uppercase">
          Executive Board
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
                Executive Board
              </Link>
              <Link
                href="/sponsors"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#CFB991] transition"
              >
                Sponsors
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
