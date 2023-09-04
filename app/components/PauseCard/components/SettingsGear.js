import GearIcon from '../../icons/GearIcon'
import { useGlobalContext } from '../../context/GlobalContext'
import PencilIcon from '../../icons/PencilIcon'

export default function SettingsGear({ action }) {
    const { openSettingsPage, paused } = useGlobalContext()

    return (
        <div className={`w-100 h-12 flex justify-end items-end`}>
            <button
                className="border border-primary w-20 h-9 rounded-md text-primary flex justify-center content-middle hover:bg-primary hover:text-primary-content "
                onClick={() => openSettingsPage()}
                disabled={paused}
            >
                {/* <GearIcon /> */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    className="fill-current mr-0.5 m-auto"
                >
                    <path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                </svg>
                <div className="ml-1 m-auto">Edit</div>
            </button>
        </div>
    )
}
