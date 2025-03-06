import Header from '../../components/Header/Header';
import './Portfolio.scss';
export default () => {return (
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
            </div>
        </div>
    </div>
)}