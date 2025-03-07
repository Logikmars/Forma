import { useEffect, useRef, useState } from 'react';
import './Loader.scss';
export default ({ showLoader, setshowLoader }) => {

    const videoRef = useRef(null);
    const videoRef2 = useRef(null);
    const [canStop, setcanStop] = useState(false);

    // useEffect(() => {
    //     if (videoRef.current) {
    //     }
    // }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleTimeUpdate = () => {
            if (video.currentTime >= video.duration - 1) {
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
            videoRef2.current.play()
            setTimeout(() => {
                setshowLoader(false)
            }, 1000);
        }
    }, [startHide])

    return (
        <div className={`Loader ${canStop && 'Loader_canStop'} ${!showLoader && 'Loader_hide'}`} onClick={() => {
            if (canStop) {
                setstartHide(true)
            }
        }}>

            <div className='Loader_content free_img'>
                <video ref={videoRef} autoPlay muted playsInline >
                    <source src="/loader.mp4" type="video/mp4" />
                </video>
            </div>

            <div className={`Loader_content Loader_content_2 free_img`} style={{
                opacity: startHide ? 1 : 0
            }}>
                <video ref={videoRef2} muted playsInline >
                    <source src="/loaderEnd.mp4" type="video/mp4" />
                </video>
            </div>

        </div>
    )
}