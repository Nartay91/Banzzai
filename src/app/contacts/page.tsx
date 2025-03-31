"use client";
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
        className="w-6 h-6 text-[#0071e3]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        ></path>
      </svg>
    ),
    title: "WhatsApp",
    description: "Быстрая связь для вопросов и записи:",
    link: "+7 775 283 73 06",
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
        className="w-6 h-6 text-[#0071e3]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
        ></path>
      </svg>
    ),
    title: "Telegram",
    description: "Напишите нам в Telegram:",
    link: "@z_dias_c",
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
        className="w-6 h-6 text-[#0071e3]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        ></path>
      </svg>
    ),
    title: "Email",
    description: "Для более подробных вопросов:",
    link: "balinteegor@icloud.com",
    href: "mailto:balinteegor@icloud.com",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 text-[#0071e3]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        ></path>
      </svg>
    ),
    title: "Адрес",
    description: "Астана, ул. Бокейхана, 27а",
    link: null,
  },
];

const steps = [
  {
    title: "Свяжитесь с нами",
    description: "Выберите удобный способ — WhatsApp, Telegram или email.",
  },
  {
    title: "Определитесь с курсом",
    description:
      "Расскажите о своих целях и опыте, мы поможем подобрать лучшее направление.",
  },
  {
    title: "Оформите заявку и оплату",
    description:
      "Застолбите место в группе (или индивидуальные занятия), чтобы начать обучение.",
  },
];

const courses = [
  { name: "Дата-аналитика (3 месяца)", price: "50 000 KZT в месяц" },
  { name: "FlutterFlow (No-Code) (3 месяца)", price: "75 000 KZT в месяц" },
  { name: "AI-разработка (1 месяц)", price: "75 000 KZT" },
  { name: "Индивидуальные занятия", price: "500 000 KZT" },
];

const Contacts = () => {
  return (
    <div>
      <section className="py-24 md:py-32 bg-[#f5f5f7]">
        <div className="max-w-[980px] mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Свяжитесь с нами
            </h1>
            <p className="text-lg md:text-xl opacity-80 mb-8 md:mb-10">
              Мы с радостью ответим на все ваши вопросы и поможем выбрать
              оптимальный курс. Выберите удобный способ связи.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-[980px] mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Контактная информация</h2>
              <div className="space-y-8">
                {contacts.map(
                  ({ icon, title, description, link, href }, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-[#f5f5f7] p-3 rounded-full mr-4">
                        {icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{title}</h3>
                        <p className="mb-1">{description}</p>
                        {href ? (
                          <a href={href} className="text-[#0071e3] font-medium">
                            {link}
                          </a>
                        ) : (
                          <span>{link}</span>
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Как записаться</h2>
              <div className="rounded-[18px] border border-[#d2d2d7] p-6 bg-white overflow-hidden transition-transform duration-400 transform hover:scale-105 hover:translate-y-[-4px] hover:shadow-[0_12px_20px_#0000001a]">
                <ol className="space-y-8">
                  {steps.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0071e3] text-white font-semibold text-sm mr-4 flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          {step.title}
                        </h3>
                        <p>{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-8 pt-8 border-t border-[#d2d2d7]">
                  <h3 className="text-xl font-semibold mb-4">
                    Доступные курсы
                  </h3>
                  <ul className="space-y-3">
                    {courses.map((course, index) => (
                      <li
                        key={index}
                        className={`flex items-center justify-between ${
                          index === courses.length - 1
                            ? "pt-3 border-t border-[#d2d2d7]"
                            : ""
                        }`}
                      >
                        <span>{course.name}</span>
                        <span className="font-medium text-[#0071e3]">
                          {course.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="justify-center py-20 bg-[#f5f5f7]">
        <div className="max-w-[980px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Наше расположение
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="w-full max-w-[906px] aspect-video bg-[#f5f5f7] rounded-lg overflow-hidden">
              <YMaps>
                <Map
                  defaultState={{
                    center: [51.08439, 71.427025],
                    zoom: 16,
                    controls: ["zoomControl", "fullscreenControl"],
                  }}
                  width="100%"
                  height="100%"
                  defaultOptions={{
                    suppressMapOpenBlock: true,
                    yandexMapDisablePoiInteractivity: true,
                  }}
                  modules={["control.ZoomControl", "control.FullscreenControl"]}
                >
                  <Placemark geometry={[51.08439, 71.427025]} />
                </Map>
              </YMaps>
              <p className="mt-4 text-center">Астана, ул. Бокейхана, 27а</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
