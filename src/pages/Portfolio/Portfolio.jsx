import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import FAQ from '../FAQ/FAQ';
import './Portfolio.scss';
import PortfolioItemBig from './PortfolioItemBig/PortfolioItemBig';
import PortfolioItemLast from './PortfolioItemLast/PortfolioItemLast';
import PortfolioItemSmall from './PortfolioItemSmall/PortfolioItemSmall';
import FaqDecor from '../../components/FaqDecor/FaqDecor';

import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import Trusted from '../../components/Trusted/Trusted';
import { useState } from 'react';

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
                        start: "top 80%",
                        end: "top 80%",
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
                        start: "top 80%",
                        scrub: 1,
                        end: "top 80%",
                    },
                }
            );
        });

    }, { scope: containerRef })

    const [isLandscape, setIsLandscape] = useState(window.matchMedia("(orientation: landscape)").matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(orientation: landscape)");
        const handleChange = () => setIsLandscape(mediaQuery.matches);

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    const landscapeVideo = "/utpVideo.mp4";
    const portraitVideo = "/utpVideoMobile.mp4";


    return (
        <div className='Portfolio'>
            <div className='Portfolio__hero'>
                <div className='Portfolio__hero-video'>
                    <video autoPlay muted playsInline loop>
                        <source src={isLandscape ? landscapeVideo : portraitVideo} type="video/mp4" />
                    </video>
                    <div className='Portfolio__hero_dark free_img'>
                        <div className='Portfolio__hero_dark_inner'></div>
                    </div>
                </div>
            </div>
            <div className='container'>

                <div className='Portfolio__about'>
                    {/* <div className='Portfolio__about-decor'>
                        <div className='Portfolio__about-decor-first free_img Portfolio__about-decor-item Portfolio__about-decor-item_1'>
                            <img src="/img/decor1.webp" alt="" />
                        </div>
                        <div className='Portfolio__about-decor-second free_img Portfolio__about-decor-item Portfolio__about-decor-item_2'>
                            <img src="/img/decor2.webp" alt="" />
                        </div>
                        <div className='Portfolio__about-decor-third free_img Portfolio__about-decor-item Portfolio__about-decor-item_3'>
                            <img src="/img/decor3.webp" alt="" />
                        </div>
                    </div> */}
                    <h2 className='Portfolio__about-title bowler_fonts'>WELCOME TO  <span className='orange bowler_fonts'>FORMA</span></h2>
                    <p className='Portfolio__about-description vogue_fonts'>
                        We are asab production providing services for WEB 3 in the shortest time and excellent quality, we have produced more than 3000 seconds of 3D material so that you can provide the best content to your users.
                    </p>
                </div>
                <div className='Portfolio__portfolio' ref={containerRef}>
                    <h2 className='bowler_fonts orange Portfolio__portfolio-title'>PORTFOLIO</h2>
                    <div className='Portfolio__portfolio-items'>
                        <PortfolioItemSmall video={"/videos/paws1.mp4"} title={'Trump sundog'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'} smalltitle={'Unreal Engine'} smalltitle2={'Maya'} smalltitle3={'ZBrush'}/>
                        <PortfolioItemSmall video={"/videos/paws2.mp4"} title={'NOTAI'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'} smalltitle={'Unreal Engine'} smalltitle2={'Maya'} smalltitle3={'EmberGen'}/>
                        <PortfolioItemSmall video={"/videos/paws3.mp4"} title={'Porsche contest'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'} smalltitle={'Unreal Engine'} smalltitle2={'Maya'} smalltitle3={'EmberGen'}/>
                    </div>
                    <PortfolioItemBig video={"/videos/paws.mp4"} title={'PAWS ON SOLANA'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'} smalltitle={'Unreal Engine'} smalltitle2={'ZBrush'} smalltitle3={'Houdini'}/>


                    <div className='Portfolio__portfolio-items'>
                        <PortfolioItemSmall video={"/videos/rebalance1.mp4"} title={'Bluewhale'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'} smalltitle={'Cinema4D'} smalltitle2={'Adobe after Effects'}/>
                        <PortfolioItemSmall video={"/videos/rebalance2.mp4"} title={'Bluewhale'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'} smalltitle={'Adobe after Effects'}/>
                        <PortfolioItemSmall video={"/videos/rebalance3.mp4"} title={'BlueWhale'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'} smalltitle={'Adobe after Effects'} smalltitle2={'Unreal Engine'}/>
                    </div>
                    <PortfolioItemBig video={"/videos/rebalance.mp4"} title={'Rebalance'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'} smalltitle={'Unreal Engine'} smalltitle2={'Adobe after Effects'}/>

                    <div className='Portfolio__portfolio-items'>
                        <PortfolioItemSmall video={"/videos/soldatiki1.mp4"} title={'NextMate AI'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'} smalltitle={'Unreal Engine'} smalltitle2={'Maya'} smalltitle3={'EmberGen'}/>
                        <PortfolioItemSmall video={"/videos/soldatiki2.mp4"} title={'NotAi'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'} smalltitle={'Unreal Engine'} smalltitle2={'EmberGen'} smalltitle3={'ZBrush'}/>
                        <PortfolioItemSmall video={"/videos/soldatiki3.mp4"} title={'PlanetQuest'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'} smalltitle={'Unreal Engine'} smalltitle2={'Maya'}/>
                    </div>
                    <PortfolioItemBig video={"/videos/soldatiki.mp4"} title={'NOTAI'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'} smalltitle={'Unreal Engine'} smalltitle2={'Maya'} smalltitle3={'EmberGen'} smalltitle4={'ZBrush'} />


                    <div className='Portfolio__portfolio-items'>
                        <PortfolioItemSmall video={"/videos/cheliki1.mp4"} title={'MEMEFI X LINEA'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'} smalltitle={'Unreal Engine'} smalltitle2={'Maya'}/>
                        <PortfolioItemSmall video={"/videos/cheliki2.mp4"} title={'Memefi stone'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'} smalltitle={'Unreal Engine'} smalltitle2={'Maya'} smalltitle3={'ZBrush'}/>
                        <PortfolioItemSmall video={"/videos/cheliki3.mp4"} title={'RTFKT CREATOR'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'} smalltitle={'Unreal Engine'} smalltitle2={'Maya'}/>
                    </div>
                    <PortfolioItemBig video={"/videos/cheliki.mp4"} title={'MEMEFI CG TRAILER'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'} smalltitle={'Unreal Engine'} smalltitle2={'ZBrush'} smalltitle3={'Maya'}/>
                    {/*  */}
                    <div className='Portfolio__portfolio-items'>
                        <PortfolioItemSmall video={"/videos/Polemosnew.mp4"} title={'Polemos'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'} smalltitle={'Unreal Engine'} smalltitle2={'Maya'}/>
                        <PortfolioItemSmall video={"/videos/Realgamenew.mp4"} title={'REALGAMES FOR MEMES'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'} smalltitle={'Unreal Engine'}/>
                        <PortfolioItemSmall video={"/videos/Blocknitenew.mp4"} title={'Teaser Blocknite'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'} smalltitle={'Unreal Engine'} smalltitle2={'Maya'} smalltitle3={'Embergen'}/>
                    </div>
                    <PortfolioItemBig video={"/videos/Hipponew.mp4"} title={'Hippo Redesign'} description={'Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} date={'24.03'} smalltitle={'Unreal Engine'} smalltitle2={'ZBrush'} smalltitle3={'Maya'}/>

                </div>
                <Trusted />
                {/* <div className='Portfolio__services'>
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
                </div> */}
                <FAQ />
                <Footer />
            </div>

        </div>
    )
}