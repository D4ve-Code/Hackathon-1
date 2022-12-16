import './Counter.css';
import imageCount from '../assets/img/img-counter1.jpg'
import React, { useState, useEffect } from "react"

const Counter = ({ deadline }) => {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            const remainingTime = deadline - Date.now()
            setDays(Math.floor(remainingTime / (1000 * 60 * 60 * 24)))
            setHours(Math.floor((remainingTime / (1000 * 60 * 60)) % 24))
            setMinutes(Math.floor((remainingTime / (1000 * 60)) % 60))
            setSeconds(Math.floor((remainingTime / 1000) % 60))
        }, 1000)
        return () => clearInterval(interval)
    }, [deadline])

    return (
        <div className='countbox'>
            <img src={imageCount} alt='tête R2D2'></img>
             <h2 className='countText'>Prochain tournoi  :</h2>
            <div className='countText'>
                {days} jours {hours} heures {minutes} minutes {seconds} secondes
             </div>
        </div>
    )
} 


export default Counter