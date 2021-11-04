import { useEffect, useRef, useState } from 'react'
import './Clock.css'

function getTime(d){

    const ret = {};

    //seconds
    const secs = d.getSeconds().toString().padStart('2', 0);
    ret.firstSecond = secs.charAt(0);
    ret.secondSecond = secs.charAt(1);

    //minutes
    const minutes = d.getMinutes().toString().padStart('2', 0);
    ret.firstMinute = minutes.charAt(0);
    ret.secondMinute = minutes.charAt(1);

    //hours
    const hours = d.getHours().toString().padStart('2', 0);
    ret.firstHour = hours.charAt(0);
    ret.secondHour = hours.charAt(1);

    return ret;

}


function Clock({ country, timezone }) {
    //var {country,timezone} = props; mettendo props nei parametri che riceve la funzione
    const t = Date.now() + 3600 * timezone * 1000;
    const dateIni = new Date(t);
    const defaultTime = getTime(dateIni);
    const [date, setDate] = useState(dateIni)

    const [firstSecond, setFirstSecond] = useState(defaultTime.firstSecond)
    const [secondSecond, setSecondSecond] = useState(defaultTime.secondSecond)

    const [firstMinute, setFirstMinute] = useState(defaultTime.firstMinute)
    const [secondMinute, setSecondMinute] = useState(defaultTime.secondMinute)

    const [firstHour, setFirstHour] = useState(defaultTime.firstHour)
    const [secondHour, setSecondHour] = useState(defaultTime.secondHour)

    const [firstMove, setFirstMove] = useState('')


    useEffect(() => {

        const interval = setInterval(() => {
            const time = date.getTime() + 1000;
            const d = new Date(time);
            const defaultTime = getTime(dateIni);
            
            //seconds
            if(firstSecond != defaultTime.firstSecond){
                setFirstMove('move');
                setTimeout(() => {
                    setFirstSecond(defaultTime.firstSecond);
                }, 1000);
            } else{
                setFirstMove('');
            }
            
            if (secondSecond != defaultTime.secondSecond) {
                setSecondSecond(defaultTime.secondSecond);
            }

            //minutes
            if (firstMinute != defaultTime.firstMinute) {
                setFirstMinute(defaultTime.firstMinute);
            }

            if (secondMinute != defaultTime.secondMinute) {
                setSecondMinute(defaultTime.secondMinute);
            }

            //hours
            if (firstHour != defaultTime.firstHour) {
                setFirstHour(defaultTime.firstHour);
            }

            if (secondHour != defaultTime.secondHour) {
                setSecondHour(defaultTime.secondHour);
            }

            setDate(d);
        }, 1000)

        return () => {
            clearInterval(interval);
        }
    }, [date])



    return (
        <div className="clock">
            <div className="hours">
                <div className="first">
                    <div className="number">{firstHour}</div>
                </div>
                <div className="second">
                    <div className="number">{secondHour}</div>
                </div>
            </div>
            <div className="tick">:</div>
            <div className="minutes">
                <div className="first">
                    <div className="number">{firstMinute}</div>
                </div>
                <div className="second">
                    <div className="number">{secondMinute}</div>
                </div>
            </div>
            <div className="tick">:</div>
            <div className="seconds">
                <div className="first">
                    <div className={'second ' + firstMove}>{firstSecond}</div>
                </div>
                <div className="second infinite">
                    <div className="number">{secondSecond}</div>
                </div>
            </div>
        </div>
    )
}

export default Clock;