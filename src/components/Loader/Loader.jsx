import { useEffect, useRef, useState } from 'react';
import './Loader.scss';
export default ({ showLoader, setshowLoader }) => {

    const videoRef = useRef(null);
    const [canStop, setcanStop] = useState(false);

    useEffect(() => {
        if (videoRef.current) {
            // videoRef.current.playbackRate = 10
        }
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleTimeUpdate = () => {
            if (video.currentTime >= video.duration - 4) {
                video.pause(); // Ставим паузу за 0.5 секунды до конца
                setcanStop(true)
            }
        };

        video.addEventListener("timeupdate", handleTimeUpdate);
        return () => video.removeEventListener("timeupdate", handleTimeUpdate);
    }, []);
    const [startHide, setstartHide] = useState(false);

    useEffect(() => {
        if (startHide) {
            setTimeout(() => {
                setshowLoader(false)
            }, 1000);
        }
    }, [startHide])

    const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);

    useEffect(() => {
        const handleResize = () => setIsLandscape(window.innerWidth > window.innerHeight);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const videoSrc = isLandscape ? "/loader.mp4" : "/loaderMobile.mp4";


    return (
        <div className={`Loader ${!showLoader && 'Loader_hide'}`} onClick={() => {
            if (canStop) {
                setstartHide(true)
            }
        }}>
            <div className='Loader_bg free_img'>
                <div className='Loader_bg_inner'></div>
            </div>

            <div className={`Loader_content  ${canStop && 'Loader_canStop'} free_img`}>
                <video ref={videoRef} key={videoSrc} autoPlay muted playsInline >
                    <source src={videoSrc} type="video/mp4" />
                </video>
            </div>

            <div className='Loader_button free_img' style={{
                opacity: canStop ? 1 : 0,
                transform: `scale(${startHide ? 50 : 1})`
            }}>
                <div className='Loader_button_wrapper_1'>
                    <div className='Loader_button_wrapper_2'>
                        <div className='Loader_button_wrapper_3 bowler_fonts'>
                            START
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className={`Loader_content Loader_content_2 free_img`} style={{
                opacity: startHide ? 1 : 0
            }}>
                <video ref={videoRef2} muted playsInline >
                    <source src="/loaderEnd.mp4" type="video/mp4" />
                </video>
            </div> */}

        </div>
    )
}