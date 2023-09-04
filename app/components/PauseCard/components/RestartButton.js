'use client'
import RestartIcon from '../../icons/RestartIcon'
import { useGlobalContext } from '../../context/GlobalContext'

export default function PauseButton({ paused, togglePaused, editMode }) {
    const { restartIt } = useGlobalContext()

    return (
        <div className="m-auto w-100 h-40 flex">
            <div
                className=" m-auto w-40"
                // tooltip tooltip-info tooltip-bottom
                data-tip={'Restart PiHole'}
            >
                <button
                    className={`m-auto btn-outline btn-primary rounded-full border-8 w-40 h-40`}
                    onClick={() => restartIt()}
                >
                    <RestartIcon />
                </button>
            </div>
        </div>
    )
}
