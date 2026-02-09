
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const reviews = [
    {
      name: "Анна Петрова",
      area: "Центральный р-н",
      text: "Заказывала генеральную уборку после переезда. Отмыли всё до блеска, даже духовку, которую я думала уже не спасти. Рекомендую!",
      rating: 5,
      avatar: "images/avatars/1.jpg"
    },
    {
      name: "Михаил Волков",
      area: "ЖК Александровский",
      text: "Вызывал ребят на уборку после ремонта. Пыль была везде. Приехали с мощным пылесосом и за 5 часов сделали квартиру жилой. Сервис на высоте.",
      rating: 5,
      avatar: "images/avatars/2.jpg"
    },
    {
      name: "Елена С.",
      area: "Курчатовский р-н",
      text: "Пользуюсь поддерживающей уборкой раз в неделю. Очень удобно, освободилось куча времени. Клинеры всегда вежливые и аккуратные.",
      rating: 5,
      avatar: "images/avatars/3.jpg"
    }
  ];

  const next = () => setCurrent((current + 1) % reviews.length);
  const prev = () => setCurrent((current - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Нам доверяют</h2>
          <p className="text-slate-500">Уже более 1000 жителей Екатеринбурга стали нашими постоянными клиентами</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${current * 100}%)` }}>
            {reviews.map((review, idx) => (
              <div key={idx} className="w-full shrink-0 px-4">
                <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 relative">
                  <Quote className="absolute top-8 right-8 w-24 h-24 text-blue-500/10 pointer-events-none" />

                  <div className="flex items-center gap-2 mb-8">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-orange-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl text-slate-700 italic mb-10 leading-relaxed font-medium">
                    "{review.text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <img src={review.avatar} className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg" alt={review.name} />
                    <div>
                      <div className="font-bold text-lg">{review.name}</div>
                      <div className="text-slate-500 text-sm">{review.area}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center md:justify-between items-center mt-12 px-4 gap-4">
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300'}`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={prev}
                className="p-4 rounded-full border border-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={next}
                className="p-4 rounded-full border border-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
