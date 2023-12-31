import React from 'react'
import { useEffect, useState } from 'react'

export default function PiCard({ name, ip, status }) {
    const [piHoleStatus, setPiHoleStatus] = useState('Checking')
    const [timerToggle, setTimerToggle] = useState(false)

    useEffect(() => {
        async function fetchPiHoleStatus() {
            try {
                const piHoleStatus = await fetch(
                      `/api/pihole?ip=${ip}&action=status`,
                      {method: 'GET'}
                )
                const piHoleStatusJson = await piHoleStatus.json()

                if (piHoleStatusJson.status === 'enabled') {
                    return <span className="text-success">Enabled</span>
                } else if (piHoleStatusJson.status === 'disabled') {
                    return <span className="text-error">Disabled</span>
                } else return piHoleStatusJson.status
            } catch (error) {
                return <span className="text-error">Error</span>
            }
        }

        let timerId = setTimeout(() => {
            setTimerToggle(!timerToggle)
        }, 1000)

        setPiHoleStatus(fetchPiHoleStatus())

        return () => {
            clearTimeout(timerId)
        }
    }, [timerToggle])

    return (
        <div className="card w-full bg-neutral shadow-xl p-4 mx-auto m-3">
            <div className="flex justify-between">
                <div>
                    <h1>
                        <span className="text-secondary">{name}</span>
                    </h1>
                    <div>{ip}</div>
                </div>
                <div className="inline-block align-text-bottom">
                    Status: {piHoleStatus}
                </div>
            </div>
        </div>
    )
}
