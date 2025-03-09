import './TrustedItem.scss';
export default ({ img, title }) => {return (
    <div className='TrustedItem'>
        <img src={img} alt="" className='TrustedItem__img'/>
        <p className='TrustedItem__title vogue_fonts'>{title}</p>
    </div>
)}