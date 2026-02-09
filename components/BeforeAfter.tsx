import React from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';
import { Sparkles } from 'lucide-react';

const BeforeAfter = () => {
    const examples = [
        {
            before: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=800&auto=format&fit=crop&grayscale', // Grayscale to simulate dirty/dull
            after: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
            alt: 'Гостиная',
            title: 'Генеральная уборка гостиной'
        },
        {
            before: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop',
            after: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=800&auto=format&fit=crop',
            alt: 'Окно',
            title: 'Мойка окон'
        },
        {
            before: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=800&auto=format&fit=crop',
            after: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=800&auto=format&fit=crop',
            alt: 'Кухня',
            title: 'Уборка кухни'
        }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-6">
                        <Sparkles size={20} />
                        <span className="font-semibold text-sm uppercase tracking-wide">Результаты работы</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        До и После
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Посмотрите на реальные примеры нашей работы. Мы возвращаем чистоту и уют в ваш дом.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {examples.map((example, index) => (
                        <div key={index} className="flex flex-col gap-4">
                            <BeforeAfterSlider
                                beforeImage={example.before}
                                afterImage={example.after}
                                altText={example.alt}
                            />
                            <h3 className="text-xl font-bold text-slate-800 text-center">
                                {example.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BeforeAfter;
