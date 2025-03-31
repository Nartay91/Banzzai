import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7] py-12">
      <div className="max-w-[980px] mx-auto px-[22px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <Image
                alt="Banzzai Logo"
                width={150}
                height={44}
                className="h-11 w-auto"
                src="/banzzai_logo_footer.webp"
              />
            </div>
            <p className="text-lg mb-4">Обучаем IT-профессиям офлайн в Астане</p>
            <p className="text-lg">г. Астана, ул. Бокейхана, 27а</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Наши курсы</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="hover:text-[#0071e3] transition-colors" href="/data-analytics">
                  Дата-аналитика
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#0071e3] transition-colors" href="/flutterflow">
                  FlutterFlow
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#0071e3] transition-colors" href="/ai-development">
                  AI-разработка
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm">
              <li>
                WhatsApp:{" "}
                <a href="https://wa.me/77752837306" className="text-[#0071e3]">
                  +7 775 283 73 06
                </a>
              </li>
              <li>
                Telegram:{" "}
                <a href="https://t.me/z_dias_c" className="text-[#0071e3]">
                  @z_dias_c
                </a>
              </li>
              <li>
                Email:{" "}
                <a href="mailto:balinteegor@icloud.com" className="text-[#0071e3]">
                  balinteegor@icloud.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#d2d2d7] text-center text-sm">
          <p>© 2025 Banzzai Education. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
