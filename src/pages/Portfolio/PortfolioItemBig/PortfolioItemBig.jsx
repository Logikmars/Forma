import './PortfolioItemBig.scss';
import PortfolioItemBigDecor from './PortfolioItemBigDecor/PortfolioItemBigDecor';
export default ({ video, title, description, date, smalltitle, smalltitle2, smalltitle3, smalltitle4 }) => {



    return (
        <div className='PortfolioItemBig'>
            <div className='PortfolioItemBig__decor free_img'>
                <div className='PortfolioItemBig__inner'>
                    {smalltitle && <PortfolioItemBigDecor title={smalltitle} />}
                    {smalltitle2 && <PortfolioItemBigDecor title={smalltitle2} />}
                    {smalltitle3 && <PortfolioItemBigDecor title={smalltitle3} />}
                    {smalltitle4 && <PortfolioItemBigDecor title={smalltitle3} />}
                </div>
            </div>
            <video autoPlay muted playsInline loop>
                <source src={video} type="video/mp4" />
            </video>
            <div className='PortfolioItemBig__info'>
                <div className='PortfolioItemBig__info-top'>
                    <p className='PortfolioItemBig__info-title bowler_fonts'>{title}</p>
                    <div className='PortfolioItemBig__info-date bowler_fonts'>{date}</div>
                </div>
                <div className='PortfolioItemBig__info-description vogue_fonts'>{description}</div>
            </div>
        </div>
    )
}