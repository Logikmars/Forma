import { useEffect, useRef, useState } from 'react';
import './Loader.scss';
export default () => {
    const videoRef = useRef(null);
    const [canStop, setcanStop] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleTimeUpdate = () => {
            if (video.duration && video.currentTime >= video.duration - 0.5) {
                video.pause(); // Ставим паузу за 0.5 секунды до конца
                setcanStop(true)
            }
        };

        video.addEventListener("timeupdate", handleTimeUpdate);
        return () => video.removeEventListener("timeupdate", handleTimeUpdate);
    }, []);
    const [hide, sethide] = useState(false);


    return (
        <div className={`Loader ${canStop && 'Loader_canStop'} ${hide && 'Loader_hide'}`} onClick={() => {
            sethide(true)
        }}>
            <video ref={videoRef} autoPlay muted playsInline >
                <source src="/loader.mp4" type="video/mp4" />
            </video>
        </div>
    )
}