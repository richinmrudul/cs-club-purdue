import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-purdueBlack text-white fixed top-0 left-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-purdueGold">Purdue CS Club</h1>
        <div className="space-x-6">
          {["Home", "About", "Events", "Projects", "Join"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="hover:text-purdueGold transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
