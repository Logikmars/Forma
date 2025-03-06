import './PortfolioItemLast.scss';
export default ({ number, title, description, img, subtitle }) => {
    return (
        <div className='PortfolioItemLast'>
            <div className='PortfolioItemLast__left'>
                <h2 className='PortfolioItemLast__left-num'>{number}</h2>
                <div className='PortfolioItemLast__left-title'>
                    <h2 className='PortfolioItemLast__left-title-big'>{title}</h2>
                    <p className='PortfolioItemLast__left-title-small'>{subtitle}</p>
                </div>
                <p className='PortfolioItemLast__left-description'>{description}</p>
            </div>
            <div className='PortfolioItemLast__right'>
                <img src={img} alt="" className='PortfolioItemLast__right-img' />
            </div>


        </div>
    )
}