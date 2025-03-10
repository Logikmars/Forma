import { useEffect, useRef, useState } from 'react';
import './FaqDecor.scss';

const elementsCount = 10;

export default function FaqDecor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();

                let x = e.clientX - rect.left;
                let y = e.clientY - rect.top;

                // Ограничиваем координаты, если мышка выходит за пределы контейнера
                if (x < 0) x = 0;
                if (y < 0) y = 0;
                if (x > rect.width) x = rect.width;
                if (y > rect.height) y = rect.height;

                setPosition({ x, y });
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
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
                        transition: `transform ${(elementsCount - index) * 20}ms`,
                    }}
                >
                    <img src="/img/faqDecorElement.svg" alt="" />
                </div>
            ))}
        </div>
    );
}
