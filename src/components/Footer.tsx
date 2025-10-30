export default function Footer() {
  return (
    <footer className="bg-purdueBlack text-center py-6 mt-20 text-white">
      <p className="text-sm text-purdueGold">
        © {new Date().getFullYear()} Purdue CS Club
      </p>
    </footer>
  );
}
