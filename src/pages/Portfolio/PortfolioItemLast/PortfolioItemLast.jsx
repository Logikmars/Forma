import { useState, useEffect, useRef } from 'react';
import './PortfolioItemLast.scss';

export default ({ number, title, description, img, subtitle, border, video }) => {
    const [hasBeenVisible, setHasBeenVisible] = useState(false);
    const videoRef = useRef(null);

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

    return (
        <div className='PortfolioItemLast'>
            <div className='PortfolioItemLast__left'>
                <div className='PortfolioItemLast__left-top-border free_img'>
                    {border ? (
                        <img src='/img/ourServicesCornerStroke.svg' alt='' />
                    ) : (
                        <img src='/img/ourServicesCornerFill.svg' alt='' />
                    )}
                </div>
                <div className='PortfolioItemLast__left-top-block free_img'>
                    <div className={`PortfolioItemLast__left-top-inner ${border ? '' : 'PortfolioItemLast__orange'}`}></div>
                </div>
                <div className='PortfolioItemLast__left-top'>
                    <h2 className='PortfolioItemLast__left-num bowler_fonts'>{number}</h2>
                </div>
                <div className={`PortfolioItemLast__left-bottom ${border ? '' : 'PortfolioItemLast__orange'}`}>
                    <div className='PortfolioItemLast__left-title'>
                        <h2 className='PortfolioItemLast__left-title-big bowler_fonts'>{title}</h2>
                        <p className='PortfolioItemLast__left-title-small bowler_fonts'>{subtitle}</p>
                    </div>
                    <p className='PortfolioItemLast__left-description vogue_fonts'>{description}</p>
                </div>
            </div>
            <div className='PortfolioItemLast__right' ref={videoRef}>
                {hasBeenVisible && (
                    <video autoPlay muted playsInline loop>
                        <source src={video} type='video/mp4' />
                    </video>
                )}
                {/* <img src={img} alt='' className='PortfolioItemLast__right-img' /> */}
            </div>
        </div>
    );
};