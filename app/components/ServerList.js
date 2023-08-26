import React from 'react'
import { AnimatePresence } from 'framer-motion'
import TrashcanAnimation from './animations/TrashcanAnimation'
import TrashIcon from './icons/TrashIcon'


export default function ServerList({ serverList, editMode }) {
    return (
        <>
            {serverList.map((server, index) => {
                return (
                    <tr key={server.id} className="h-20">
                        <th>{index + 1}</th>
                        <td>
                            <input
                                value={server.serverName}
                                placeholder="Type here"
                                className="input input-primary w-full max-w-xs"
                                disabled={!editMode}
                            />
                        </td>
                        <td>
                            <input
                                value={server.serverAddress}
                                placeholder="Type here"
                                className="input input-primary w-full max-w-xs"
                                disabled={!editMode}
                            />
                            
                        </td>
                        <td>
                            {!editMode && 'Online'}
                        </td>
                        <td>
                            <div className="badge badge-success">Blocking</div>
                        </td>
                        <td>
                            <AnimatePresence>
                                {editMode && (
                                    <TrashcanAnimation>
                                        <button className="btn btn-small btn-ghost">
                                            <TrashIcon />
                                        </button>
                                    </TrashcanAnimation>
                                )}
                            </AnimatePresence>
                        </td>
                    </tr>
                )
            })}
        </>
    )
}
