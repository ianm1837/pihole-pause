import GearIcon from '../icons/GearIcon'

export default function SettingsGear({ action }) {
    return (
        <div className={`w-100 h-12 flex justify-end`}>
            <button
                className="btn btn-outline btn-secondary w-12 p-0"
                onClick={action}
            >
                <GearIcon />
            </button>
        </div>
    )
}
