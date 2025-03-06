import { useState } from 'react';
import './Header.scss';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


export default () => {
    const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);

    const toggleModal = () => {
        setisMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className='Header'>
            <img src="/img/logo.svg" alt="" className='Header__logo'/>
            <div className='Header__nav bowler_fonts'>
                <Router> 
                    <Link to="/portfolio" className='bowler_fonts Header__nav-item'>PORTFOLIO</Link> 
                    <p className='bowler_fonts Header__nav-item'>/</p> 
                    <Link to="/about" className='bowler_fonts Header__nav-item'> Our sevices</Link> 
                    <p className='bowler_fonts Header__nav-item'>/</p> 
                    <Link to="/contact" className='bowler_fonts Header__nav-item'>CONTACT US</Link> 
                    <p className='bowler_fonts Header__nav-item'>/</p> 
                    <Link to="/faq" className='bowler_fonts Header__nav-item'>FAQ</Link> 
                    <p className='bowler_fonts Header__nav-item'>/</p> 
                    <Link to="/socials" className='bowler_fonts Header__nav-item'>SOCIALS</Link>
                    <Routes>
                        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
                    </Routes>
                </Router>
                <div className={`Header__nav-burger ${isMobileMenuOpen ? "active" : ""}`}
                    onClick={toggleModal}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    //     {/* <div className={`Header_links ${isMobileMenuOpen && 'Header_links_open'}`}>
    //         <div className='Header__item Header__item-navigation'>

    //         <Router> 
    //                 <Link to="/portfolio" className='bowler_fonts Header__nav-item' onClick={() => { setisMobileMenuOpen(false) }} >PORTFOLIO</Link> 
    //                 <p className='bowler_fonts Header__nav-item'>/</p> 
    //                 <Link to="/about" className='bowler_fonts Header__nav-item' onClick={() => { setisMobileMenuOpen(false) }}> Our sevices</Link> 
    //                 <p className='bowler_fonts Header__nav-item'>/</p> 
    //                 <Link to="/contact" className='bowler_fonts Header__nav-item' onClick={() => { setisMobileMenuOpen(false) }}>CONTACT US</Link> 
    //                 <p className='bowler_fonts Header__nav-item'>/</p> 
    //                 <Link to="/faq" className='bowler_fonts Header__nav-item' onClick={() => { setisMobileMenuOpen(false) }}>FAQ</Link> 
    //                 <p className='bowler_fonts Header__nav-item'>/</p> 
    //                 <Link to="/socials" className='bowler_fonts Header__nav-item' onClick={() => { setisMobileMenuOpen(false) }}>SOCIALS</Link>
    //                 <Routes>
    //                     <Route path="/portfolio" element={<Portfolio />} />
    //                 </Routes>
    //             </Router>
    //         </div>
    //   </div> */}
)}