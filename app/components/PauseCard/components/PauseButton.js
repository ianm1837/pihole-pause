'use client'
import PauseButtonPresence from '../../animations/PauseButtonPresence'
import PauseIcon from '../../icons/PauseIcon'
import RestartIcon from '../../icons/RestartIcon'
import { AnimatePresence } from 'framer-motion'
import { useGlobalContext } from '../../context/GlobalContext'
import TimePicker from './TimePicker'

export default function PauseButton({ paused, togglePaused, editMode }) {

    const { pauseIt, modifiedServerData, selectedDuration } = useGlobalContext()

    return (
        <>
            <div className="m-auto w-100 h-40 flex flex-col">
                <div
                    className={`${modifiedServerData[0]? '' : 'tooltip tooltip-info tooltip-bottom'} m-auto w-40 h-40`}
                    data-tip={`${modifiedServerData[0]? '':'add a server to pause'}`}
                >
                    <button
                        className={`m-auto btn-outline rounded-full border-8 w-40 h-40 ${
                            modifiedServerData[0]
                                ? 'btn-primary'
                                : 'btn-disabled'
                        }`}
                        // onClick={togglePaused}
                        onClick={() => pauseIt(selectedDuration)}
                        disabled={!modifiedServerData[0]}
                    >
                        <PauseIcon />
                    </button>
                </div>
                    <TimePicker/>
            </div>
        </>
    )
}
