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

    // move a card up in the list
    function moveUp(id) {
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

    // add a card to the list

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
        console.log('JSONdata: ', JSONdata)
        setServerData(JSONdata)
    }

    // save data to server and refresh local data
    async function saveSettings(serverData) {
        console.log('serverData: ', serverData)
        await fetch(serverURL, {
            method: 'DELETE',
        })
        await fetch(serverURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(serverData),
        })
        setSettingsPage(false)
        getSettings()
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
        setModifiedServerData(serverData)
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
        modifiedServerData,
        setModifiedServerData,
        moveUp,
        removeCard,
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}
