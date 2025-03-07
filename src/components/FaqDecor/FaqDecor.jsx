import { useEffect, useRef, useState } from 'react';
import './FaqDecor.scss';

const elementsCount = 10

export default () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className='FaqDecor'>
            {Array(elementsCount)
                .fill(0)
                .map((_, index) => {
                    return <div className='FaqDecor_element free_img' style={{
                        transform: `translate(${position.x}px, ${position.y}px) `,
                        transition: `transform ${(elementsCount - index) * 20}ms`,
                    }} >
                        <img src="/img/faqDecorElement.svg" alt="" />
                    </div>
                })}

        </div>
    )
}