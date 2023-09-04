import React from 'react'
import { useEffect, useState } from 'react'

import { useGlobalContext } from '../../context/GlobalContext'

export default function CountdownTimer({ duration }) {
    const { setPauseTimeout, setPaused } = useGlobalContext()

    const [countdown, setCountdown] = useState(duration)

    const [countdownHour, setCountdownHour] = useState(0)
    const [countdownMinute, setCountdownMinute] = useState(0)
    const [countdownSecond, setCountdownSecond] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (countdown > 0) {
                setCountdown(countdown - 1)

                setCountdownHour(Math.floor(countdown / 3600))
                setCountdownMinute(Math.floor((countdown % 3600) / 60))
                setCountdownSecond(Math.floor((countdown % 3600) % 60))
            }
            if (countdown < 0) {
                setPaused(false)
                setPauseTimeout(undefined)
            }
        }, 1000)

        return () => clearTimeout(timer)
    }, [countdown])

    return (
        <span className="countdown font-mono text-2xl">
            <span style={{ '--value': countdownHour }}></span>:
            <span style={{ '--value': countdownMinute }}></span>:
            <span style={{ '--value': countdownSecond }}></span>
        </span>
    )
}
