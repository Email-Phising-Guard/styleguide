import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "@/components/component/logo";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Email Phising Guard Style Guide",
  description: "The style guide for Email Phising Guard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "flex flex-col min-h-screen")}>
        <header className="border-b bg-slate-50 drop-shadow-xs">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto p-5 gap-5">
            <Link href="/">
              <Logo />
            </Link>
            <nav className="flex gap-2">
              <Link href="/logo">
                <Button variant="ghost">Logo</Button>
              </Link>
              <Link href="/color">
                <Button variant="ghost">Colors</Button>
              </Link>
              <Link href="/icon">
                <Button variant="ghost">Icons</Button>
              </Link>
              <Link href="/typography">
                <Button variant="ghost">Typography</Button>
              </Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t bg-slate-50 drop-shadow-xs text-center p-10">
          Created by Alice Lin, Jerry Fan, Michael Lei and Scott Chen
        </footer>
      </body>
    </html>
  );
}
