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
        <header></header>
        {children}
      </body>
    </html>
  );
}
