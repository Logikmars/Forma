import './Trusted.scss';
import TrustedItem from './TrustedItem/TrustedItem';
export default () => {
    return (
        <div className='Trusted'>
            <div className='Trusted__title'>
                <h2 className='Trusted__title_text bowler_fonts'>trusted <span className='orange bowler_fonts'>by</span></h2>
                <span className='Trusted__title_line'></span>
            </div>
            <div className='Trusted__items'>
                <TrustedItem img={'/trustedBy/0.webp'} title={'LEDGER'} />
                <TrustedItem img={'/trustedBy/1.webp'} title={'LINEA'} />
                <TrustedItem img={'/trustedBy/2.webp'} title={'PAWS'} />
                <TrustedItem img={'/trustedBy/3.webp'} title={'LUMIA'} />
                <TrustedItem img={'/trustedBy/4.webp'} title={'NOTAI'} />
                <TrustedItem img={'/trustedBy/5.webp'} title={'MEMEFI'} />
                <TrustedItem img={'/trustedBy/6.webp'} title={'$SUNDOG'} />
                <TrustedItem img={'/trustedBy/7.webp'} title={'RTFKT'} />
                <TrustedItem img={'/trustedBy/8.webp'} title={'$HIPPO'} />
                <TrustedItem img={'/trustedBy/9.webp'} title={'LEDGER'} />
            </div>
        </div>
    )
}