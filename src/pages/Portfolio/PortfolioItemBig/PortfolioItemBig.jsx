import './PortfolioItemBig.scss';
export default ({ img, title, description, date }) => {
    


    return (
    <div className='PortfolioItemBig'>
        <img src={img} alt="" className='PortfolioItemBig__img'/>
        <div className='PortfolioItemBig__info'>
            <div className='PortfolioItemBig__info-top'>
                <p className='PortfolioItemBig__info-title bowler_fonts'>{title}</p>
                <div className='PortfolioItemBig__info-date bowler_fonts'>{date}</div>
            </div>
            <div className='PortfolioItemBig__info-description vogue_fonts'>{description}</div>
        </div>
    </div>
)}