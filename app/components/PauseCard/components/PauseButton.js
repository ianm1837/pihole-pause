'use client'
import PauseIcon from '../../icons/PauseIcon'
import { useGlobalContext } from '../../context/GlobalContext'

export default function PauseButton() {
    const { pauseIt, modifiedServerData, selectedDuration } = useGlobalContext()

    return (
        <>
            <div className="mx-auto w-100 h-40 flex flex-col mt-0 my-7 xl:mt-8 ">
                <div
                    className={`${
                        modifiedServerData[0]
                            ? ''
                            : 'tooltip tooltip-info tooltip-bottom'
                    } m-auto w-40 h-40`}
                    data-tip={`${
                        modifiedServerData[0] ? '' : 'add a server to pause'
                    }`}
                >
                    <button
                        className={`m-auto btn-outline rounded-full border-8 w-40 h-40 ${
                            modifiedServerData[0]
                                ? 'btn-primary'
                                : 'btn-disabled'
                        }`}
                        onClick={() => pauseIt(selectedDuration)}
                        disabled={!modifiedServerData[0]}
                    >
                        <PauseIcon />
                    </button>
                </div>
            </div>
        </>
    )
}
