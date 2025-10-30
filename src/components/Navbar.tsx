import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-black">Purdue CS Club</h1>
        <div className="space-x-6">
          <Link href="/" className="hover:text-yellow-500">Home</Link>
          <Link href="/about" className="hover:text-yellow-500">About</Link>
          <Link href="/events" className="hover:text-yellow-500">Events</Link>
          <Link href="/projects" className="hover:text-yellow-500">Projects</Link>
          <Link href="/join" className="hover:text-yellow-500">Join Us</Link>
        </div>
      </div>
    </nav>
  );
}
