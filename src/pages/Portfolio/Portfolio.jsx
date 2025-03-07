import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import FAQ from '../FAQ/FAQ';
import './Portfolio.scss';
import PortfolioItemBig from './PortfolioItemBig/PortfolioItemBig';
import PortfolioItemLast from './PortfolioItemLast/PortfolioItemLast';
import PortfolioItemSmall from './PortfolioItemSmall/PortfolioItemSmall';
import FaqDecor from '../../components/FaqDecor/FaqDecor';

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

export default () => {
    const portfolioItems = [
        { number: '01', title: 'cgi', description: 'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', img: '/img/services.png', subtitle: '(Computer-Generated Imagery)', border: false },
        { number: '02', title: 'motion design', description: 'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', img: '/img/services.png', subtitle: '', border: true },
        { number: '03', title: 'VFX', description: 'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', img: '/img/services.png', subtitle: '(visual effects)', border: false },
        { number: '04', title: 'GFX DESIGN', description: 'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', img: '/img/services.png', subtitle: '', border: true }
    ];

    const containerRef = useRef(null);
    useGSAP(() => {
        gsap.utils.toArray(".PortfolioItemSmall").forEach((el, index) => {
            gsap.fromTo(
                el,
                {
                    opacity: 0,
                    x: 100 * ((index % 2) ? 1 : -1),
                    y: 200,
                    rotate: `${20 * ((index % 2) ? 1 : -1)}deg`,
                },
                {
                    opacity: 1,
                    rotate: `0deg`,
                    x: 0,
                    y: 0,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 60%",
                        end: "top 60%",
                        scrub: 1,
                    },
                }
            );
        });
        gsap.utils.toArray(".PortfolioItemBig").forEach((el, index) => {
            gsap.fromTo(
                el,
                {
                    opacity: 0,
                    x: 100 * ((index % 2) ? 1 : -1),
                    y: 200,
                },
                {
                    opacity: 1,
                    rotate: `0deg`,
                    y: 0,
                    x: 0,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 60%",
                        scrub: 1,
                        end: "top 60%",
                    },
                }
            );
        });
        gsap.utils.toArray(".PortfolioItemLast").forEach((el, index) => {
            gsap.fromTo(
                el,
                {
                    opacity: 0,
                    x: index % 2 === 0 ? -100 : 100,
                },
                {
                    opacity: 1,
                    x: 0,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 60%",
                        end: "top 60%",
                        scrub: 1,
                    },
                }
            );
        });
    }, { scope: containerRef })


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
                    <h2 className='Portfolio__about-title bowler_fonts'>WELCOME TO  <span className='orange bowler_fonts'>FORMA</span></h2>
                    <p className='Portfolio__about-description vogue_fonts'>
                        We are asab production providing services for WEB 3 in the shortest time and excellent quality, we have produced more than 3000 seconds of 3D material so that you can provide the best content to your users.
                    </p>
                </div>
                <div className='Portfolio__portfolio' ref={containerRef}>
                    <h2 className='bowler_fonts orange Portfolio__portfolio-title'>PORTFOLIO</h2>
                    <div className='Portfolio__portfolio-items'>
                        <PortfolioItemSmall video={"/videos/paws1.mp4"} title={'NAME OF WORK'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'} />
                        <PortfolioItemSmall video={"/videos/paws2.mp4"} title={'NAME OF WORK'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'} />
                        <PortfolioItemSmall video={"/videos/paws3.mp4"} title={'NAME OF WORK'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'} />
                    </div>
                    <PortfolioItemBig video={"/videos/paws.mp4"} title={'NAME OF WORK'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'} />
                    <div className='Portfolio__portfolio-items'>
                        <PortfolioItemSmall video={"/videos/rebalance1.mp4"} title={'NAME OF WORK'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'} />
                        <PortfolioItemSmall video={"/videos/rebalance2.mp4"} title={'NAME OF WORK'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'} />
                        <PortfolioItemSmall video={"/videos/rebalance3.mp4"} title={'NAME OF WORK'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'} />
                    </div>
                    <PortfolioItemBig video={"/videos/rebalance.mp4"} title={'NAME OF WORK'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'} />
                    <div className='Portfolio__portfolio-items'>
                        <PortfolioItemSmall video={"/videos/soldatiki1.mp4"} title={'NAME OF WORK'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'} />
                        <PortfolioItemSmall video={"/videos/soldatiki2.mp4"} title={'NAME OF WORK'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'} />
                        <PortfolioItemSmall video={"/videos/soldatiki3.mp4"} title={'NAME OF WORK'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'} />
                    </div>
                    <PortfolioItemBig video={"/videos/soldatiki.mp4"} title={'NAME OF WORK'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'} />

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