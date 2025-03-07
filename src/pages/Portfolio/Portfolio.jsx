import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import FAQ from '../FAQ/FAQ';
import './Portfolio.scss';
import PortfolioItemBig from './PortfolioItemBig/PortfolioItemBig';
import PortfolioItemLast from './PortfolioItemLast/PortfolioItemLast';
import PortfolioItemSmall from './PortfolioItemSmall/PortfolioItemSmall';
import FaqDecor from '../../components/FaqDecor/FaqDecor';


export default () => {

    const portfolioItems = [
        { number: '01', title: 'cgi', description: 'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', img: '/img/services.png', subtitle: '(Computer-Generated Imagery)', border: false },
        { number: '02', title: 'motion design', description: 'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', img: '/img/services.png', subtitle: '', border: true },
        { number: '03', title: 'VFX', description: 'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', img: '/img/services.png', subtitle: '(visual effects)', border: false },
        { number: '04', title: 'GFX DESIGN', description: 'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', img: '/img/services.png', subtitle: '', border: true }
    ];

    return (
        <div className='Portfolio'>
            <div className='Portfolio__hero'>
                <div className='Portfolio__hero-video'>
                    <video autoPlay muted playsInline loop>
                        <source src="/utpVideo.mp4" type="video/mp4" />
                    </video>
                    <div className='Portfolio__hero_dark free_img'>
                        <div className='Portfolio__hero_dark_inner'></div>
                    </div>
                </div>
            </div>
            <div className='container'>

                <div className='Portfolio__about'>
                    <div className='Portfolio__about-decor'>
                        <div className='Portfolio__about-decor-first free_img Portfolio__about-decor-item Portfolio__about-decor-item_1'>
                            <img src="/img/decor1.webp" alt="" />
                        </div>
                        <div className='Portfolio__about-decor-second free_img Portfolio__about-decor-item Portfolio__about-decor-item_2'>
                            <img src="/img/decor2.webp" alt="" />
                        </div>
                        <div className='Portfolio__about-decor-third free_img Portfolio__about-decor-item Portfolio__about-decor-item_3'>
                            <img src="/img/decor3.webp" alt="" />
                        </div>
                    </div>
                    <h2 className='Portfolio__about-title bowler_fonts'>TITLE TEXT <span className='orange bowler_fonts'>FORMA</span></h2>
                    <p className='Portfolio__about-description vogue_fonts'>Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehend erit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className='Portfolio__portfolio'>
                    <h2 className='bowler_fonts orange Portfolio__portfolio-title'>PORTFOLIO</h2>
                    <div className='Portfolio__portfolio-items'>
                        <PortfolioItemSmall img={"/img/example.png"} title={'NAME OF WORK'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'} />
                        <PortfolioItemSmall img={"/img/example.png"} title={'NAME OF WORK'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'} />
                        <PortfolioItemSmall img={"/img/example.png"} title={'NAME OF WORK'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'} />
                    </div>
                </div>
                <div className='Portfolio__services'>
                    <h2 className='Portfolio__services-title bowler_fonts'>Our <span className='bowler_fonts orange'>services</span></h2>
                    <div className='Portfolio__services-items'>
                        {portfolioItems.map((item, index) => (
                            <PortfolioItemLast
                                key={index}
                                number={item.number}
                                title={item.title}
                                description={item.description}
                                img={item.img}
                                subtitle={item.subtitle}
                                border={item.border}
                            />
                        ))}
                    </div>
                </div>
                <Footer />
            </div>

        </div>
    )
}