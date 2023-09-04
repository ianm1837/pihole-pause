import GearIcon from '../../icons/GearIcon'
import { useGlobalContext } from '../../context/GlobalContext'

export default function SettingsGear({ action }) {
    const { openSettingsPage, paused } = useGlobalContext()

    return (
        <div className={`w-100 h-12 flex justify-end`}>
            <button
                className="btn btn-outline btn-primary w-12 p-0"
                onClick={() => openSettingsPage()}
                disabled={paused}
            >
                <GearIcon />
            </button>
        </div>
    )
}
