import { useState } from 'react';
import './PortfolioItemSmall.scss';
import PortfolioItemSmallDecor from './PortfolioItemSmallDecor/PortfolioItemSmallDecor';
import { useNavigate } from 'react-router-dom';

export default ({ video, title, description, date, smalltitle, smalltitle2, smalltitle3, link }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!link) return;
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    const nav = useNavigate();

    const handleClick = () => {
        if (link) {
            nav(`/case/${link}`)
        }
    };

    return (
        <div className='PortfolioItemSmall'>
            <div className='PortfolioItemSmall_decor free_img'>
                <div className='PortfolioItemSmall__inner'>
                    {smalltitle && <PortfolioItemSmallDecor title={smalltitle} />}
                    {smalltitle2 && <PortfolioItemSmallDecor title={smalltitle2} />}
                    {smalltitle3 && <PortfolioItemSmallDecor title={smalltitle3} />}
                </div>
            </div>
            <div
                className='PortfolioItemSmall_video'
                onMouseMove={handleMouseMove}
                onClick={handleClick}
                style={{ cursor: link ? 'pointer' : 'default' }}
            >
                <video autoPlay muted playsInline loop>
                    <source src={video} type="video/mp4" />
                </video>

                {link && (
                    <div
                        className="explore-text bowler_fonts"
                        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
                    >
                        Click to explore
                    </div>
                )}
            </div>
            <div className='PortfolioItemSmall__info'>
                <div className='PortfolioItemSmall__info-top'>
                    <p className='PortfolioItemSmall__info-title bowler_fonts'>{title}</p>
                    <div className='PortfolioItemSmall__info-date bowler_fonts'>{date}</div>
                </div>
                <div className='PortfolioItemSmall__info-description vogue_fonts'>{description}</div>
            </div>
        </div>
    );
};
