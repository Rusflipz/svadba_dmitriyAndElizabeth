import React, {useEffect, useState} from 'react';
// @ts-ignore
import './CountDown.scss'

function CountDown() {

    const [time, setTime] = useState({
        "d": 0,
        "h": 0,
        "m": 0,
        "s": 0
    })

    useEffect(() => {
        setInterval(setCurrentTime, 1000)
    }, [])

    function setCurrentTime() {
        const currentDate = new Date();
        const weddingDate = new Date(2023, 9, 7, 12, 20, 0);
        const differenceDate = +weddingDate - +currentDate
        if (differenceDate <= 0) {
            setTime(secondsToTime(0))
            return;
        }
        setTime(secondsToTime(differenceDate))
    }

    function secondsToTime(ms) {
        const seconds = Math.floor((ms / 1000) % 60);
        const minutes = Math.floor((ms / 1000 / 60) % 60);
        const hours = Math.floor((ms / 1000 / 60 / 60) % 24);
        const days = Math.floor((ms / 1000 / 60 / 60 / 24));

        return {
            "d": days,
            "h": hours,
            "m": minutes,
            "s": seconds
        };
    }

    return (
        <section className='countdown-block'>
            <div className='name-block__image-overlay'></div>
            <div className='countdown-block__container'>
                <p className='countdown-block__main-text'>7 октября 2023</p>
                <p className='countdown-block__text'>до свадьбы осталось</p>
                <div className='countdown-block__time-row'>
                    <div className='countdown-block__time-column'>
                        <p className='countdown-block__time-count'>{time.d}</p>
                        <p className='countdown-block__time-text'>Дней</p>
                    </div>
                    <div className='countdown-block__time-line'></div>
                    <div className='countdown-block__time-column'>
                        <p className='countdown-block__time-count'>{time.h}</p>
                        <p className='countdown-block__time-text'>Часов</p>
                    </div>
                    <div className='countdown-block__time-line'></div>
                    <div className='countdown-block__time-column'>
                        <p className='countdown-block__time-count'>{time.m}</p>
                        <p className='countdown-block__time-text'>Минут</p>
                    </div>
                    <div className='countdown-block__time-line'></div>
                    <div className='countdown-block__time-column'>
                        <p className='countdown-block__time-count'>{time.s}</p>
                        <p className='countdown-block__time-text'>Секунд</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CountDown;
