import './Trusted.scss';
import TrustedItem from './TrustedItem/TrustedItem';
export default () => {return (
    <div className='Trusted'>
        <div className='Trusted__title'>
            <h2 className='Trusted__title_text bowler_fonts'>trusted <span className='orange bowler_fonts'>by</span></h2>
            <span className='Trusted__title_line'></span>
        </div>
        <div className='Trusted__items'>
            <TrustedItem img={'/img/trusted/ledger.webp'} title={'Ledger'}/>
            <TrustedItem img={'/img/trusted/linea.webp'} title={'Linea'}/>
            <TrustedItem img={'/img/trusted/memefi.webp'} title={'MemeFi'}/>
            <TrustedItem img={'/img/trusted/rebalance.webp'} title={'Rebalance'}/>
            <TrustedItem img={'/img/trusted/paws.webp'} title={'Paws'}/>
            <TrustedItem img={'/img/trusted/lumina.webp'} title={'Lumina'}/>
            <TrustedItem img={'/img/trusted/sundog.webp'} title={'Sundog'}/>
            <TrustedItem img={'/img/trusted/hippo.webp'} title={'Hippo'}/>
            <TrustedItem img={'/img/trusted/notai.webp'} title={'Notai'}/>
            <TrustedItem img={'/img/trusted/rktf.webp'} title={'Rtfkt'}/>
            <TrustedItem img={'/img/trusted/planet.webp'} title={'Planet quest'}/>
        </div>
    </div>
)}