"use client";

import Image from "next/image";
import Link from "next/link";


const courseModules = [
    {
      title: "Основы FlutterFlow",
      points: ["Интерфейс платформы", "Создание первого проекта"],
    },
    {
      title: "Создание простого приложения в стиле Twitter",
      points: ["Организация ленты, функционал постов, лайков, комментариев", "Практика UI/UX"],
    },
    {
      title: "Продвинутые методы разработки",
      points: ["Работа с базами данных и интеграциями", "Улучшение производительности"],
    },
    {
      title: "Генерация собственного стартапа",
      points: ["Поиск идей, определение целевой аудитории", "Подготовка концепции приложения"],
    },
    {
      title: "Полная реализация стартапа",
      points: ["Сборка MVP (минимально жизнеспособного продукта)", "Тестирование и отладка"],
    },
    {
      title: "Публикация приложения",
      points: ["Подготовка к релизу в App Store и Google Play", "Рекомендации по продвижению и работе над обновлениями"],
    },
  ];
  
  const courseBenefits = [
    "Готовое к запуску мобильное приложение, созданное без написания кода",
    "Навык быстрого прототипирования для ваших бизнес-идей",
    "Понимание основных принципов мобильной разработки и дизайна",
    "Навыки публикации и продвижения приложения в магазинах",
  ];
  
  const courseConditions = [
    { label: "Длительность:", value: "3 месяца" },
    { label: "Стоимость:", value: "75 000 KZT в месяц" },
    { label: "Формат:", value: "Офлайн (групповые занятия в Астане)" },
    { label: "Результат:", value: "Опыт создания и запуска мобильного приложения + сертификат" },
  ];

const FlutterFlow = () => {
  return (
    <div className="flex flex-1 flex-col">
    <section className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/flutterflow.webp"
          alt="FlutterFlow Hero Image"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-l from-white via-background/50 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-[980px] text-center px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Курс FlutterFlow (No-Code)
        </h1>
        <p className="text-lg md:text-xl opacity-80 mb-8 md:mb-10">
          Освойте создание мобильных приложений (iOS и Android) без необходимости писать код.
        </p>
        <div className="inline-flex items-center bg-[#fff]/80 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="text-[#0071e3] font-medium mr-3">75 000 KZT в месяц</span>
          <span className="text-sm bg-[#f5f5f7] px-3 py-1 rounded-full">3 месяца</span>
        </div>
      </div>
    </section>
    <section className="py-20">
    <div className="container max-w-[980px] mx-auto px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Обзор</h2>
        <p className="text-lg mb-6">
          Освойте создание мобильных приложений (iOS и Android) без необходимости писать код. FlutterFlow — это платформа No-Code, позволяющая за короткий срок собрать рабочие приложения и даже запустить собственный стартап.
        </p>
      </div>
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Программа курса</h2>
        <div className="space-y-8">
          {courseModules.map((item, index) => (
            <div key={index} className="rounded-[18px] border border-[#d2d2d7] p-6 bg-white overflow-hidden transition-transform duration-400 transform hover:scale-105 hover:translate-y-[-4px] hover:shadow-[0_12px_20px_#0000001a]">
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <ul className="space-y-2">
                {item.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Что вы получите</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courseBenefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white font-semibold text-sm mr-3 flex-shrink-0 mt-0.5">
                ✓
              </span>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Условия обучения</h2>
        <div className="rounded-[18px] border border-[#d2d2d7] p-6 bg-white overflow-hidden transition-transform duration-400 transform hover:scale-105 hover:translate-y-[-4px] hover:shadow-[0_12px_20px_#0000001a]">
          <ul className="space-y-4">
            {courseConditions.map((condition, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <span className="font-medium">{condition.label}</span> {condition.value}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link href="/contacts" className="bg-blue-500 text-white px-8 py-3 rounded-full hover:opacity-90 transition inline-block">
          Записаться на курс
        </Link>
      </div>
    </div>
  </section>
  </div>
  );
};

export default FlutterFlow;
