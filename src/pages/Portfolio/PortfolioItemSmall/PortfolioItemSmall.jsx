import './PortfolioItemSmall.scss';
export default ({ img, title, description, date }) => {return (
    <div className='PortfolioItemSmall'>
        <img src={img} alt="" className='PortfolioItemSmall__img'/>
        <div className='PortfolioItemSmall__info'>
            <div className='PortfolioItemSmall__info-top'>
                <p className='PortfolioItemSmall__info-title bowler_fonts'>{title}</p>
                <div className='PortfolioItemSmall__info-date bowler_fonts'>{date}</div>
            </div>
            <div className='PortfolioItemSmall__info-description vogue_fonts'>{description}</div>
        </div>
    </div>
)}