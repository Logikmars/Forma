import { useParams } from 'react-router-dom';
import './Case.scss';

const cases = {
    'Blocknite': {
        imagesCount: 4,
        video: '/videos/Blocknitenew.mp4',
        title: 'Teaser Blocknite',
        desc: 'A teaser trailer for Blocknite, featuring a unique stylized approach and high-quality rendering.'
    },
    'Bw': {
        imagesCount: 4,
        video: '/videos/rebalance3.mp4',
        title: 'BlueWhale Trailer',
        desc: 'Full-length promotional trailer combining real-time rendering with high-end post-production effects.'
    },
    'Hippo': {
        imagesCount: 3,
        video: '/videos/Hipponew.mp4',
        title: 'Hippo Redesign',
        desc: 'A reimagining of the Hippo brand with modern CG visuals and sleek motion design.'
    },
    'MemefiCG': {
        imagesCount: 4,
        video: '/videos/cheliki.mp4',
        title: 'MEMEFI CG TRAILER',
        desc: 'A cinematic CG trailer for MEMEFI, designed to enhance branding with high-quality animation.'
    },
    'MemefiXLinea': {
        imagesCount: 4,
        video: '/videos/cheliki1.mp4',
        title: 'MEMEFI X LINEA',
        desc: 'Collaboration video for Memefi x Linea, featuring dynamic motion design and high-quality rendering.'

    },
    'PAWS': {
        imagesCount: 3,
        video: '/videos/paws.mp4',
        title: 'PAWS ON SOLANA',
        desc: 'Announcement animation for PAWS on Solana with procedural effects and a unique stylized look.'
    },
    'Porsche': {
        imagesCount: 5,
        video: '/videos/paws3.mp4',
        title: 'Porsche Contest Entry',
        desc: 'Contest entry for Porsche featuring high-end 3D visuals, dynamic camera work, and a highly detailed car model.'
    },
    'SunDogTrump': {
        imagesCount: 3,
        video: '/videos/paws1.mp4',
        title: 'Sandog X Trump',
        desc: 'Created a 3D animation for the Sandog x Trump collaboration with detailed modeling and realistic rendering.'
    }
}

export default () => {

    const { caseName } = useParams();

    return (
        <div className='Case'>
            <video autoPlay muted playsInline loop>
                <source src={cases[caseName].video} type="video/mp4" />
            </video>
            <div className='Case_content bowler_fonts '>
                <div className='Case_header bowler_fonts'>
                    {cases[caseName].title}
                </div>
                <div className='Case_img'>
                    <img src={`/cases/${caseName}/${1}.webp`} alt="" />
                </div>
                <div className='Case_desc'>
                    <div className='Case_desc_header bowler_fonts'>
                        Project description
                    </div>
                    <div className='Case_desc_text vogue_fonts'>

                        {cases[caseName].desc}
                    </div>
                </div>
                <div className='Case_images'>
                    {Array(cases[caseName].imagesCount - 1)
                        .fill(0)
                        .map((_, index) => {
                            return <div className='Case_img' key={`Case` + '_' + index}>
                                <img src={`/cases/${caseName}/${index + 2}.webp`} alt="" />
                            </div>
                        })}
                </div>
            </div>
        </div>
    )
}