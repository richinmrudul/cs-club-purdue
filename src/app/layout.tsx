import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="bg-white text-black">
        <Navbar />
        <main className="pt-24 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
