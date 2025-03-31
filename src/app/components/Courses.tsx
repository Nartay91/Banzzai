import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    id: "data-analytics",
    title: "Дата-аналитика",
    duration: "3 месяца",
    price: "50 000 KZT в месяц",
    description: "Научитесь работать с данными, анализировать и визуализировать их для принятия эффективных решений.",
    image: "/data-analytics.webp",
    link: "/data-analytics",
  },
  {
    id: "flutterflow",
    title: "FlutterFlow (No-Code)",
    duration: "3 месяца",
    price: "75 000 KZT в месяц",
    description: "Освойте создание мобильных приложений (iOS и Android) без необходимости писать код.",
    image: "/flutterflow.webp",
    link: "/flutterflow",
  },
  {
    id: "ai-development",
    title: "AI-разработка",
    duration: "1 месяц",
    price: "75 000 KZT",
    description: "Погрузитесь в мир искусственного интеллекта, научитесь создавать AI-лендинги и подключать чат-боты.",
    image: "/ai-development.webp",
    link: "/ai-development",
  },
];

const features = [
    {
      title: "Очное обучение",
      description:
        "Вы будете учиться в комфортных аудиториях офлайн, сможете общаться с преподавателями и однокурсниками «вживую» и быстрее осваивать материал.",
    },
    {
      title: "Максимум практики",
      description:
        "Наша методика базируется на реальных проектах и кейсах, а не только на теории.",
    },
    {
      title: "Опытные преподаватели",
      description:
        "Наши тренеры имеют практический опыт в индустрии и готовы делиться актуальными знаниями.",
    },
    {
      title: "Актуальные направления",
      description:
        "Мы предлагаем курсы по Дата-аналитике, FlutterFlow (No-Code для мобильных приложений) и AI-разработке — наиболее востребованные сейчас области IT.",
    },
    {
      title: "Гибкие форматы",
      description:
        "Вы можете учиться в группе или выбрать индивидуальный план занятий (за 500 000 KZT), если вам нужен более персонализированный подход.",
    },
    {
      title: "Комфортное расположение",
      description:
        "Наша школа находится в удобном месте Астаны с хорошей транспортной доступностью.",
    },
  ];

  const Courses = () => {
    return (
      <div className="w-full py-14 sm:py-20">
        <div className="w-full">
          <section className="max-w-[980px] px-[22px] mx-auto py-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Почему выбирают нас?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="rounded-[18px] border border-[#d2d2d7] p-6 bg-white overflow-hidden transition-transform duration-400 transform hover:scale-105 hover:translate-y-[-4px] hover:shadow-[0_12px_20px_#0000001a]"
                  >
                    <h3 className="text-lg font-semibold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
  
          <section id="courses" className=" w-full  bg-[#f5f5f7] py-20">
            <div className="max-w-[980px] px-[22px] mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                Наши курсы
              </h2>
              <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
                {courses.map(({ id, title, duration, price, description, image, link }) => (
                  <div key={id} className="transition-transform duration-400 transform hover:scale-105 hover:translate-y-[-4px] hover:shadow-[0_12px_20px_#0000001a] overflow-hidden relative h-full flex flex-col bg-white shadow-md rounded-lg">
                    <div className="relative h-48 overflow-hidden">
                      <Image 
                        src={image} 
                        alt={title} 
                        layout="fill" 
                        objectFit="cover" 
                        priority={false} 
                      />
                    </div>
                    <div className="p-6 flex-grow">
                      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">
                          {duration}
                        </span>
                        <span className="font-medium text-blue-600">{price}</span>
                      </div>
                      <p className="mb-6 opacity-80">{description}</p>
                    </div>
                    <div className="p-6 pt-0">
                      <Link 
                        href={link} 
                        className="block w-full text-center bg-blue-600 text-white py-3 rounded-full hover:opacity-90 transition"
                      >
                        Подробнее
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  };
  
  

export default Courses;
  