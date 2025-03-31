"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";

const IntroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.webp"
          alt="IT Education Background"
          layout="fill"
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-background/50 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center mx-auto max-w-3xl px-4">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 sm:mb-6">
          {t("intro.title")}
        </h1>
        <p className="text-sm sm:text-lg md:text-xl opacity-80 mb-6 sm:mb-8 md:mb-10">
          {t("intro.description")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link href="#courses" className="block text-center bg-blue-600 text-white py-2 px-2 rounded-full hover:opacity-90 transition">
            {t("intro.courses")}
          </Link>
          <Link href="/contacts" className="block text-center bg-blue-600 text-white py-2.5 px-3 rounded-full hover:opacity-90 transition">
            {t("intro.contact")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;