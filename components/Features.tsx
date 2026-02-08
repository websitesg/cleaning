
import React from 'react';
import { Zap, Heart, CheckCircle2, UserCheck, Droplets, Wallet } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Выезд в день обращения",
      description: "Срочно нужно прибраться? Мы будем у вас уже через 1.5–2 часа после звонка.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Эко-химия",
      description: "Используем только безопасные, гипоаллергенные средства без едкого запаха.",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Оплата после уборки",
      description: "Никаких предоплат. Вы проверяете качество работы и только потом оплачиваете.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Проверенный персонал",
      description: "Каждый клинер прошел обучение и проверку службы безопасности.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Гарантия 24 часа",
      description: "Если вы найдете недостатки в течение суток, мы устраним их бесплатно.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Свое оборудование",
      description: "Привозим мощные пылесосы, парогенераторы и весь необходимый инвентарь.",
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Почему выбирают нас</h2>
          <p className="text-slate-500 text-lg">
            Мы создали сервис, которым пользуемся сами. Внимание к деталям и забота о клиенте — наши главные приоритеты.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div key={idx} className="p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all group">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${item.color}`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
