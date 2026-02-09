
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Поддерживающая",
      price: "от 220\u00A0₽/м²",
      image: "https://images.unsplash.com/photo-1581579186913-45ac3e6e3dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      benefits: ["Влажная уборка полов", "Удаление пыли с мебели", "Очистка зеркал", "Уборка санузла"]
    },
    {
      title: "Генеральная",
      price: "от 360\u00A0₽/м²",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      popular: true,
      benefits: ["Обезжиривание кухни", "Глубокая чистка с/у", "Мойка внутри шкафов", "Очистка стен и дверей"]
    },
    {
      title: "После ремонта",
      price: "от 360\u00A0₽/м²",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      benefits: ["Сбор строймусора", "Обеспыливание всех ниш", "Мойка окон от цемента", "Удаление затирки"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Популярные услуги</h2>
            <p className="text-slate-500 text-lg">
              Выберите подходящий тип уборки. Мы гарантируем идеальный результат вне зависимости от сложности задачи.
            </p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline">
            Весь прайс-лист <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`relative bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col ${service.popular ? 'ring-4 ring-blue-600 ring-offset-4 scale-105 z-10' : ''}`}
            >
              {service.popular && (
                <div className="absolute top-6 right-6 z-20 px-4 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-widest">
                  Хит продаж
                </div>
              )}

              <div className="h-64 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <div className="text-blue-600 font-extrabold text-xl mb-6">{service.price}</div>

                <ul className="space-y-3 mb-8">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                      <Check className="w-4 h-4 text-green-500 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-2xl font-bold transition-all ${service.popular ? 'blue-gradient text-white shadow-lg shadow-blue-500/30' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                  Заказать
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
