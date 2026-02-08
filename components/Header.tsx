
import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOrderClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOrderClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 blue-gradient rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg leading-tight tracking-tight">ЛАЙТ КЛИНИНГ</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Челябинск</div>
            </div>
          </a>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <a href="#features" className="hover:text-blue-600 transition-colors">Преимущества</a>
          <a href="#services" className="hover:text-blue-600 transition-colors">Услуги</a>
          <a href="#reviews" className="hover:text-blue-600 transition-colors">Отзывы</a>
          <a href="#order-form" className="hover:text-blue-600 transition-colors">Контакты</a>
        </nav>

        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden md:flex flex-col items-end">
            <a href="tel:+73510000000" className="font-bold hover:text-blue-600 transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-500" />
              +7 (351) 000-00-00
            </a>
            <span className="text-[10px] text-green-500 font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              Работаем сейчас
            </span>
          </div>

          <button 
            onClick={onOrderClick}
            className="hidden sm:block px-6 py-2.5 blue-gradient text-white rounded-full font-semibold shadow-lg shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all text-sm"
          >
            Заказать уборку
          </button>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t p-6 shadow-2xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4 text-lg font-medium">
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="py-2 border-b">Преимущества</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="py-2 border-b">Услуги</a>
            <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="py-2 border-b">Отзывы</a>
            <a href="#order-form" onClick={() => setIsMenuOpen(false)} className="py-2 border-b">Контакты</a>
            <div className="pt-4 flex flex-col gap-4">
              <a href="tel:+73510000000" className="flex items-center gap-3 text-blue-600 font-bold">
                <Phone className="w-5 h-5" />
                +7 (351) 000-00-00
              </a>
              <button 
                onClick={() => { setIsMenuOpen(false); onOrderClick(); }}
                className="w-full py-4 blue-gradient text-white rounded-2xl font-bold shadow-xl shadow-blue-500/20"
              >
                Оставить заявку
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
