
import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone } from 'lucide-react';

interface StickyCTAProps {
  onOrderClick: () => void;
}

const StickyCTA: React.FC<StickyCTAProps> = ({ onOrderClick }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 p-4 transition-transform duration-500 ${visible ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="bg-white/80 backdrop-blur-md border rounded-3xl p-3 shadow-2xl flex items-center gap-3">
          <a href="https://wa.me/79057743600" className="w-14 h-14 bg-green-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/20 active:scale-95 transition-transform">
            <MessageCircle className="w-7 h-7" />
          </a>
          <button 
            onClick={onOrderClick}
            className="flex-grow h-14 blue-gradient text-white rounded-2xl font-bold text-base shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-transform"
          >
            Рассчитать цену
          </button>
        </div>
      </div>

      {/* Desktop Floating Actions */}
      <div className={`hidden lg:flex fixed bottom-10 right-10 flex-col gap-4 z-40 transition-all duration-500 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <a 
          href="https://wa.me/79057743600" 
          title="Написать в WhatsApp"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform group relative"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute right-full mr-4 px-4 py-2 bg-white text-slate-900 text-sm font-bold rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border pointer-events-none">
            Есть вопросы? Пишите!
          </span>
        </a>
        <button 
          onClick={onOrderClick}
          className="w-14 h-14 blue-gradient text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform group relative"
        >
          <Phone className="w-7 h-7" />
          <span className="absolute right-full mr-4 px-4 py-2 bg-white text-slate-900 text-sm font-bold rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border pointer-events-none">
            Заказать обратный звонок
          </span>
        </button>
      </div>
    </>
  );
};

export default StickyCTA;
