"use client";
import Link from "next/link";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const contacts = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-5 h-5 text-[#0071e3]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>
    ),
    label: "WhatsApp",
    value: "+7 775 283 73 06",
    href: "https://wa.me/77752837306",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-5 h-5 text-[#0071e3]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
        />
      </svg>
    ),
    label: "Telegram",
    value: "@z_dias_c",
    href: "https://t.me/z_dias_c",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-5 h-5 text-[#0071e3]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    label: "E-mail",
    value: "balinteegor@icloud.com",
    href: "mailto:balinteegor@icloud.com",
  },
];

const ContactInfo = () => {
  return (
    <section className="w-full py-20 bg-[#f5f5f7]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Контактная информация
        </h2>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-[18px] border border-[#d2d2d7] p-6 overflow-hidden transition-transform duration-400 transform hover:scale-102 hover:translate-y-[-2px] hover:shadow-[0_12px_20px_#0000001a] p-6 bg-[#fff]">
            <h3 className="text-xl font-semibold mb-4">Наши контакты</h3>
            <ul className="space-y-4">
              {contacts.map(({ icon, label, value, href }) => (
                <li key={label} className="flex items-center">
                  <span className="text-[#0071e3] mr-2">{icon}</span>
                  <span>
                    {label}:{" "}
                    <Link href={href} className="text-[#0071e3]">
                      {value}
                    </Link>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[18px] border border-[#d2d2d7] overflow-hidden transition-transform duration-400 transform hover:scale-102 hover:translate-y-[-2px] hover:shadow-[0_12px_20px_#0000001a] p-6 bg-[#fff]">
            <h3 className="text-xl font-semibold mb-4">Адрес</h3>
            <p className="mb-4">Астана, ул. Бокейхана, 27а</p>
            <div className="aspect-video bg-[#f5f5f7] rounded-lg overflow-hidden">
              <YMaps>
                <Map
                  defaultState={{
                    center: [51.08439, 71.427025],
                    zoom: 16,
                    controls: ["zoomControl", "fullscreenControl"],
                  }}
                  width="100%"
                  height="400px"
                  defaultOptions={{
                    suppressMapOpenBlock: true, 
                    yandexMapDisablePoiInteractivity: true, 
                  }}
                  modules={["control.ZoomControl", "control.FullscreenControl"]}
                >
                  <Placemark geometry={[51.08439, 71.427025]} />
                </Map>
              </YMaps>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
