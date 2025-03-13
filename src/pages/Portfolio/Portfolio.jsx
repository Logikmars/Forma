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
        { number: '01', title: 'CGI', description: 'CGI is digital graphics and animation created by computers. It’s used for realistic visual effects, 3D models, and animations in films, advertising, and games.', img: '/img/services.png', subtitle: '(Computer-Generated Imagery)', border: false, video: '/cgi.mp4' },
        { number: '02', title: 'Motion Design', description: 'Motion Design is animated graphic design that brings visuals to life through movement. It’s used in advertising, interfaces, presentations, and videos to create engaging storytelling.', img: '/img/services.png', subtitle: '', border: true, video: '/motionDesign.mp4' },
        { number: '03', title: 'VFX (Visual Effects)', description: 'VFX (Visual Effects) are digital effects that enhance or modify visuals in videos. They are used in films, advertising, and games to create realistic or fantastical scenes.', img: '/img/services.png', subtitle: '(visual effects)', border: false, video: '/vfx.mp4' },
        { number: '04', title: 'GFX Design', description: 'GFX Design (Graphic Design) is the creation of visual content for brands, advertising, and media. It involves working with images, typography, and composition to convey ideas and emotions.', img: '/img/services.png', subtitle: '', border: true, video: '/gfx.mp4' }
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

    const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);

    useEffect(() => {
        const handleResize = () => setIsLandscape(window.innerWidth > window.innerHeight);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const videoSrc = isLandscape ? "/utpVideo.mp4" : "/utpVideoMobile.mp4";



    return (
        <div className='Portfolio'>
            <div className='Portfolio__hero'>
                <div className='Portfolio__hero_scroll free_img'>
                    <div className='Portfolio__hero_scroll_inner'>
                        <div className='Portfolio__hero_scroll_anim_el Portfolio__hero_scroll_anim_el_1 free_img'>
                            <img src="/img/arrowDown.svg" alt="" />
                        </div>
                        <div className='Portfolio__hero_scroll_anim_el Portfolio__hero_scroll_anim_el_2 free_img'>
                            <img src="/img/arrowDown.svg" alt="" />
                        </div>
                        <div className='Portfolio__hero_scroll_anim_el Portfolio__hero_scroll_anim_el_3 free_img'>
                            <img src="/img/arrowDown.svg" alt="" />
                        </div>
                        <div className='Portfolio__hero_scroll_text bowler_fonts'>
                            SCROLL DOWN
                        </div>
                    </div>
                </div>
                <div className='Portfolio__hero-video'>
                    <video key={videoSrc} autoPlay muted playsInline loop>
                        <source src={videoSrc} type="video/mp4" />
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
                <div className='Portfolio__portfolio' ref={containerRef} id='portfolio'>
                    <h2 className='bowler_fonts orange Portfolio__portfolio-title'>PORTFOLIO</h2>
                    <div className='Portfolio__portfolio-items'>
                        <PortfolioItemSmall
                            video={"/videos/paws1.mp4"}
                            title={'Sundog X Trump'}
                            description={'Created a 3D animation for the Sundog x Trump collaboration with detailed modeling and realistic rendering.'}
                            date={'24.03'}
                            smalltitle={'Unreal Engine'}
                            smalltitle2={'Maya'}
                            smalltitle3={'ZBrush'}
                            link='SunDogTrump'
                        />
                        <PortfolioItemSmall
                            video={"/videos/paws2.mp4"}
                            title={'NOTAI: Begin Video'}
                            description={'First video in a three-part marketing series for NOTAI, setting the project`s visual style with atmospheric effects and dynamic editing.'}
                            date={'24.03'}
                            smalltitle={'Unreal Engine'}
                            smalltitle2={'Maya'}
                            smalltitle3={'EmberGen'}
                        />
                        <PortfolioItemSmall
                            video={"/videos/paws3.mp4"}
                            title={'Porsche Contest Entry'}
                            description={'Contest entry for Porsche featuring high-end 3D visuals, dynamic camera work, and a highly detailed car model.'}
                            date={'24.03'}
                            smalltitle={'Unreal Engine'}
                            smalltitle2={'Maya'}
                            smalltitle3={'EmberGen'}
                        />
                    </div>
                    <PortfolioItemBig
                        video={"/videos/paws.mp4"}
                        title={'PAWS ON SOLANA'}
                        description={'Announcement animation for PAWS on Solana with procedural effects and a unique stylized look.'}
                        date={'24.03'}
                        smalltitle={'Unreal Engine'}
                        smalltitle2={'ZBrush'}
                        smalltitle3={'Houdini'}
                        link={'PAWS'}
                    />

                    <div className='Portfolio__portfolio-items'>
                        <PortfolioItemSmall
                            video={"/videos/rebalance1.mp4"}
                            title={'BlueWhale Announcement'}
                            description={'Motion design video for the BlueWhale announcement, featuring smooth animations, stylish typography, and seamless transitions.'}
                            date={'24.03'}
                            smalltitle={'Cinema 4D'}
                            smalltitle2={'Adobe After Effects'}
                            link='Bw'
                        />
                        <PortfolioItemSmall
                            video={"/videos/rebalance2.mp4"}
                            title={'BlueWhale Teaser Trailer'}
                            description={'A cinematic teaser trailer for BlueWhale, building anticipation with immersive visuals.'}
                            date={'24.03'}
                            smalltitle={'Adobe After Effects'}
                            link='Bw'
                        />
                        <PortfolioItemSmall
                            video={"/videos/rebalance3.mp4"}
                            title={'BlueWhale Trailer'}
                            description={'Full-length promotional trailer combining real-time rendering with high-end post-production effects.'}
                            date={'24.03'}
                            smalltitle={'Adobe After Effects'}
                            smalltitle2={'Unreal Engine'}
                            link='Bw'
                        />
                    </div>
                    <PortfolioItemBig
                        video={"/videos/rebalance.mp4"}
                        title={'Rebalance'}
                        description={'Promotional video for the Rebalance project with dynamic visuals and engaging motion design.'}
                        date={'24.03'}
                        smalltitle={'Unreal Engine'}
                        smalltitle2={'Adobe After Effects'}
                    />

                    <div className='Portfolio__portfolio-items'>
                        <PortfolioItemSmall
                            video={"/videos/soldatiki1.mp4"}
                            title={'NextMate AI'}
                            description={'A futuristic cinematic trailer for NextMate.AI, emphasizing AI-driven themes and sleek design.'}
                            date={'24.03'}
                            smalltitle={'Unreal Engine'}
                            smalltitle2={'Maya'}
                            smalltitle3={'EmberGen'}
                        />
                        <PortfolioItemSmall
                            video={"/videos/soldatiki2.mp4"}
                            title={'NOTAI: Finale'}
                            description={'Final video in the NOTAI series, wrapping up the visual storytelling with high-quality cinematics.'}
                            date={'24.03'}
                            smalltitle={'Unreal Engine'}
                            smalltitle2={'EmberGen'}
                            smalltitle3={'ZBrush'}
                        />
                        <PortfolioItemSmall
                            video={"/videos/soldatiki3.mp4"}
                            title={'PlanetQuest'}
                            description={'Fast-paced announcement video for PlanetQuest with stunning space-themed visuals.'}
                            date={'24.03'}
                            smalltitle={'Unreal Engine'}
                            smalltitle2={'Maya'}
                        />
                    </div>
                    <PortfolioItemBig
                        video={"/videos/soldatiki.mp4"}
                        title={'NOTAI: Second'}
                        description={'Second video in the NOTAI series, expanding on the project’s signature visual style.'}
                        date={'24.03'}
                        smalltitle={'Unreal Engine'}
                        smalltitle2={'Maya'}
                        smalltitle3={'EmberGen'}
                        smalltitle4={'ZBrush'}
                    />

                    <div className='Portfolio__portfolio-items'>
                        <PortfolioItemSmall
                            video={"/videos/cheliki1.mp4"}
                            title={'MEMEFI X LINEA'}
                            description={'Collaboration video for Memefi x Linea, featuring dynamic motion design and high-quality rendering.'}
                            date={'24.03'}
                            smalltitle={'Unreal Engine'}
                            smalltitle2={'Maya'}
                            link='MemefiXLinea'
                        />
                        <PortfolioItemSmall
                            video={"/videos/cheliki2.mp4"}
                            title={'Memefi Stone Meme Boss'}
                            description={'CG trailer showcasing a game character from MEMEFI with detailed animation and high-end visuals.'}
                            date={'24.03'}
                            smalltitle={'Unreal Engine'}
                            smalltitle2={'Maya'}
                            smalltitle3={'ZBrush'}
                        />
                        <PortfolioItemSmall
                            video={"/videos/cheliki3.mp4"}
                            title={'AWARD WINNING RTFKT VIDEO - Takashi Murakami Pill'}
                            description={'Entry for the RTFKT contest, securing 3rd place with a visually striking digital artwork.'}
                            date={'24.03'}
                            smalltitle={'Unreal Engine'}
                            smalltitle2={'Maya'}
                        />
                    </div>
                    <PortfolioItemBig
                        video={"/videos/cheliki.mp4"}
                        title={'MEMEFI CG TRAILER'}
                        description={'A cinematic CG trailer for MEMEFI, designed to enhance branding with high-quality animation.'}
                        date={'24.03'}
                        smalltitle={'Unreal Engine'}
                        smalltitle2={'ZBrush'}
                        smalltitle3={'Maya'}
                        link='MemefiCG'
                    />

                    <div className='Portfolio__portfolio-items'>
                        <PortfolioItemSmall
                            video={"/videos/Polemosnew.mp4"}
                            title={'Polemos'}
                            description={'High-quality cinematic animation for the Polemos project, showcasing powerful visuals and deep storytelling.'}
                            date={'24.03'}
                            smalltitle={'Unreal Engine'}
                            smalltitle2={'Maya'}
                        />
                        <PortfolioItemSmall
                            video={"/videos/Realgamenew.mp4"}
                            title={'REALGAMES FOR MEMES'}
                            description={'Fun and engaging promotional video for REALGAMES, blending humor with high-end motion design.'}
                            date={'24.03'}
                            smalltitle={'Unreal Engine'}
                        />
                        <PortfolioItemSmall
                            video={"/videos/Blocknitenew.mp4"}
                            title={'Teaser Blocknite'}
                            description={'A teaser trailer for Blocknite, featuring a unique stylized approach and high-quality rendering.'}
                            date={'24.03'}
                            smalltitle={'Unreal Engine'}
                            smalltitle2={'Maya'}
                            smalltitle3={'Embergen'}
                            link='Blocknite'
                        />
                    </div>
                    <PortfolioItemBig
                        video={"/videos/Hipponew.mp4"}
                        title={'Hippo Redesign'}
                        description={'A reimagining of the Hippo brand with modern CG visuals and sleek motion design.'}
                        date={'24.03'}
                        smalltitle={'Unreal Engine'}
                        smalltitle2={'ZBrush'}
                        smalltitle3={'Maya'}
                        link='Hippo'
                    />


                </div>
                <Trusted />
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
                                video={item.video}
                            />
                        ))}
                    </div>
                </div>
                <FAQ />
            </div>

        </div>
    )
}