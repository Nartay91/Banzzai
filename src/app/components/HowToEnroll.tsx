import Link from "next/link";

const steps = [
  {
    step: "01",
    title: "Свяжитесь с нами",
    text: "Выберите удобный способ — WhatsApp, Telegram или email.",
  },
  {
    step: "02",
    title: "Определитесь с курсом",
    text: "Расскажите о своих целях и опыте, мы поможем подобрать лучшее направление.",
  },
  {
    step: "03",
    title: "Оформите заявку и оплату",
    text: "Застолбите место в группе (или индивидуальные занятия), чтобы начать обучение.",
  },
];

const HowToEnroll = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Как записаться
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {steps.map(({ step, title, text }) => (
              <div key={step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0071e3]/10 text-[#0071e3] font-semibold text-lg mb-4">
                  {step}
                </div>
                <h3 className="text-[28px] font-semibold mb-2">{title}</h3>
                <p className="opacity-80">{text}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contacts"
              className="bg-[#0071e3] text-white px-8 py-3 rounded-full hover:opacity-90 transition inline-block"
            >
              Записаться сейчас
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToEnroll;
