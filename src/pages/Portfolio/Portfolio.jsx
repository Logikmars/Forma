import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import FAQ from '../FAQ/FAQ';
import './Portfolio.scss';
import PortfolioItemBig from './PortfolioItemBig/PortfolioItemBig';
import PortfolioItemLast from './PortfolioItemLast/PortfolioItemLast';
import PortfolioItemSmall from './PortfolioItemSmall/PortfolioItemSmall';
export default () => {
    
    const portfolioItems = [
        { number: '01', title: 'cgi', description: 'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', img: '/img/services.png', subtitle: '(Computer-Generated Imagery)', border: false },
        { number: '02', title: 'motion design', description: 'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', img: '/img/services.png', subtitle: '', border: true },
        { number: '03', title: 'VFX', description: 'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', img: '/img/services.png', subtitle: '(visual effects)', border: false },
        { number: '04', title: 'GFX DESIGN', description: 'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', img: '/img/services.png', subtitle: '', border: true }
    ];

    return (
    <div className='container'> 
        <div className='Portfolio'>
            <Header />
            <div className='Portfolio__hero'>
                <div className='Portfolio__hero-video'>
                    VIDEO

                </div>
                <div className='Portfolio__hero-logo free_img'>
                    <img src="/img/logoBig.svg" alt="" className='Portfolio__hero-logo-img'/>
                </div>
            </div>
            <div className='Portfolio__about'>
                <h2 className='Portfolio__about-title bowler_fonts'>TITLE TEXT <span className='orange bowler_fonts'>FORMA</span></h2>

                <p className='Portfolio__about-description vogue_fonts'>Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehend erit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <div className='Portfolio__about-decor'>
                    <div className='Portfolio__about-decor-first free_img Portfolio__about-decor-item'>
                        <img src="/img/decor1.webp" alt="" />
                    </div>
                    <div className='Portfolio__about-decor-second free_img Portfolio__about-decor-item'>
                        <img src="/img/decor2.webp" alt="" />
                    </div>
                    <div className='Portfolio__about-decor-third free_img Portfolio__about-decor-item'>
                        <img src="/img/decor3.webp" alt="" />
                    </div>
                </div>
            </div>
            <div className='Portfolio__portfolio'>
                <h2 className='bowler_fonts orange Portfolio__portfolio-title'>PORTFOLIO</h2>
                <div className='Portfolio__portfolio-items'>
                    <PortfolioItemSmall img={"/img/example.png"} title={'NAME OF WORK'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'}/>
                    <PortfolioItemSmall img={"/img/example.png"} title={'NAME OF WORK'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'}/>
                    <PortfolioItemSmall img={"/img/example.png"} title={'NAME OF WORK'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'}/>
                </div>
                <PortfolioItemBig img={"/img/example.png"} title={'NAME OF WORK'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'}/>
                <div className='Portfolio__portfolio-items'>
                    <PortfolioItemSmall img={"/img/example.png"} title={'NAME OF WORK'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'}/>
                    <PortfolioItemSmall img={"/img/example.png"} title={'NAME OF WORK'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'}/>
                    <PortfolioItemSmall img={"/img/example.png"} title={'NAME OF WORK'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'}/>
                </div>
                <PortfolioItemBig img={"/img/example.png"} title={'NAME OF WORK'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'}/>
                <div className='Portfolio__portfolio-items'>
                    <PortfolioItemSmall img={"/img/example.png"} title={'NAME OF WORK'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'}/>
                    <PortfolioItemSmall img={"/img/example.png"} title={'NAME OF WORK'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'}/>
                    <PortfolioItemSmall img={"/img/example.png"} title={'NAME OF WORK'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'}/>
                </div>
                <PortfolioItemBig img={"/img/example.png"} title={'NAME OF WORK'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'}/>
                <div className='Portfolio__portfolio-items'></div>
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
            <FAQ />
        </div>
    </div>
)}