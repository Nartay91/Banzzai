import type { ReactNode } from "react";
import "./i18n";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatBox from "./components/ChatBox";
import "./globals.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatBox />
      </body>
    </html>
  );
};