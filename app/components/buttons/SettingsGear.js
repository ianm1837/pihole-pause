import GearIcon from '../icons/GearIcon'
import { useGlobalContext } from '../GlobalContext'

export default function SettingsGear({ action }) {
    const { openSettingsPage } = useGlobalContext()

    return (
        <div className={`w-100 h-12 flex justify-end`}>
            <button
                className="btn btn-outline btn-secondary w-12 p-0"
                onClick={() => openSettingsPage()}
            >
                <GearIcon />
            </button>
        </div>
    )
}
