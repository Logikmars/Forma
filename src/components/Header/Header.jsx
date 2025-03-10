import { useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';


export default () => {
    const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);

    const toggleModal = () => {
        setisMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <div className='Header'>
                <Link to="/">
                    <img src="/img/logo.svg" alt="" className='Header__logo' />
                </Link>
                <div className='Header__nav bowler_fonts'>
                    <a href="#portfolio" className='bowler_fonts Header__nav-item'>PORTFOLIO</a>
                    <p className='bowler_fonts Header__nav-item Header__nav-item_separator'>/</p>
                    {/* <Link to="/about" className='bowler_fonts Header__nav-item'> Our sevices</Link> */}
                    {/* <p className='bowler_fonts Header__nav-item'>/</p> */}

                    <a href='#FAQ' className='bowler_fonts Header__nav-item'>FAQ</a>
                    <p className='bowler_fonts Header__nav-item Header__nav-item_separator'>/</p>
                    <a href="#socials" className='bowler_fonts Header__nav-item'>SOCIALS</a>
                    <div className={`Header__nav-burger ${isMobileMenuOpen ? "active" : ""}`}
                        onClick={toggleModal}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className={`Header_links ${isMobileMenuOpen && 'Header_links_open'}`}>
                <div className='Header__item Header__item-navigation' onClick={() => { setisMobileMenuOpen(false) }}>
                    <Link to="/" className='bowler_fonts Header__nav-item'>PORTFOLIO</Link>
                    <p className='bowler_fonts Header__nav-item'>/</p>
                    {/* <Link to="/about" className='bowler_fonts Header__nav-item'> Our sevices</Link> */}
                    {/* <p className='bowler_fonts Header__nav-item'>/</p> */}
                    <Link to="/faq" className='bowler_fonts Header__nav-item'>FAQ</Link>
                    <p className='bowler_fonts Header__nav-item'>/</p>
                    <a href="#socials" className='bowler_fonts Header__nav-item'>SOCIALS</a>
                </div>
            </div>
        </>
    )
}