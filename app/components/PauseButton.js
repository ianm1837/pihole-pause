'use client'
import PauseButtonPresence from './animations/PauseButtonPresence'
import PauseIcon from './icons/PauseIcon'
import RestartIcon from './icons/RestartIcon'
import { AnimatePresence } from 'framer-motion'

export default function PauseButton({ paused, togglePaused, editMode }) {
    return (
        <>
                <div className="m-auto w-100 h-40">
            <AnimatePresence>
                    {!editMode && (
                        <PauseButtonPresence 
                            className="tooltip tooltip-info tooltip-bottom m-auto w-40"
                            data-tip={
                                paused ? 'Restart PiHole' : 'Pause PiHole'
                            }
                        >
                            <button
                                className={`m-auto btn-outline ${
                                    paused ? 'btn-success' : 'btn-error'
                                } rounded-full border-8 w-40 h-40`}
                                onClick={togglePaused}
                            >
                                {paused ? <RestartIcon /> : <PauseIcon />}
                            </button>
                        </PauseButtonPresence>
                    )}
            </AnimatePresence>
                </div>
        </>
    )
}
