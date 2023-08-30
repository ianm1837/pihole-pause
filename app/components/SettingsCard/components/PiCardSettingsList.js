import React from 'react'
import PiCardSettings from './PiCardSettings'
import PlusButton from './PlusButton'
import { useState, useEffect } from 'react'
import { useGlobalContext } from '../../context/GlobalContext'

export default function PiCardSettingsList() {
    const { serverData, modifiedServerData, setModifiedServerData } = useGlobalContext()




    useEffect(() => {
                console.log(modifiedServerData)
    }, [modifiedServerData])

    async function handleInputChange(id, newName, newAddress, newAPIKey) {
        const newServerData = modifiedServerData.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    serverName: newName,
                    serverAddress: newAddress,
                    serverAPIKey: newAPIKey,
                }
            }
            return item
        })
        setModifiedServerData(newServerData)
    }

    return (
        <div className="flex-col m-auto min-h-[18rem]">
            {modifiedServerData.map((item) => {
                return (
                    <PiCardSettings
                        key={item.id}
                        id={item.id}
                        serverName={item.serverName}
                        serverAddress={item.serverAddress}
                        serverAPIKey={item.serverAPIKey}
                        handleInputChange={handleInputChange}
                    />
                )
            })}

            <div className="w-100 flex align-middle">
                <PlusButton className="m-auto" />
            </div>
        </div>
    )
}
