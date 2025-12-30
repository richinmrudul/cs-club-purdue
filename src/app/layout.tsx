import "./globals.css";
import type { Metadata } from "next";
import LoadingBar from "@/components/LoadingBar";
import CodeBackground from "@/components/CodeBackground";

export const metadata: Metadata = {
  title: "Purdue CS Club",
  description: "Connecting students through code, collaboration, and community.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-white overflow-x-hidden" style={{ backgroundColor: '#0a0a0a' }}>
        <CodeBackground />
        <LoadingBar>{children}</LoadingBar>
      </body>
    </html>
  );
}
