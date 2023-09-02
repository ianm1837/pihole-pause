'use client'
import PauseButtonPresence from '../../animations/PauseButtonPresence'
import PauseIcon from '../../icons/PauseIcon'
import RestartIcon from '../../icons/RestartIcon'
import { AnimatePresence } from 'framer-motion'
import { useGlobalContext } from '../../context/GlobalContext'
import { useEffect, useState } from 'react'

export default function PauseButton({ paused, togglePaused, editMode }) {
    const { restartIt } = useGlobalContext()


    
    return (
        <div className="m-auto w-100 h-40 flex">
            <div
                className="tooltip tooltip-info tooltip-bottom m-auto w-40"
                data-tip={'Pause PiHole'}
            >
                <button
                    className={`m-auto btn-outline btn-secondary rounded-full border-8 w-40 h-40`}
                    onClick={() => restartIt()}
                >
                    <RestartIcon />
                </button>

            </div>
        </div>
    )
}
