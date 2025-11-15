"use client";

import { useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

type Tag =
  | "Social"
  | "Technical"
  | "Workshop"
  | "Professional"
  | "Club"
  | "Outreach";

interface EventItem {
  title: string;
  date: string;
  location?: string;
  description?: string;
  tag?: Tag;
  link?: string;
}

const allEvents: EventItem[] = [
  // ---- Fall 2025 ----
  {
    title: "B-Involved Fair",
    date: "2025-08-27 15:00",
    location: "Boiler Park",
    description: "Meet us at the campus-wide org fair where we'll be showcasing what CS Club has to offer. Stop by our booth to learn about our events, workshops, and community, and meet current members who can answer your questions about joining.",
    tag: "Outreach",
  },
  {
    title: "CS Club Callout",
    date: "2025-09-02 18:00",
    location: "CE 406",
    description: "Kickoff meeting for the year where we'll introduce the executive board, outline our plans for the semester, and give you a chance to meet fellow CS students. This is the perfect opportunity to get involved and see what CS Club is all about.",
    tag: "Club",
  },
  {
    title: "CS Club Callout (Second Date)",
    date: "2025-09-09 15:00",
    location: "SL 165",
    description: "Alternate time to meet the club and learn more about our upcoming events, workshops, and social activities. If you missed the first callout, this is your chance to catch up and connect with the CS Club community.",
    tag: "Club",
  },
  {
    title: "Board Game Night",
    date: "2025-09-18 18:00",
    location: "CE 405",
    description: "Chill evening of games and hanging out with fellow CS students. We'll have a variety of board games available, from strategy games to party games, so there's something for everyone. Come unwind, make new friends, and enjoy some friendly competition.",
    tag: "Social",
  },
  {
    title: "Resume + Mock Interview Workshop",
    date: "2025-09-30 18:00",
    location: "CE 409",
    description: "Practice interviews and get resume feedback from experienced members and industry professionals. We'll cover common interview questions, best practices for technical interviews, and how to tailor your resume for CS positions. Bring your resume for personalized feedback.",
    tag: "Workshop",
  },
  {
    title: "Career Roadmap Planning",
    date: "2025-10-07 18:00",
    location: "SL 112",
    description: "Plan your path through CS and beyond with guidance on internships, research opportunities, and career trajectories. We'll discuss different specializations, how to build your portfolio, and strategies for landing your first tech job or internship.",
    tag: "Professional",
  },
  {
    title: "Halloween Lab Crawl",
    date: "2025-10-30 17:00",
    location: "SL 239",
    description: "Spooky lab crawl + demos featuring cool CS research projects and labs around campus. Dress up in your best costume and explore the exciting work happening in Purdue's computer science department while enjoying some Halloween treats.",
    tag: "Social",
  },
  {
    title: "Game Dev + AI Agent Workshop",
    date: "2025-11-06 18:00",
    description: "Hands-on intro to simple agents in games where you'll learn the basics of AI behavior in game development. We'll cover pathfinding, decision-making algorithms, and how to implement intelligent NPCs. No prior game dev experience required.",
    tag: "Technical",
  },
  {
    title: "Pie an Officer",
    date: "2025-11-20 18:00",
    description: "Fundraiser & fun social event where you can pie your favorite (or least favorite) executive board member in the face. All proceeds go to supporting CS Club activities and events throughout the year. Come for the laughs and stay for the community.",
    tag: "Social",
  },
  {
    title: "Breakfast at Midnight",
    date: "2025-12-09 00:00",
    description: "Finals-week tradition — late-night breakfast to help fuel your study sessions. We'll provide pancakes, eggs, bacon, and other breakfast favorites to keep you going through those long study nights. Take a break from coding and refuel with us.",
    tag: "Social",
  },

  // ---- Spring 2026 ----
  {
    title: "Gingerbread House Building Competition (w/ PSUB)",
    date: "2026-01-20 18:00",
    description: "Build the best gingerbread house — prizes & vibes in this collaborative event with PSUB. Show off your creative (or engineering) skills as you compete for the most impressive gingerbread creation. All materials provided, just bring your creativity.",
    tag: "Social",
  },
  {
    title: "Aerospace Workshop",
    date: "2026-02-03 18:00",
    description: "Aerospace themed technical session exploring the intersection of computer science and aerospace engineering. Learn about flight simulation, autonomous systems, and the software that powers modern aircraft. Perfect for students interested in both CS and aerospace.",
    tag: "Technical",
  },
  {
    title: "Valentine's Dating Show",
    date: "2026-02-13 18:00",
    description:
      "Fun collab with CSWN, Music Club, JSAI, KSAPI, PUTSAI — games & show featuring a lighthearted dating show format with games and entertainment. Come watch or participate in this fun event that brings together multiple student organizations for a memorable evening.",
    tag: "Social",
  },
  {
    title: "Pot Painting",
    date: "2026-04-07 18:00",
    description: "Arts & crafts night — paint a pot, take it home. Unwind from coding with some creative expression as you design and paint your own plant pot. All supplies provided, and you get to keep your creation. Perfect for destressing during the busy semester.",
    tag: "Social",
  },
  {
    title: "Liberty Mutual Workshop",
    date: "2026-04-21 18:00",
    description:
      "Interactive technical workshop (not recruiting-focused) where you'll learn about real-world software engineering practices and technologies used in industry. Get hands-on experience with tools and techniques that professionals use every day in their work.",
    tag: "Technical",
  },
];

function tagClasses(tag?: Tag) {
  switch (tag) {
    case "Social":
      return "text-purple-300 ring-1 ring-purple-400/40 bg-purple-950/30";
    case "Technical":
      return "text-blue-300 ring-1 ring-blue-400/40 bg-blue-950/30";
    case "Workshop":
    case "Professional":
      return "text-[#CFB991] ring-1 ring-[#CFB991]/40 bg-[#1b1a16]/70";
    default:
      return "text-[#CFB991] ring-1 ring-[#CFB991]/40 bg-[#1b1a16]/70";
  }
}

const TAGS: ("All" | Tag)[] = [
  "All",
  "Social",
  "Technical",
  "Workshop",
  "Professional",
  "Club",
  "Outreach",
];

function byDateAsc(a: EventItem, b: EventItem) {
  return new Date(a.date).getTime() - new Date(b.date).getTime();
}

export default function EventsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [tagFilter, setTagFilter] = useState<"All" | Tag>("All");

  const today = new Date("2025-11-02");

  const { past, upcoming } = useMemo(() => {
    const past: EventItem[] = [];
    const upcoming: EventItem[] = [];
    for (const e of allEvents) {
      const d = new Date(e.date);
      (d.getTime() < today.getTime() ? past : upcoming).push(e);
    }
    past.sort(byDateAsc);
    upcoming.sort(byDateAsc);
    return { past, upcoming };
  }, []);

  const filterFn = (e: EventItem) =>
    tagFilter === "All" ? true : e.tag === tagFilter;

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Header */}
      <div className="text-center pt-28 px-6">
        <p className="text-[#CFB991] uppercase text-xs tracking-[0.25em] mb-2">
          Purdue CS Club
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase">
          2025–2026 Events
        </h1>

        {/* Tag Filter Pills */}
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          {TAGS.map((t) => (
            <motion.button
              key={t}
              onClick={() => setTagFilter(t)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition ring-1 ring-white/10 ${
                tagFilter === t
                  ? "bg-[#CFB991] text-black scale-105 shadow-[0_0_10px_rgba(207,185,145,0.4)]"
                  : "bg-[#111] text-gray-200 hover:bg-[#1a1a1a]"
              }`}
              aria-pressed={tagFilter === t}
            >
              {t}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <section className="px-6 md:px-10 lg:px-16 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#CFB991] mb-6">
          Upcoming Events
        </h2>
        {upcoming.filter(filterFn).length === 0 ? (
          <p className="text-gray-400">No upcoming events match this filter.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {upcoming.filter(filterFn).map((event, i) => (
              <motion.div
                key={`${event.title}-${event.date}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-[#111] rounded-2xl p-6 shadow-md hover:shadow-[0_0_20px_rgba(207,185,145,0.25)] transition"
              >
                <div className="flex items-center justify-between gap-3 mb-3">
                  <h3 className="text-xl font-semibold text-white">
                    {event.title}
                  </h3>
                  {event.tag && (
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${tagClasses(
                        event.tag
                      )}`}
                    >
                      {event.tag}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-400 mb-1">
                  {new Date(event.date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                {event.location && (
                  <p className="text-sm text-gray-400 mb-2">
                    📍 {event.location}
                  </p>
                )}
                {event.description && (
                  <p className="text-gray-300 mb-3">{event.description}</p>
                )}
                {event.link && (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#CFB991] text-sm font-medium hover:underline"
                  >
                    Learn more →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Past Events */}
      <section className="px-6 md:px-10 lg:px-16 pb-24">
        <h2 className="text-2xl md:text-3xl font-bold text-[#CFB991] mb-6">
          Past Events
        </h2>
        {past.filter(filterFn).length === 0 ? (
          <p className="text-gray-400">No past events match this filter.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {past.filter(filterFn).map((event, i) => (
              <motion.div
                key={`${event.title}-${event.date}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-[#0f0f0f] rounded-2xl p-6 border border-white/5"
              >
                <div className="flex items-center justify-between gap-3 mb-3">
                  <h3 className="text-xl font-semibold text-white">
                    {event.title}
                  </h3>
                  {event.tag && (
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${tagClasses(
                        event.tag
                      )}`}
                    >
                      {event.tag}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-400 mb-1">
                  {new Date(event.date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                {event.location && (
                  <p className="text-sm text-gray-400 mb-2">
                    📍 {event.location}
                  </p>
                )}
                {event.description && (
                  <p className="text-gray-300">{event.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Menu */}
      <button
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
        title="Open Menu"
        className="fixed top-6 right-6 z-20 bg-black/60 p-3 rounded-md hover:bg-black/80 transition"
      >
        <Menu size={28} />
      </button>

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
