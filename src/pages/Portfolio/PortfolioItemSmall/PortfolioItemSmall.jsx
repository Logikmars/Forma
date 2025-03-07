import './PortfolioItemSmall.scss';
export default ({ video, title, description, date }) => {
    return (
        <div className='PortfolioItemSmall'>

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