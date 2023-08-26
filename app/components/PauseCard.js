'use client'
import React from 'react'

import PauseButton from './PauseButton'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useAnimate, usePresence } from 'framer-motion'
import PencilIcon from './icons/PencilIcon'
import DoneIcon from './icons/DoneIcon'
import TrashIcon from './icons/TrashIcon'
import SpinningPencil from './animations/SpinningPencil'
import TrashcanAnimation from './animations/TrashcanAnimation'
import ServerList from './ServerList'
import ServerEditList from './ServerEditList'

export default function PauseCard({ serverList }) {
    const [editMode, setEditMode] = useState(false)
    const [paused, setPaused] = useState(false)

    function togglePaused() {
        setPaused(!paused)
    }

    function toggleEditMode() {
        setEditMode(!editMode)
    }

    return (
        <div className="container">
            <div className="flex flex-col items-center w-100">
                <div className="card w-10/12 bg-neutral shadow-xl grow m-8 pb-14">
                    <div className="card-body items-center w-100">
                        <h2 className=" w-100">PiHole's</h2>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr className="h-20">
                                        <th></th>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>Status</th>
                                        <th>Mode</th>
                                        <th>
                                            <div className="w-16">
                                                <AnimatePresence>
                                                    {!paused && (
                                                        <SpinningPencil>
                                                            <button
                                                                className="btn btn-small btn-ghost w-16 rounded-full"
                                                                onClick={
                                                                    toggleEditMode
                                                                }
                                                            >
                                                                {editMode ? (
                                                                    <DoneIcon />
                                                                ) : (
                                                                    <PencilIcon />
                                                                )}
                                                            </button>
                                                        </SpinningPencil>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* server list */}
                                    {/* {editMode ? (
                                        <ServerEditList
                                            serverList={serverList}
                                            editMode={editMode}
                                        />
                                    ) : ( */}
                                        <ServerList
                                            serverList={serverList}
                                            editMode={editMode}
                                        />
                                    {/* )} */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <PauseButton
                        editMode={editMode}
                        paused={paused}
                        togglePaused={togglePaused}
                    />
                </div>
            </div>
        </div>
    )
}
