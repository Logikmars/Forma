import { useEffect, useRef, useState } from 'react';
import './FaqDecor.scss';

const elementsCount = 10;
const randomPosition = (max) => Math.floor(Math.random() * max);

export default function FaqDecor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);
    const isTouchScreen = useRef(false);
    const isMouseInside = useRef(false);

    useEffect(() => {
        const detectTouchScreen = () => {
            isTouchScreen.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        };
        detectTouchScreen();

        const handleMouseMove = (e) => {
            if (isTouchScreen.current) return;
            isMouseInside.current = true;

            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                let x = e.clientX - rect.left;
                let y = e.clientY - rect.top;
                x = Math.max(0, Math.min(x, rect.width));
                y = Math.max(0, Math.min(y, rect.height));
                setPosition({ x, y });
            }
        };

        const handleMouseLeave = () => {
            isMouseInside.current = false;
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener("mousemove", handleMouseMove);
            container.addEventListener("mouseleave", handleMouseLeave);
        }

        const interval = setInterval(() => {
            if (!isMouseInside.current && containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setPosition({ x: randomPosition(rect.width) / 2 + randomPosition(rect.width) / 4, y: randomPosition(rect.height) / 2 + randomPosition(rect.height) / 4 });
            }
        }, 1000); // Меняем позицию каждые 2 секунды

        return () => {
            if (container) {
                container.removeEventListener("mousemove", handleMouseMove);
                container.removeEventListener("mouseleave", handleMouseLeave);
            }
            clearInterval(interval);
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
                        transition: `transform ${((elementsCount + 20) - index) * 20}ms ease-out`,
                    }}
                >
                    <img src="/img/faqDecorElement.svg" alt="" />
                </div>
            ))}
        </div>
    );
}