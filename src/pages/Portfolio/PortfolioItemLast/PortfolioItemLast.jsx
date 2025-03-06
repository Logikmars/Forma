import './PortfolioItemLast.scss';
export default ({ number, title, description, img, subtitle, orange }) => {return (
    <div className='PortfolioItemLast'>
        <div className={`PortfolioItemLast__left ${orange ? "PortfolioItemLast__orange" : ""}`}>
            <h2 className='PortfolioItemLast__left-num bowler_fonts'>{number}</h2>
            <div className='PortfolioItemLast__left-title'>
                <h2 className='PortfolioItemLast__left-title-big bowler_fonts'>{title}</h2>
                <p className='PortfolioItemLast__left-title-small bowler_fonts'>{subtitle}</p>
            </div>
            <p className='PortfolioItemLast__left-description vogue_fonts'>{description}</p>
        </div>
        <div className='PortfolioItemLast__right'>
            <img src={img} alt="" className='PortfolioItemLast__right-img'/>
        </div>
    </div>
)}