'use client'
import PauseCard from './PauseCard'
import SettingsCard from './SettingsCard'
import { useState, useEffect } from 'react'



export default function ContainerCard() {
    const [settingsPage, setSettingsPage] = useState(false)
    const [paused, setPaused] = useState(false)

    const [dataUpdated, setDataUpdated] = useState(false)

    async function saveSettings() {
        const test = fetch('/api/storage', {
            method: 'GET',
        })
        return test
    }

    useEffect(() => {
        async function getData(){
        const data = await saveSettings()
        const dataJSON = await data.json()

        setDataUpdated(dataJSON)
        }
        getData()
    }, [settingsPage])

    useEffect(() => {
        console.log('dataUpdated: ', dataUpdated)
    }, [dataUpdated])

    return (
        <div>
            {settingsPage ? (
                <SettingsCard setSettingsPage={setSettingsPage} />
            ) : (
                <PauseCard setSettingsPage={setSettingsPage} />
            )}
        </div>
    )
}
