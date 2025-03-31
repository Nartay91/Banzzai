import Image from "next/image";
import Link from "next/link";

const courseModules = [
  {
    title: "Создание лендинга при помощи ИИ",
    points: [
      "Инструменты для быстрой генерации веб-страниц",
      "Базовый дизайн и контент с поддержкой AI",
    ],
  },
  {
    title: "Внедрение ИИ-консультанта на сайт",
    points: ["Принципы проектирования чат-бота", "Интеграция бота в веб-интерфейс"],
  },
  {
    title: "База данных для сбора информации",
    points: [
      "Организация и хранение пользовательских данных",
      "Аналитика для улучшения взаимодействия с клиентами",
    ],
  },
  {
    title: "Подключение бота к Telegram",
    points: ["Создание и настройка Telegram-бота", "Управление диалогами и автоматизация ответов"],
  },
  {
    title: "Интеграция ИИ с WhatsApp",
    points: ["Настройка WhatsApp Business API", "Поддержка клиентов и рассылки через мессенджер"],
  },
  {
    title: "Поиск первых клиентов",
    points: [
      "Основы продвижения и маркетинга в сфере AI-решений",
      "Создание портфолио и демонстрация своих разработок",
    ],
  },
];

const benefits = [
  "Практические навыки по созданию AI-решений за короткий срок",
  "Умение автоматизировать поддержку клиентов с помощью чат-ботов",
  "Базу для дальнейшего развития в сфере машинного обучения и NLP",
  "Готовые проекты, которые можно использовать в портфолио",
];

const conditions = [
  { label: "Длительность", value: "1 месяц" },
  { label: "Стоимость", value: "75 000 KZT" },
  { label: "Формат", value: "Офлайн (групповые занятия в Астане)" },
  { label: "Результат", value: "Реальные AI-проекты + сертификат" },
];

const AIDevelopment = () => {
  return (
    <div>
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/ai-development.webp"
          alt="AI Development Hero Image"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-l from-white via-background/50 to-transparent"></div>
      </div>

      <div className="max-w-[980px] mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Курс AI-разработка
          </h1>
          <p className="text-lg md:text-xl opacity-80 mb-8 md:mb-10">
            Интенсивный курс по созданию AI-лендингов, чат-ботов и работе с базами данных для сбора информации о клиентах.
          </p>

          <div className="inline-flex items-center bg-[#fff]/80 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-[#0071e3] font-medium mr-3">75 000 KZT</span>
            <span className="text-sm bg-[#f5f5f7] px-3 py-1 rounded-full">1 месяц</span>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20">
    <div className="max-w-[980px] mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Обзор</h2>
        <p className="text-lg mb-6">
          Этот интенсивный курс (всего 1 месяц) погружает вас в мир
          искусственного интеллекта. На практике вы научитесь создавать
          AI-лендинги, подключать чат-боты к Telegram и WhatsApp, а также
          использовать базы данных для сбора информации о клиентах.
        </p>

        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Программа курса</h2>
          <div className="space-y-8">
            {courseModules.map((module, index) => (
              <div
                key={index}
                className="rounded-[18px] border border-[#d2d2d7] p-6 bg-white overflow-hidden transition-transform duration-400 transform hover:scale-105 hover:translate-y-[-4px] hover:shadow-[0_12px_20px_#0000001a]"
              >
                <h3 className="text-xl font-semibold mb-4">{module.title}</h3>
                <ul className="space-y-2">
                  {module.points.map((point, idx) => (
                    <li key={idx}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Что вы получите</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#0071e3] text-white font-semibold text-sm mr-3 flex-shrink-0 mt-0.5">
                  ✓
                </span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Условия обучения</h2>
          <div className="rounded-[18px] border border-[#d2d2d7] p-6 bg-white overflow-hidden transition-transform duration-400 transform hover:scale-105 hover:translate-y-[-4px] hover:shadow-[0_12px_20px_#0000001a]">
            <ul className="space-y-4">
              {conditions.map((condition, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#0071e3] mr-2">•</span>
                  <div>
                    <span className="font-medium">{condition.label}:</span>{" "}
                    {condition.value}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contacts"
            className="button bg-[#0071e3] text-white px-8 py-3 rounded-full hover:opacity-90 transition inline-block"
          >
            Записаться на курс
          </Link>
        </div>
      </div>
    </div>
  </section>
  </div>
  );
};

export default AIDevelopment;
