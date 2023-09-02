import CloseIcon from "../../icons/CloseIcon"
import { useGlobalContext } from "../../context/GlobalContext"

export default function SettingsGear() {

    const { closeSettingsPage } = useGlobalContext()

    return (
        <div className={`w-100 h-12 flex justify-end`}>
            <button
                className="btn btn-outline btn-secondary w-12 p-0"
                onClick={() => closeSettingsPage()}
            >
                <CloseIcon />
            </button>
        </div>
    )
}
