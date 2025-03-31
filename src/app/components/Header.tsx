"use client";
import { motion } from "framer-motion";
import { useMenuStore } from "../store/useMenuStore";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "../locales/LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { isOpen, toggleMenu } = useMenuStore();
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-[#d2d2d7]">
      <div className=" max-w-[980px] mx-auto px-4 flex items-center justify-between h-16">
        <Link className="flex items-center" href="/">
          <Image
            alt="Banzzai Logo"
            width={120}
            height={35}
            className="h-9 w-auto"
            src="/banzzai_logo.webp"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <LanguageSwitcher />
          <Link className="hover:text-[#0077ed] transition-colors" href="/">
          {t("home")}
          </Link>
          <Link
            className="hover:text-[#0077ed] transition-colors"
            href="/data-analytics"
          >
            {t("data_analytics")}
          </Link>
          <Link
            className="hover:text-[#0077ed] transition-colors"
            href="/flutterflow"
          >
            {t("flutterflow")}
          </Link>
          <Link
            className="hover:text-[#0077ed] transition-colors"
            href="/ai-development"
          >
            {t("ai_development")}
          </Link>
          <Link
            className="hover:text-[#0077ed] transition-colors"
            href="/contacts"
          >
            {t("contacts")}
          </Link>
        </nav>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="cursor-pointer p-2 z-50 relative"
          >
            <div
              className={`w-6 h-1 bg-gray-800 rounded transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            />
            <div
              className={`w-6 h-1 bg-gray-800 rounded mt-1 transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <div
              className={`w-6 h-1 bg-gray-800 rounded mt-1 transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`fixed left-1/2 w-64 h-80 p-6 z-50 flex flex-col space-y-4
    bg-white/80 backdrop-blur-lg shadow-lg rounded-[18px] transform 
    -translate-x-1/2 border border-[#d2d2d7]  
    ${
      isOpen
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    }`}
      >
        <nav className="flex flex-col  space-y-4 text-lg font-semibold text-center">
          <Link
            className="hover:text-[#0077ed] transition-colors"
            href="/"
            onClick={toggleMenu}
          >
            Главная
          </Link>
          <Link
            className="hover:text-[#0077ed] transition-colors"
            href="/data-analytics"
            onClick={toggleMenu}
          >
            Дата-аналитика
          </Link>
          <Link
            className="hover:text-[#0077ed] transition-colors"
            href="/flutterflow"
            onClick={toggleMenu}
          >
            FlutterFlow
          </Link>
          <Link
            className="hover:text-[#0077ed] transition-colors"
            href="/ai-development"
            onClick={toggleMenu}
          >
            AI-разработка
          </Link>
          <Link
            className="hover:text-[#0077ed] transition-colors"
            href="/contacts"
            onClick={toggleMenu}
          >
            Контакты
          </Link>
        </nav>
      </motion.div>
    </header>
  );
};