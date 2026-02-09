import React from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';
import { Sparkles } from 'lucide-react';

const BeforeAfter = () => {
    const examples = [
        {
            before: '/images/before-after/living_room_dirty.png',
            after: '/images/before-after/living_room_clean.png',
            alt: 'Гостиная',
            title: 'Генеральная уборка гостиной'
        },
        {
            before: '/images/before-after/window_dirty.png',
            after: '/images/before-after/window_clean.png',
            alt: 'Окно',
            title: 'Мойка окон'
        },
        {
            before: '/images/before-after/kitchen_dirty.png',
            after: '/images/before-after/kitchen_clean.png',
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
