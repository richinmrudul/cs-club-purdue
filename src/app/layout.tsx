import "./globals.css";
import type { Metadata } from "next";
import LoadingBar from "@/components/LoadingBar";

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
      <body className="bg-black text-white overflow-x-hidden">
        <LoadingBar>{children}</LoadingBar>
      </body>
    </html>
  );
}
