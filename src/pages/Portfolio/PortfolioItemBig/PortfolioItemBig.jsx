import './PortfolioItemBig.scss';
export default ({ video, title, description, date }) => {



    return (
        <div className='PortfolioItemBig'>
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