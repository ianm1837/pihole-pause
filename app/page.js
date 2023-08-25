'use client'
import Image from 'next/image'
import SettingsButton from './components/SettingsButton'
import PauseButton from './components/PauseButton'
import SaveSettingsButton from './components/SaveSettingsButton'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useAnimate, usePresence } from 'framer-motion'
import PencilIcon from './components/icons/PencilIcon'
import DoneIcon from './components/icons/DoneIcon'
import TrashIcon from './components/icons/TrashIcon'
import SwapIconAnimation from './components/animations/SwapIconAnimation'
import SpinningPencil from './components/animations/SpinningPencil'
import TrashcanAnimation from './components/animations/TrashcanAnimation'

async function saveSettings() {
    return
}

export default function Home() {
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
            {/* navbar */}
            <div className="navbar bg-base-100 w-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">
                        PiHole Pause
                    </a>
                </div>
                <div className="flex-none">
                    <SettingsButton />
                </div>
            </div>
            {/* body */}
            <div className="flex flex-col items-center w-100">
                <div className="card w-10/12 bg-neutral shadow-xl grow m-8 pb-14">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">PiHole's</h2>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr className="h-20">
                                        <th></th>
                                        <th>Name</th>
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
                                                                    // <SwapIconAnimation>
                                                                    <DoneIcon />
                                                                ) : (
                                                                    // </SwapIconAnimation>
                                                                    // <SwapIconAnimation>
                                                                    <PencilIcon />
                                                                    // </SwapIconAnimation>
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
                                    {/* row 1 */}
                                    <tr className="h-20">
                                        <th>1</th>
                                        <td>PiHole Alpha</td>
                                        <td>Online</td>
                                        <td>
                                            <div className="badge badge-error">
                                                Blocking
                                            </div>
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
                                    {/* row 2 */}
                                    <tr className="h-20">
                                        <th>2</th>
                                        <td>PiHole Beta</td>
                                        <td>Online</td>
                                        <td>
                                            <div className="badge badge-success">
                                                Paused
                                            </div>
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
