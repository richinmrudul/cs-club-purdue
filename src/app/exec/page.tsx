"use client";
import { useState } from "react";
import Image from "next/image";
import { X, Linkedin } from "lucide-react";

type Member = {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
};

const members: Member[] = [
  { name: "Om Janamanchi", role: "Co-President", image: "/exec-placeholder.jpg", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra, nisl id imperdiet dictum, enim urna aliquet massa, at congue nulla mauris sit amet lacus." },
  { name: "Abha Gupta", role: "Co-President", image: "/exec-placeholder.jpg", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat sem ut lacus euismod, sit amet iaculis lorem dapibus." },
  { name: "Emily Zheng", role: "Treasurer", image: "/exec-placeholder.jpg", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a erat vitae sapien consequat tincidunt sed sit amet justo." },
  { name: "Ruthu Shankar", role: "Outreach Coordinator", image: "/exec-placeholder.jpg", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac eros eu justo faucibus ultricies." },
  { name: "Shely Dash", role: "Outreach Coordinator", image: "/exec-placeholder.jpg", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet lacus vel nibh feugiat, vitae porttitor magna aliquam." },
  { name: "Ashwati Palanivel", role: "Secretary", image: "/exec-placeholder.jpg", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit lorem non tortor placerat, sit amet ornare leo volutpat." },
  { name: "Hana Zoaib", role: "Social Media Coordinator", image: "/exec-placeholder.jpg", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed nisl at nunc aliquam facilisis." },
  { name: "Oluwatomi Oladunni", role: "Social Media Coordinator", image: "/exec-placeholder.jpg", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut velit eget lectus cursus efficitur." },
  { name: "Richin Mrudul", role: "Webmaster", image: "/exec-placeholder.jpg", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula elit in massa eleifend, sed ultricies mi viverra." },
  { name: "Aditya Raj Pundir", role: "Executive Member", image: "/exec-placeholder.jpg", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis tortor in eros eleifend, a tincidunt sapien tempus." },
  { name: "Aryaman Patel", role: "Underclassman Representative", image: "/exec-placeholder.jpg", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo tellus nec odio rhoncus tempor." },
];

export default function ExecPage() {
  const [selected, setSelected] = useState<Member | null>(null);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center pt-24 pb-16 px-6">
      {/* Hero Header */}
      <div className="text-center mb-12">
        <p className="text-[#CFB991] uppercase tracking-widest text-sm mb-2">
          Meet Our
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold uppercase">
          Executive Committee
        </h1>
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-6xl">
        {members.map((m) => (
          <div
            key={m.name}
            onClick={() => setSelected(m)}
            className="cursor-pointer bg-[#111]/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#CFB991]/20 hover:border-[#CFB991]/60 transition duration-300 group"
          >
            <div className="relative w-full h-80">
              <Image
                src={m.image}
                alt={m.name}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold text-white">{m.name}</h2>
              <p className="text-[#CFB991]">{m.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4"
          onClick={() => setSelected(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0c0c0c]/90 border border-[#CFB991]/40 rounded-2xl shadow-xl max-w-4xl w-full overflow-hidden flex flex-col md:flex-row"
          >
            <div className="relative w-full md:w-1/2 h-80 md:h-auto">
              <Image
                src={selected.image}
                alt={selected.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center w-full md:w-1/2">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[#CFB991] text-sm uppercase tracking-wide font-semibold">
                    {selected.role}
                  </p>
                  <h2 className="text-3xl font-bold mt-1">{selected.name}</h2>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                  className="text-gray-400 hover:text-white transition"
                >
                  <X size={24} />
                </button>
              </div>
              {selected.linkedin && (
                <a
                  href={selected.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 mt-3 text-[#CFB991] hover:text-white transition"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              )}
              <p className="mt-4 text-gray-300 leading-relaxed text-sm md:text-base">
                {selected.bio}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
