import { create } from "zustand";

interface FAQItem {
  questions: string[];
  answer: string;
}

interface ChatState {
  isOpen: boolean;
  toggleChat: () => void;
  faq: FAQItem[];
  getAnswer: (query: string) => string;
}

export const useChatStore = create<ChatState>((set, get) => ({
  isOpen: false,
  toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),
  faq: [
    {
      questions: ["Как тебя зовут?", "Как твое имя?", "Как зовут?"],
      answer: "Меня зовут AI-ассистент."
    },
    {
      questions: ["Что такое Banzzai Education?", "Расскажи про Banzzai Education"],
      answer: "Это IT-школа в Астане."
    },
    {
      questions: ["Где находится Banzzai Education?", "По какому адресу Banzzai Education?"],
      answer: "По адресу: ул. Бокейхана, 27а, Астана."
    },
    {
      questions: ["Какие курсы вы предлагаете?", "Что изучают?"],
      answer: "Мы предлагаем курсы по Дата-аналитике, FlutterFlow и AI-разработке."
    },
    {
      questions: ["Сколько стоит курс Дата-аналитики?", "Какая цена на Дата-аналитику?"],
      answer: "50 000 KZT в месяц."
    },
    {
      questions: ["Сколько стоит курс FlutterFlow?", "Какая цена на FlutterFlow?"],
      answer: "75 000 KZT в месяц."
    },
    {
      questions: ["Сколько стоит курс AI-разработки?", "Какая цена на AI-разработку?"],
      answer: "75 000 KZT за 1 месяц."
    },
    {
      questions: ["Кто преподаватели?", "Расскажи о преподавателях"],
      answer: "Наши тренеры — опытные специалисты с практическим опытом в IT."
    },
    {
      questions: ["Как записаться на курсы?", "Как сделать запись на обучение?"],
      answer: "Записаться можно через WhatsApp, Telegram или email."
    },
    {
      questions: ["Какой формат обучения?", "Как проходит обучение?"],
      answer: "Очное обучение в небольших группах."
    },
    {
      questions: ["Есть ли индивидуальные занятия?", "Можно ли заниматься индивидуально?"],
      answer: "Да, индивидуальные занятия доступны за 500 000 KZT."
    },
    {
      questions: ["Как связаться с вами?", "Как можно с вами связаться?"],
      answer: "Связаться можно через WhatsApp: +7 775 283 73 06, Telegram: @z_dias_c или email: balinteegor@icloud.com."
    },
    {
      questions: ["В каком городе находится школа?", "Где расположена школа?"],
      answer: "Школа находится в Астане."
    },
    {
      questions: ["Какие технологии используются в обучении?", "Что изучают в школе?"],
      answer: "Мы обучаем современным IT-технологиям, практическим навыкам и кейсам."
    },
    {
      questions: ["Какие преимущества обучения у вас?", "Почему учиться у вас?"],
      answer: "Практический опыт, небольшие группы, современные методы и гибкий график."
    },
    {
      questions: ["Можно ли оплатить курс частями?", "Какова система оплаты?"],
      answer: "Подробности по оплате уточняйте у наших менеджеров."
    },
    {
      questions: ["Есть ли гарантии трудоустройства?", "Гарантируется ли трудоустройство?"],
      answer: "Мы предоставляем качественное обучение, но гарантировать трудоустройство не можем."
    },
    {
      questions: ["Какова продолжительность курсов?", "Сколько длится обучение?"],
      answer: "Курсы по Дата-аналитике и FlutterFlow рассчитаны на 3 месяца, AI-разработка — на 1 месяц."
    },
    {
      questions: ["Какой опыт у преподавателей?", "Расскажи про опыт преподавателей"],
      answer: "Наши преподаватели имеют солидный практический опыт и работают в индустрии."
    },
    {
      questions: ["Есть ли скидки для групп?", "Предусмотрены ли скидки?"],
      answer: "Уточняйте условия для групповых заявок у наших менеджеров."
    }
  ],
  getAnswer: (query: string) => {
    const normalizedQuery = query.trim().toLowerCase();
    const { faq } = get();
    const found = faq.find((item) =>
      item.questions.some((q) => normalizedQuery.includes(q.toLowerCase()))
    );
    return found ? found.answer : "Извините, я не нашёл ответа на этот вопрос. Попробуйте сформулировать иначе.";
  }
}));