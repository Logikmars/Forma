import './PortfolioItemSmall.scss';
import PortfolioItemSmallDecor from './PortfolioItemSmallDecor/PortfolioItemSmallDecor';
export default ({ video, title, description, date, smalltitle, smalltitle2, smalltitle3 }) => {
    return (
        <div className='PortfolioItemSmall'>
            <div className='PortfolioItemSmall_decor free_img'>
                <div className='PortfolioItemSmall__inner'>
                {smalltitle && <PortfolioItemSmallDecor title={smalltitle} />}
                {smalltitle2 && <PortfolioItemSmallDecor title={smalltitle2} />}
                {smalltitle3 && <PortfolioItemSmallDecor title={smalltitle3} />}
                </div>
            </div>
            <video autoPlay muted playsInline loop>
                <source src={video} type="video/mp4" />
            </video>
            <div className='PortfolioItemSmall__info'>
                <div className='PortfolioItemSmall__info-top'>
                    <p className='PortfolioItemSmall__info-title bowler_fonts'>{title}</p>
                    <div className='PortfolioItemSmall__info-date bowler_fonts'>{date}</div>
                </div>
                <div className='PortfolioItemSmall__info-description vogue_fonts'>{description}</div>
            </div>
        </div>
    )
}