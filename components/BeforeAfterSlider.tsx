import React, { useState, useRef, useEffect } from 'react';
import { GripVertical } from 'lucide-react';

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    altText: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ beforeImage, afterImage, altText }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
        if (!containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        let clientX;

        if ('touches' in event) {
            clientX = event.touches[0].clientX;
        } else {
            clientX = (event as MouseEvent).clientX;
        }

        const position = ((clientX - containerRect.left) / containerRect.width) * 100;
        setSliderPosition(Math.min(Math.max(position, 0), 100));
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    useEffect(() => {
        const handleGlobalMove = (e: MouseEvent | TouchEvent) => {
            if (isDragging) {
                handleMove(e);
            }
        };

        const handleGlobalUp = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            window.addEventListener('mousemove', handleGlobalMove);
            window.addEventListener('touchmove', handleGlobalMove);
            window.addEventListener('mouseup', handleGlobalUp);
            window.addEventListener('touchend', handleGlobalUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleGlobalMove);
            window.removeEventListener('touchmove', handleGlobalMove);
            window.removeEventListener('mouseup', handleGlobalUp);
            window.removeEventListener('touchend', handleGlobalUp);
        };
    }, [isDragging]);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-2xl cursor-col-resize select-none shadow-xl"
            onMouseDown={handleMove}
            onTouchStart={handleMove}
        >
            {/* After Image (Background) */}
            <img
                src={afterImage}
                alt={`Clean ${altText}`}
                className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                После
            </div>

            {/* Before Image (Foreground - Clipped) */}
            <div
                className="absolute top-0 left-0 h-full w-full overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <img
                    src={beforeImage}
                    alt={`Dirty ${altText}`}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    До
                </div>
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-10"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600">
                    <GripVertical size={20} />
                </div>
            </div>
        </div>
    );
};

export default BeforeAfterSlider;
