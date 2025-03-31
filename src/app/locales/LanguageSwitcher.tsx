"use client";

import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";
import Image from "next/image";

const languages = [
  { code: "kk", label: "Қазақша", flag: "/kz.svg" },
  { code: "ru", label: "Русский", flag: "/ru.svg" },
  { code: "en", label: "English", flag: "/us.svg" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  return (
    <div className="relative inline-block" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 150)}
        className="w-10 h-10 rounded-full hover:scale-110 transition focus:outline-none"
      >
        <Image
          src={languages.find((lang) => lang.code === i18n.language)?.flag || "/ru.svg"}
          alt="Flag"
          width={30}
          height={40}
          className="rounded-full"
        />
      </button>

      {isOpen && (
        <ul className="absolute mt-2 bg-gray-800 text-white rounded-lg shadow-lg py-2 w-36">
          {languages.map((lang) => (
            <li
              key={lang.code}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-700"
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setIsOpen(false); 
              }}
            >
              <Image src={lang.flag} alt={lang.label} width={28} height={28} className="rounded-full mr-2" />
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;