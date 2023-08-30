import TrashIcon from '../../icons/TrashIcon'
import UpArrow from '../../icons/UpArrow'
import DownArrow from '../../icons/DownArrow'
import { useState } from 'react'
import { useGlobalContext } from '../../context/GlobalContext'

export default function PiCardSettings({
    id,
    serverName,
    serverAddress,
    serverAPIKey,
    handleInputChange,
}) {

    const { moveUp, moveDown, removeCard } = useGlobalContext()

    return (
        <div className="flex items-center bg-neutral rounded-xl p-3 m-3 ">
            <input
                type="text"
                placeholder="PiHole Name"
                className="input input-bordered input-secondary w-full max-w-xs m-1"
                value={serverName}
                onChange={(e) =>
                    handleInputChange(
                        id,
                        e.target.value,
                        serverAddress,
                        serverAPIKey
                    )
                }
            />
            <input
                type="text"
                placeholder="IP Address"
                className="input input-bordered input-secondary w-full max-w-xs m-1"
                value={serverAddress}
                onChange={(e) =>
                    handleInputChange(
                        id,
                        serverName,
                        e.target.value,
                        serverAPIKey
                    )
                }
            />
            <input
                type="text"
                placeholder="API Key"
                className="input input-bordered input-secondary w-full max-w-xs m-1"
                value={serverAPIKey ? serverAPIKey : ''}
                onChange={(e) =>
                    handleInputChange(
                        id,
                        serverName,
                        serverAddress,
                        e.target.value
                    )
                }
            />
            <button className="btn btn-outline btn-primary m-1" onClick={() => {moveUp(id)}}>
                <UpArrow />
            </button>
            <button className="btn btn-outline btn-primary m-1">
                <DownArrow />
            </button>
            <button className="btn btn-outline btn-error m-1" onClick={() => removeCard(id)}>
                <TrashIcon />
            </button>
        </div>
    )
}
