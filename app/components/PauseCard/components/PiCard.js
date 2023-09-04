import React from 'react'
import { useEffect, useState } from 'react'

export default function PiCard({ name, ip, status }) {
    const [piHoleStatus, setPiHoleStatus] = useState('')
    const [timerToggle, setTimerToggle] = useState(false)

    useEffect(() => {
        async function fetchPiHoleStatus() {
            try {
                const piHoleStatus = await fetch(
                    `http://${ip}/admin/api.php?status`
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
                        <span className="">{name}</span>
                    </h1>
                    <div>{ip}</div>
                </div>
                <div className="inline-block align-text-bottom flex-col w-5/12">
                    <div className="text-xxs">STATUS</div>
                    <div className='text-xl'>{piHoleStatus}</div>
                </div>
            </div>
        </div>
    )
}
