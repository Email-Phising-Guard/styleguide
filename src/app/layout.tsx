import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
      <body className={inter.className}>
        <header className="flex justify-between">
          <div>
            <span>Email Phising Guard</span>
          </div>
          <nav className="flex gap-2">
            <Link href="/logo">
              <Button variant="ghost">Logo</Button>
            </Link>
            <Link href="/color">
              <Button variant="ghost">Colors</Button>
            </Link>
            <Link href="/graphics-icon">
              <Button variant="ghost">Graphics and Icon</Button>
            </Link>
            <Link href="/typography">
              <Button variant="ghost">Typography</Button>
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
