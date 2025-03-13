import './Trusted.scss';
import TrustedItem from './TrustedItem/TrustedItem';

const items = [
    'LEDGER',
    'LINEA',
    'PAWS',
    'LUMIA',
    'NOTAI',
    'MEMEFI',
    '$SUNDOG',
    'RTFKT',
    '$HIPPO',
    'LEDGER'
]


const itemsArray = [...items, ...items, ...items, ...items, ...items]


export default () => {
    return (
        <div className='Trusted'>
            <div className='Trusted__title'>
                <h2 className='Trusted__title_text bowler_fonts'>trusted <span className='orange bowler_fonts'>by</span></h2>
                <span className='Trusted__title_line'></span>
            </div>
            <div className='Trusted__row Trusted__row_1'>
                {
                    itemsArray.map((item, index) => {
                        return <TrustedItem img={`/trustedBy/${index % items.length}.webp`} title={item} />
                    })
                }
            </div>
            <div className='Trusted__row Trusted__row_2'>
                {
                    itemsArray.map((item, index) => {
                        return <TrustedItem img={`/trustedBy/${index % items.length}.webp`} title={item} />
                    })
                }
            </div>
        </div>
    )
}