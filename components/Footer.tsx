
import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 blue-gradient rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <div className="font-bold text-lg leading-tight tracking-tight uppercase">ЛАЙТ КЛИНИНГ</div>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Профессиональный клининг для тех, кто ценит свое время и комфорт. Работаем в Челябинске и области с 2018 года.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Услуги</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Поддерживающая уборка</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Генеральная уборка</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Уборка после ремонта</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Химчистка мебели</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Мойка окон</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Клиентам</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Прайс-лист</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Преимущества</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Отзывы</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Оферта</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Контакты</h4>
            <ul className="space-y-6">
              <li>
                <a href="tel:+73510000000" className="flex items-start gap-4 text-slate-600 hover:text-blue-600 transition-colors">
                  <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                  <div className="text-sm font-bold">+7 (351) 000-00-00</div>
                </a>
              </li>
              <li className="flex items-start gap-4 text-slate-600">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <div className="text-sm font-medium">г. Челябинск, ул. Ленина, д. 100, офис 205</div>
              </li>
              <li className="flex items-start gap-4 text-slate-600">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <div className="text-sm font-medium">info@lightcleaning.ru</div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs font-medium">
          <div>2025 © ООО «ЛАЙТ КЛИНИНГ» — Все права защищены</div>
          <div className="flex gap-6">
            <span>ИНН 7453000000</span>
            <span>ОГРН 1257400000000</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
