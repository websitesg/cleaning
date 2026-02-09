
import React from 'react';
import { Star, ShieldCheck, Clock } from 'lucide-react';

interface HeroProps {
  onOrderClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOrderClick }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full blue-gradient opacity-[0.03] -skew-x-12 translate-x-1/4" aria-hidden="true"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-3/5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-6 animate-pulse">
              <Star className="w-4 h-4 fill-current" />
              Клининг №1 в Екатеринбурге
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
              Уборка квартир <br className="hidden md:block" />
              <span className="text-blue-600">и домов</span> от <span className="whitespace-nowrap">110 ₽/м²</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Вернем чистоту и уют в ваш дом за 4 часа. Используем профессиональное оборудование и гипоаллергенные средства. Оплата только за результат.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <button
                onClick={onOrderClick}
                className="w-full sm:w-auto px-10 py-5 blue-gradient text-white rounded-2xl font-bold text-lg shadow-2xl shadow-blue-500/40 hover:scale-[1.02] active:scale-95 transition-all"
              >
                Рассчитать стоимость
              </button>
              <div className="flex items-center gap-4 px-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <img key={i} src={`https://picsum.photos/seed/${i + 20}/48/48`} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt={`Клиент ${i}`} />
                  ))}
                </div>
                <div className="text-left">
                  <div className="font-bold text-slate-900">1200+</div>
                  <div className="text-xs text-slate-500 font-medium">Довольных клиентов</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
              <div className="flex items-center gap-3 text-slate-700 font-medium">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-green-500" />
                </div>
                Полная страховка
              </div>
              <div className="flex items-center gap-3 text-slate-700 font-medium">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Clock className="w-5 h-5 text-blue-500" />
                </div>
                Выезд за 60 мин
              </div>
              <div className="flex items-center gap-3 text-slate-700 font-medium">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Star className="w-5 h-5 text-orange-400 fill-current" />
                </div>
                PRO-клинеры
              </div>
            </div>
          </div>

          <div className="lg:w-2/5 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-3xl border-8 border-white group">
              <img
                src="https://static.tildacdn.com/tild3836-6636-4434-a464-303632353264/_.jpg"
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
                alt="Профессиональная уборка гостиной в Екатеринбурге"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Star className="w-5 h-5 text-green-600 fill-current" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Результат</div>
                    <div className="text-sm font-bold text-slate-800">Идеальная чистота на 100%</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Float Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
