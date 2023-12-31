import { useContext, useState, useEffect } from 'react'
import GlobalContext from './GlobalContext'

export default function GlobalProvider({ children }) {
    const serverURL = '/api/storage'

    const [settingsPage, setSettingsPage] = useState(false)
    const [paused, setPaused] = useState(false)
    const [serverData, setServerData] = useState(false)
    const [modifiedServerData, setModifiedServerData] = useState(serverData)
    const [pauseTimeout, setPauseTimeout] = useState(0)
    const [lastDisabledTime, setLastDisabledTime] = useState(0)
    const [selectedDuration, setSelectedDuration] = useState('5')
    const [piholeFetchError, setError] = useState()
    const [communicationsError, setCommunicationsError] = useState(false)

    async function triggerCommunicationsError() {
        setCommunicationsError(true)
        setTimeout(function () {
            setCommunicationsError(false)
        }, 10000)
    }

    // need to create toast with error
    async function handlePiholeFetch(url) {
        try {
            await fetch(url)
            return
        } catch (error) {
            if (error) {
                setError(error)
            }
            return
        }
    }

    function resumeCountdown() {
        if (!modifiedServerData || modifiedServerData.length === 0) {
            return
        }

        if (modifiedServerData && modifiedServerData[0].lastDisabledTime) {
            const serverTimes = parseInt(modifiedServerData[0].lastDisabledTime)
            const currentTime = Date.now()

            if (currentTime > serverTimes) {
                return
            }

            const remainingSeconds = (serverTimes - currentTime) / 1000

            setPauseTimeout(remainingSeconds - 2)
        }
    }

    async function pauseIt(minutes = 5) {
        const servers = modifiedServerData.map((server) => {
            const data = {
                address: server.serverAddress,
                apiKey: server.serverAPIKey,
            }
            return data
        })

        //TODO: need to handle error and create toast
        servers.forEach(async (server) => {
            try {
                await fetch(
                    `/api/pihole?ip=${server.address}&action=disable&duration=300&auth=${server.apiKey}`
                )
            } catch (error) {
                console.log(error)
                triggerCommunicationsError()
            }
        })

        const duration = minutes * 60

        const newTime = Date.now() + duration * 1000
        const newTimeToString = newTime.toString()

        setLastDisabledTime(newTimeToString)

        const withLastDisabledTime = modifiedServerData.map((item) => {
            item.lastDisabledTime = newTimeToString
            return item
        })

        setModifiedServerData(withLastDisabledTime)
        saveSettings(withLastDisabledTime)
        setPaused(true)
    }

    async function restartIt() {
        const servers = modifiedServerData.map((item) => {
            return {
                address: item.serverAddress,
                apiKey: item.apiKey,
            }
        })

        servers.forEach(async (server) => {
            try {
                await handlePiholeFetch(
                    `/api/pihole?ip=${server.address}&action=enable&auth=${
                        server.apiKey ? server.apiKey : ''
                    }`
                )
            } catch (error) {
                console.log(error)
                triggerCommunicationsError()
            }
        })
        setPaused(false)
        setPauseTimeout(0)

        const removeDisabledTime = modifiedServerData.map((item) => {
            item.lastDisabledTime = '0'
            return item
        })

        saveSettings(removeDisabledTime)
    }

    function openSettingsPage() {
        setSettingsPage(true)
    }

    function closeSettingsPage() {
        setModifiedServerData(serverData)
        setSettingsPage(false)
    }

    function moveCardUp(id) {
        const itemToMove = modifiedServerData.find((item) => item.id === id)

        const filteredArray = modifiedServerData.filter(
            (item) => item.id !== id
        )

        const newArray = [
            ...filteredArray.slice(0, id - 2),
            itemToMove,
            ...filteredArray.slice(id - 2),
        ]

        newArray.forEach((item, index) => {
            item.id = index + 1
        })

        setModifiedServerData(newArray)
    }

    function moveCardDown(id) {
        const itemToMove = modifiedServerData.find((item) => item.id === id)

        const filteredArray = modifiedServerData.filter(
            (item) => item.id !== id
        )

        const newArray = [
            ...filteredArray.slice(0, id),
            itemToMove,
            ...filteredArray.slice(id),
        ]

        newArray.forEach((item, index) => {
            item.id = index + 1
        })

        setModifiedServerData(newArray)
    }

    function addCard() {
        let newArray = []

        if (modifiedServerData.length !== 0) {
            const lastCard = modifiedServerData[modifiedServerData.length - 1]
            const lastCardId = lastCard.id

            const newCard = {
                id: lastCardId + 1,
                serverName: '',
                serverAddress: '',
                serverAPIKey: '',
            }
            newArray = [...modifiedServerData, newCard]
        }

        if (modifiedServerData.length === 0) {
            const newCard = {
                id: 1,
                serverName: '',
                serverAddress: '',
                serverAPIKey: '',
            }
            newArray = [newCard]
        }

        setModifiedServerData(newArray)
    }

    function removeCard(id) {
        const newArray = modifiedServerData.filter((item) => item.id !== id)
        setModifiedServerData(newArray)
    }

    async function getSettings() {
        try {
            const data = await fetch(serverURL, {
                method: 'GET',
            })
            const JSONdata = await data.json()
            setServerData(JSONdata)
        } catch (error) {
            console.log(error)
            triggerCommunicationsError()
        }
    }

    async function saveSettings(newData) {
        try{
            // delete all data from server
            await fetch(serverURL, {
                method: 'DELETE',
            })
    
            // add new data to server
            await fetch(serverURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newData),
            })
        }
        catch(error){
            console.log(error)
            triggerCommunicationsError()
        }

        closeSettingsPage()
        getSettings()
    }

    // get data on page load
    useEffect(() => {
        async function getData() {
            getSettings()
        }
        getData()
    }, [])

    // create new array to modify once data is fetched
    useEffect(() => {
        if (!serverData) return

        serverData.map((item, index) => {
            item.serverId = item.id
            item.id = index + 1
            lastDisabledTime && setLastDisabledTime(item.lastDisabledTime)
        })

        setModifiedServerData(serverData)
    }, [serverData])

    // once data is loaded check if PiHoles are currently paused
    useEffect(() => {
        if (modifiedServerData) {
            resumeCountdown()
        }
    }, [modifiedServerData])

    // list of items to export to global context
    const value = {
        getSettings,
        saveSettings,
        settingsPage,
        openSettingsPage,
        closeSettingsPage,
        pauseIt,
        restartIt,
        paused,
        setPaused,
        pauseTimeout,
        setPauseTimeout,
        serverData,
        modifiedServerData,
        setModifiedServerData,
        selectedDuration,
        setSelectedDuration,
        addCard,
        moveCardUp,
        moveCardDown,
        removeCard,
        communicationsError,
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}
