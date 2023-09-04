import { useContext, useState, useEffect } from 'react'
import GlobalContext from './GlobalContext'

export default function GlobalProvider({ children }) {
    const serverURL = '/api/storage'

    // settings page state, is it open or not
    const [settingsPage, setSettingsPage] = useState(false)

    // pause state, is it paused or not
    const [paused, setPaused] = useState(false)

    // data from server
    const [serverData, setServerData] = useState(false)

    // modified data on settings card
    const [modifiedServerData, setModifiedServerData] = useState(serverData)

    const [pauseTimeout, setPauseTimeout] = useState(0)

    const [lastDisabledTime, setLastDisabledTime] = useState(0)

    const [selectedDuration, setSelectedDuration] = useState("5")

    function resumeCountdown() {
        if (!modifiedServerData || modifiedServerData.length === 0) {
            return
        }

        console.log(modifiedServerData)

        if (modifiedServerData && modifiedServerData[0].lastDisabledTime) {
            const serverTimes = parseInt(modifiedServerData[0].lastDisabledTime)
            const currentTime = Date.now()

            if (currentTime > serverTimes) {
                return
            }

            const remainingSeconds = (serverTimes - currentTime) / 1000

            console.log('remaining seconds: ' + remainingSeconds)

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
            await fetch(
                `http://${server.address}/admin/api.php?disable=300&auth${server.apiKey}`
            )
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
        const addresses = modifiedServerData.map((item) => item.serverAddress)

        console.log(addresses)

        addresses.forEach(async (address) => {
            await fetch(`http://${address}/admin/api.php?enable&auth`)
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
        setSettingsPage(false)
    }

    // move a card up in the list
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

    // move a card down in the list
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

    // add a card to the list
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

    // remove a card from the list
    function removeCard(id) {
        const newArray = modifiedServerData.filter((item) => item.id !== id)
        setModifiedServerData(newArray)
    }

    // get data from server
    async function getSettings() {
        const data = await fetch(serverURL, {
            method: 'GET',
        })
        const JSONdata = await data.json()
        setServerData(JSONdata)
    }

    // save data to server and refresh local data
    async function saveSettings(newData) {
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

        // close settings page and refresh data
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

    // create new array to modify
    useEffect(() => {
        if (!serverData) return

        console.log('serverData: ' + JSON.stringify(serverData))

        serverData.map((item, index) => {
            item.serverId = item.id
            item.id = index + 1
            lastDisabledTime && setLastDisabledTime(item.lastDisabledTime)
        })

        setModifiedServerData(serverData)
    }, [serverData])

    useEffect(() => {
        if (lastDisabledTime === 0) return

        console.log('lastDisabledTime: ' + lastDisabledTime)
    }, [lastDisabledTime])

    useEffect(() => {
        console.log('modifiedServerData: ' + JSON.stringify(modifiedServerData))

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
        modifiedServerData,
        setModifiedServerData,
        selectedDuration,
        setSelectedDuration,
        addCard,
        moveCardUp,
        moveCardDown,
        removeCard,
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}
