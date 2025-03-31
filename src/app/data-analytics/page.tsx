import Image from "next/image";

const courseModules = [
    {
      title: "Месяц 1 — Статистика и математика",
      topics: [
        "Построение графиков (x, x^2)",
        "Теория вероятностей",
        "A/B-тестирование, P-value, t-тест, Z-тест",
        "Корреляция, ошибки I и II рода",
      ],
    },
    {
      title: "Месяц 2 — SQL",
      topics: [
        "Основы СУБД и связи между таблицами",
        "Primary key и foreign key",
        "Агрегирующие функции, WHERE, GROUP BY, JOINS",
        "CASE, подзапросы",
      ],
    },
    {
      title: "Месяц 3 — Python и визуализация",
      topics: [
        "Python (базовый синтаксис, работа в Jupyter Notebook)",
        "Циклы for/while, условия if-elif-else, pandas",
        "Средства визуализации (Matplotlib, Plotly, BI Data Studio)",
      ],
    },
  ];
  
  const courseBenefits = [
    "Умение собирать, структурировать и анализировать данные",
    "Навык написания SQL-запросов для извлечения ценной информации",
    "Практический опыт в Python, включая библиотеки для анализа данных",
    "Способность создавать наглядные отчёты и интерактивные дашборды",
  ];
  
  const courseConditions = [
    { label: "Длительность", value: "3 месяца" },
    { label: "Стоимость", value: "50 000 KZT в месяц" },
    { label: "Формат", value: "Офлайн (групповые занятия в Астане)" },
    { label: "Результат", value: "Практические проекты + сертификат об окончании" },
  ];

const DataAnalyticsPage = () => {
  return (
    <div>
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Data Analytics Hero Image"
          src="/data-analytics.webp"
          layout="fill"
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-white via-background/50 to-transparent"></div>
      </div>

      <div className="max-w-[980px] mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Курс Дата-аналитика
          </h1>
          <p className="text-lg md:text-xl opacity-80 mb-8 md:mb-10">
            Научитесь работать с данными, анализировать и визуализировать их для
            принятия эффективных решений.
          </p>

          <div className="inline-flex items-center bg-[#fff]/80 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-[#0071e3] font-medium mr-3">
              50 000 KZT в месяц
            </span>
            <span className="text-sm bg-[#f5f5f7] px-3 py-1 rounded-full">
              3 месяца
            </span>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20">
      <div className="max-w-[980px] mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Обзор</h2>
          <p className="text-lg mb-6">
            Курс «Дата-аналитика» научит вас работать с данными, анализировать и визуализировать их для принятия эффективных решений.
            За 3 месяца вы освоите статистику, SQL, Python и инструменты визуализации, необходимые современным аналитикам.
          </p>

          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6">Программа курса</h2>
            <div className="space-y-8">
              {courseModules.map((month, index) => (
                <div key={index} className="rounded-[18px] border border-[#d2d2d7] p-6 bg-white overflow-hidden transition-transform duration-400 transform hover:scale-105 hover:translate-y-[-4px] hover:shadow-[0_12px_20px_#0000001a]">
                  <h3 className="text-xl font-semibold flex items-center mb-4">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0071e3]/10 text-[#0071e3] font-semibold text-sm mr-3">
                      {index + 1}
                    </span>
                    {month.title}
                  </h3>
                  <ul className="space-y-2 pl-11">
                    {month.topics.map((topic, i) => (
                      <li key={i}>• {topic}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6">Что вы получите</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courseBenefits.map((benefit, index) => (
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
                {courseConditions.map((condition, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#0071e3] mr-2">•</span>
                    <div>
                      <span className="font-medium">{condition.label}:</span> {condition.value}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              className="button bg-[#0071e3] text-white px-8 py-3 rounded-full hover:opacity-90 transition inline-block"
              href="/contacts"
            >
              Записаться на курс
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
};

export default DataAnalyticsPage;
