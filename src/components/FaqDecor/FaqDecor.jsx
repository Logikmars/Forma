import { useEffect, useRef, useState } from 'react';
import './FaqDecor.scss';

const elementsCount = 10;

export default function FaqDecor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);
    const isTouchScreen = useRef(false);

    useEffect(() => {
        // Определяем, есть ли тачскрин
        const detectTouchScreen = () => {
            isTouchScreen.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        };
        detectTouchScreen();

        const handleMouseMove = (e) => {
            if (isTouchScreen.current) return; // Игнорируем на тачскрине

            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();

                let x = e.clientX - rect.left;
                let y = e.clientY - rect.top;

                // Ограничиваем координаты в пределах контейнера
                x = Math.max(0, Math.min(x, rect.width));
                y = Math.max(0, Math.min(y, rect.height));

                setPosition({ x, y });
            }
        };

        const handleMouseLeave = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setPosition({ x: rect.width / 2, y: rect.height / 2 }); // Возвращаем в центр
            }
        };


        const container = containerRef.current;
        if (container) {
            container.addEventListener("mousemove", handleMouseMove);
            container.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            if (container) {
                container.removeEventListener("mousemove", handleMouseMove);
                container.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, []);

    return (
        <div className='FaqDecor' ref={containerRef}>
            {Array.from({ length: elementsCount }).map((_, index) => (
                <div
                    key={index}
                    className='FaqDecor_element free_img'
                    style={{
                        transform: `translate(${position.x}px, ${position.y}px)`,
                        transition: `transform ${(elementsCount - index) * 20}ms ease-out`,
                    }}
                >
                    <img src="/img/faqDecorElement.svg" alt="" />
                </div>
            ))}
        </div>
    );
}
