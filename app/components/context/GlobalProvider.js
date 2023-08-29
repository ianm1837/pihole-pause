import { useContext, useState, useEffect } from 'react'
import GlobalContext from './GlobalContext'

export default function GlobalProvider({ children }) {
    // settings page state, is it open or not
    const [settingsPage, setSettingsPage] = useState(false)

    // pause state, is it paused or not
    const [paused, setPaused] = useState(false)

    // data from server
    const [serverData, setServerData] = useState(false)

    // get data from server
    async function getSettings() {
        const data = await fetch('/api/storage', {
            method: 'GET',
        })
        const JSONdata = await data.json()
        console.log('JSONdata: ', JSONdata)
        setServerData(JSONdata)
    }

    // save data to server and refresh local data
    async function saveSettings() {
        const data = fetch('/api/storage', {
            method: 'GET',
        })
        setSettingsPage(false)
        console.log('wat')
        return data
    }

    function openSettingsPage() {
        setSettingsPage(true)
    }

    function closeSettingsPage() {
        setSettingsPage(false)
    }

    // get data on page load
    useEffect(() => {
        async function getData() {
            getSettings()
        }
        getData()
    }, [])

    // get data

    // set data

    // refresh data on page
    //   only when data is updated

    useEffect(() => {
        console.log('serverData: ', serverData)
    }, [serverData])

    // list of items to be made available to context
    const value = {
        getSettings,
        saveSettings,
        settingsPage,
        openSettingsPage,
        paused,
        setPaused,
        serverData,
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}
