import { useState, useEffect, useRef } from 'react';
import './PortfolioItemBig.scss';
import PortfolioItemBigDecor from './PortfolioItemBigDecor/PortfolioItemBigDecor';
import { useNavigate } from 'react-router-dom';

export default ({ video, title, description, date, smalltitle, smalltitle2, smalltitle3, smalltitle4, link }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [hasBeenVisible, setHasBeenVisible] = useState(false);
    const videoRef = useRef(null);
    const nav = useNavigate();

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setHasBeenVisible(true);
            }
        }, { threshold: 0.5 });

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    const handleMouseMove = (e) => {
        if (!link) return;
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    const handleClick = () => {
        if (link) {
            nav(`/case/${link}`);
        }
    };

    return (
        <div className='PortfolioItemBig'>
            <div className='PortfolioItemBig__decor free_img'>
                <div className='PortfolioItemBig__inner'>
                    {smalltitle && <PortfolioItemBigDecor title={smalltitle} />}
                    {smalltitle2 && <PortfolioItemBigDecor title={smalltitle2} />}
                    {smalltitle3 && <PortfolioItemBigDecor title={smalltitle3} />}
                    {smalltitle4 && <PortfolioItemBigDecor title={smalltitle4} />}
                </div>
            </div>
            <div
                className='PortfolioItemBig_video'
                onMouseMove={handleMouseMove}
                onClick={handleClick}
                style={{ cursor: link ? 'pointer' : 'default', position: 'relative' }}
                ref={videoRef}
            >
                {hasBeenVisible && (
                    <video autoPlay muted playsInline loop>
                        <source src={video} type='video/mp4' />
                    </video>
                )}
                {link && (
                    <div
                        className='explore-text bowler_fonts'
                        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px`, position: 'absolute' }}
                    >
                        Click to explore
                    </div>
                )}
            </div>
            <div className='PortfolioItemBig__info'>
                <div className='PortfolioItemBig__info-top'>
                    <p className='PortfolioItemBig__info-title bowler_fonts'>{title}</p>
                    <div className='PortfolioItemBig__info-date bowler_fonts'>{date}</div>
                </div>
                <div className='PortfolioItemBig__info-description vogue_fonts'>{description}</div>
            </div>
        </div>
    );
};
